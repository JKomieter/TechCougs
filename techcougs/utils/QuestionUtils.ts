

export const SolvedOrSubmitted = (question_id: String, user_questions: String[]) => {
    return user_questions?.includes(question_id) ? "Yes" : "No";
}