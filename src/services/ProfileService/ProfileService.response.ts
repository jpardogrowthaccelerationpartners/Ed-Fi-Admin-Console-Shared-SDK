import { TenantUser } from "../../core/User.types"

export interface PostUserProfileExtensionResponse {
    userId: string
}

export interface GetUsersListResponse {
    pageIndex: number,
    pageSize: number,
    count: number,
    data: TenantUser[]
}

export interface MyTenant {
    tenantId: string 
    tenantType: string 
    organizationIdentifier: string 
    organizationName: string 
    state: string 
    tenantStatus: string 
    isDemo: boolean 
    educationOrganizations: any[]
    licenses: any[]
}

export interface GetMyTenantsResponse {
    pageIndex: number 
    pageSize: number 
    count: number 
    data: MyTenant[]
}