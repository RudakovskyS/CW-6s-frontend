import { User } from "./user.dto";

export interface Comment {
    comment_id: number
    content: string;
    date_created: Date
    user: User
}