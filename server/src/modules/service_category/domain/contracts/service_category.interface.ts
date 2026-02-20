export interface service_category_interface{
    add_service_category(data:any):Promise<any>
    get_all_service_category():Promise<any>
    update_service_category(data:any,id:string):Promise<any>
}


 