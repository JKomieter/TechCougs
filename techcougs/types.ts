export interface QuestionType {
    title: String,
    examples: {
        input: String,
        output: String,
        explanation: String
    },
    description: String
    id: string
}