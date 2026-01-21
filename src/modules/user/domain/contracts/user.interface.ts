export interface user_interface {
    create_user(data: any): Promise<any>
    get_all_user(): Promise<any>
}