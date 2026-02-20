export interface ApiResponse<T> {
    records: T,
    date: Date,
    statusCode: number,
    message: string
}