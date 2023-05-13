import { Dislike } from "./dislike.dto"
import { Like } from "./like.dto"

export interface User{
    user_id: number
    username: string
    likes: Like[]
    dislikes: Dislike[]
    quizesTaken: number
    correctAnswers: number
}