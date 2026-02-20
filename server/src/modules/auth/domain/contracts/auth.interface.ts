export interface auth_interface {
    create_user(data: any, session: any): Promise<any>
    get_all_user(): Promise<any>
    // get_seeker_by_email(email:string):Promise<any>
    get_provider_by_id(id: string): Promise<any>
    // add_seeker(data:any):Promise<any>
    add_provider(data: any, session: any): Promise<any>
    attach_google_id(id: string, data: any): Promise<any>
    add_provider_without_session(data: any): Promise<any>
}
