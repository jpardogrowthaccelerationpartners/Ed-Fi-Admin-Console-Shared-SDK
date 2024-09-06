export interface TenantSelectPopoverItem {
    tenantId: string 
    organizationIdentifier: string 
    organizationName: string 
}

export interface TenantSelectPopoverPaginationData {
    pageIndex: number 
    pageSize: number 
    isLoading: boolean 
    totalCount: number 
}