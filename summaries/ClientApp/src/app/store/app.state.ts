import { Book } from "../models/book.model";

export interface AppState
{
    readonly books: Book[];
}
