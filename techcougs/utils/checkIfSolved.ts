import { auth, db } from "@/firebase/config";
import { arrayUnion, collection, doc, query, updateDoc, where } from "firebase/firestore";

export default async function checkIfSolved(
    output: any,
    expected: string,
    question_id: string,
    programmer_id: string
) {
    const programmer = doc(db, "Programmers", programmer_id);
    await updateDoc(programmer, {
        questions_submitted: arrayUnion(question_id)
    });
    console.log("Output", output);
    console.log("Expected", expected)
    if (output !== String(expected)) return;
    await updateDoc(programmer, {
        questions_solved: arrayUnion(question_id)
    });
}