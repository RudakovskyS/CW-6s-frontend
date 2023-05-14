import { Topic } from "./topic.dto"

export interface Category{
    category_id: number
    name: string
    topics: Topic[]
    isSelected: boolean;
} 