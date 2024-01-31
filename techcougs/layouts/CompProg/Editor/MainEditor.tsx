import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import LanguagesDropdown from "./LanguagesDropdown";
import CodeEditorWindow from './CodeEditorWindow';
import OutputWindow from "./OutputWindow";
import CustomInput from "./CustomInput";
import useKeyPressHook from '@/hooks/useKeyPress';
import { languageOptions } from '@/constants/languageOptions';
import axios from "axios";
import OutputDetails from './OutputWindow';
import { QuestionType } from '@/types';



const javascriptDefault = `// some comment`;

function MainEditor({
    question,
    programmer_id,
}: {
    question: QuestionType,
    programmer_id: string
}) {
    const [code, setCode] = useState("");
    const [customInput, setCustomInput] = useState("");
    const [outputDetails, setOutputDetails] = useState(null);
    const [processing, setProcessing] = useState<boolean |null>(null);
    const [theme, setTheme] = useState("cobalt");
    const [language, setLanguage] = useState(languageOptions[0]);

    const enterPress = useKeyPressHook("Enter");
    const ctrlPress = useKeyPressHook("Control");

    useEffect(() => {
        setCode(question?.boilerplate)
    }, [question])

    const onSelectChange = (sl: any) => {
        console.log("selected Option...", sl);
        setLanguage(sl);
    };

    const showSuccessToast = (msg: String) => {
        toast.success(msg || `Compiled Successfully!`, {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    };
    const showErrorToast = (msg: String) => {
        toast.error(msg || `Something went wrong! Please try again.`, {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    };

    useEffect(() => {
        if (enterPress && ctrlPress) {
            console.log("enterPress", enterPress);
            console.log("ctrlPress", ctrlPress);
            handleCompile();
        }
    }, [ctrlPress, enterPress]);

    const onChange = (action: any, data: any) => {
        switch (action) {
            case "code": {
                setCode(data);
                break;
            }
            default: {
                console.warn("case not handled!", action, data);
            }
        }
    };

    const handleCompile = () => {
        setProcessing(true);
        const formData = {
            language_id: language.id,
            // encode source code in base64
            source_code: btoa(code),
            stdin: btoa(customInput),
        };
        const options = {
            method: "POST",
            url: process.env.NEXT_PUBLIC_RAPID_API_URL,
            params: { base64_encoded: "true", fields: "*" },
            headers: {
                "content-type": "application/json",
                "Content-Type": "application/json",
                "X-RapidAPI-Host": process.env.NEXT_PUBLIC_RAPID_API_HOST,
                "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPID_API_KEY,
            },
            data: formData,
        };

        axios
            .request(options)
            .then(function (response) {
                console.log("res.data", response.data);
                const token = response.data.token;
                checkStatus(token);
            })
            .catch((err) => {
                let error = err.response ? err.response.data : err;
                setProcessing(false);
                console.log(error);
            });
    };


    const checkStatus = async (token: string) => {
        const options = {
            method: "GET",
            url: process.env.NEXT_PUBLIC_RAPID_API_URL + "/" + token,
            params: { base64_encoded: "true", fields: "*" },
            headers: {
                "X-RapidAPI-Host": process.env.NEXT_PUBLIC_RAPID_API_HOST,
                "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPID_API_KEY,
            },
        };
        try {
            let response = await axios.request(options);
            let statusId = response.data.status?.id;

            // Processed - we have a result
            if (statusId === 1 || statusId === 2) {
                // still processing
                setTimeout(() => {
                    checkStatus(token)
                }, 2000)
                return
            } else {
                setProcessing(false)
                setOutputDetails(response.data)
                showSuccessToast(`Compiled Successfully!`)
                console.log('response.data', response.data)
                return
            }
        } catch (err) {
            console.log("err", err);
            setProcessing(false);
            showErrorToast("");
        }
    };


    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <div className='w-full h-full flex flex-col gap-5'>
                <div className="px-4 py-2">
                    <LanguagesDropdown onSelectChange={onSelectChange} />
                </div>
                <div className="w-full h-[300px]">
                    <CodeEditorWindow 
                        code={code}
                        onChange={onChange}
                        language={language?.value}
                        setCode={setCode}
                    />
                </div>
                <div className="w-full">
                    <OutputWindow outputDetails={outputDetails} expected={question.expected} question_id={question.id} programmer_id={programmer_id} />
                </div>
                <div className="w-full">
                    <CustomInput
                        customInput={customInput}
                        setCustomInput={setCustomInput}
                    />
                    <button
                        onClick={handleCompile}
                        disabled={!code}
                        className={
                            `mt-4 border-2 border-black z-10 rounded-md shadow-[5px_5px_0px_0px_rgba(0,0,0)] px-4 py-2 hover:shadow transition duration-200 bg-white flex-shrink-0",
                            !code ? "opacity-50" : ""
                        `}
                    >
                        {processing ? "Processing..." : "Compile and Execute"}
                    </button>
                </div>  
                {outputDetails && <OutputDetails outputDetails={outputDetails} expected={question.expected} question_id={question.id} programmer_id={programmer_id} />}
            </div>
        </>
    )
}

export default MainEditor