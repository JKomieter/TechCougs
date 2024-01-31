export interface QuestionType {
    title: String,
    examples: {
        input: String,
        output: String,
        explanation: String
    }[],
    description: String
    id: string,
    expected: "[0, 1]"
    boilerplate: string
}

export interface ProgrammerType {
    id: String,
    disqualified: boolean,
    email: String,
    questions_solved: String[],
    questions_submitted: String[],
    score: number,
    time_left: {
        hours: number,
        minutes: number,
        seconds: number,
    },
    username: String
}