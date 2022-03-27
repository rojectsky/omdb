export type SearchResult<T> = {
    total: number;
    page: number;
    data: T[];
}