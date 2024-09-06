import { UserProfile } from "../../core";
import { HttpServiceRequestError, HttpServiceResponse } from "../HttpService/HttpService.response.types";
import { GetMyTenantsResponse, GetUsersListResponse, PostUserProfileExtensionResponse } from "./ProfileService.response";

export type GetUserProfileResult = Promise<HttpServiceResponse<UserProfile> | HttpServiceRequestError>
export type GetMyTenantsResult = Promise<HttpServiceResponse<GetMyTenantsResponse> | HttpServiceRequestError>
export type GetUsersListResult = Promise<HttpServiceResponse<GetUsersListResponse> | HttpServiceRequestError>
export type PostUserProfileExtensionResult = Promise<HttpServiceResponse<PostUserProfileExtensionResponse> | HttpServiceRequestError>
export type PostTenantIdPreference = Promise<HttpServiceResponse<any> | HttpServiceRequestError>