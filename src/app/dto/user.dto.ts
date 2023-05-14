import { Dislike } from "./dislike.dto"
import { Like } from "./like.dto"
import { Comment } from "./comment.dto";

export interface User {
    user_id: number
    username: string
    likes: Like[]
    dislikes: Dislike[]
    comments: Comment[]
    quizesTaken: number
    correctAnswers: number
    isAdmin: boolean
}