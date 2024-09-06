import { UserProfile } from "./User.types"

interface Api {
    baseUri: string
}

interface AppAnalytics {
    containerId: string
    managerUrl: string
}
  
interface App {
    name: string
    subtitle: string
    basePath: string
    notificationsApplicationId: string 
    baseImagesUrl?: string
    helpLinkUrl?: string
    launcher?: string 
    analytics?: AppAnalytics
}
  
interface Auth {
    authority: string
    clientId: string
    redirectUri: string
    silentRedirectUri: string
    postLogoutRedirectUri: string
    scope: string
    responseType: string
    loadUserInfo: boolean
    automaticSilentRenew: boolean
    automaticSilentSignin: boolean
}

export interface EdxAppConfig {
    api: Api
    app: App
    auth: Auth
}

export interface UserProfileContextData {
    userProfile: UserProfile | null
    setUserProfile: React.Dispatch<React.SetStateAction<UserProfile | null>>
    loadingProfile: boolean
}