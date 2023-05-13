import { User } from "./user.dto";

export interface Comment{
    content: string;
    date_created: Date
    user: User
}