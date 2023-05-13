import { Topic } from "./topic.dto"

export interface Category{
    cateroty_id: number
    name: string
    topics: Topic[]
    isSelected: boolean;
} 