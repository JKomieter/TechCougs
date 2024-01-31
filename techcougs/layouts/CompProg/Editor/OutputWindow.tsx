import checkIfSolved from "@/utils/checkIfSolved";
import React, { useEffect, useMemo } from "react";

const OutputWindow = ({
    outputDetails,
    expected,
    question_id,
    programmer_id,
}: {
    outputDetails: any;
    expected: string;
    question_id: string;
    programmer_id: string;
}) => {
    const getOutput = () => {
        if (!outputDetails) {
            // Loading state
            return <p>Loading...</p>;
        }

        const statusId = outputDetails?.status?.id;

        switch (statusId) {
            case 6: // Compilation error
                return (
                    <pre className="px-2 py-1 font-normal text-xs text-red-500">
                        {atob(outputDetails?.compile_output)}
                    </pre>
                );
            case 3: // Success
                return (
                    <pre className="px-2 py-1 font-normal text-xs text-green-500">
                        {atob(outputDetails.stdout) !== null
                            ? `${atob(outputDetails.stdout)}`
                            : null}
                    </pre>
                );
            case 5: // Time Limit Exceeded
                return (
                    <pre className="px-2 py-1 font-normal text-xs text-red-500">
                        {"Time Limit Exceeded"}
                    </pre>
                );
            default: // Handle other statusIds or unexpected values
                return (
                    <pre className="px-2 py-1 font-normal text-xs text-red-500">
                        {atob(outputDetails?.stderr)}
                    </pre>
                );
        }
    };

    useEffect(() => {
        const statusId = outputDetails?.status?.id;

        const compareAnswer = async () => {
            if (statusId) {
                await checkIfSolved(
                    atob(outputDetails.stdout),
                    expected,
                    question_id,
                    programmer_id
                );
            }
        };

        compareAnswer(); 
    }, [outputDetails]);


    return (
        <>
            <h1 className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700 mb-2">
                Output
            </h1>
            <div className="w-full h-56 bg-[#1e293b] rounded-md text-white font-normal text-sm overflow-y-auto">
                {getOutput()}
            </div>
        </>
    );
};

export default OutputWindow;
