export interface userInterface{
    get_provider():Promise<any>
    get_provider_by_id(id:string):Promise<any>
    update_provider(id:string,data:any):Promise<any>
}