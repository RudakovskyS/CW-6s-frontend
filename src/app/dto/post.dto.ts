import { Dislike } from "./dislike.dto";
import { Like } from "./like.dto";
import { Topic } from "./topic.dto";
import { User } from "./user.dto";
import { Comment } from "./comment.dto"

export interface Post{
    post_id: number;
    title: string;
    content: string;
    date_created: Date;
    user: User
    topic: Topic
    likes: Like[]
    dislikes: Dislike[]
    comments: Comment[]
  }
  