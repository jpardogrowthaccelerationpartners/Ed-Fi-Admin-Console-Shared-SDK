export interface PostUserProfileExtensionRequest {
    userId: string
    code: string
    data: string
    dataType: string
}

export interface GetMyTenantsRequest {
    pageIndex: number 
    pageSize: number 
    orderBy?: string 
    filterBy?: string 
}