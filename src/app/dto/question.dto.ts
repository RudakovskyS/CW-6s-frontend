import { Answer } from "./answer.dto"

export interface Question{
    question_id: number
    content: string
    answers: Answer[]
}