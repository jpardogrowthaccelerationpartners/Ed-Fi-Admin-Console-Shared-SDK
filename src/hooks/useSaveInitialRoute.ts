import { useEffect } from "react"
import useInitialRouteData from "./useInitialRouteData"

interface UseSaveInitialRouteParams {
    homeUrl: string
    appBasePath: string
}

const useSaveInitialRoute = ({ appBasePath, homeUrl }: UseSaveInitialRouteParams) => {
    const { initialUrlStorageField } = useInitialRouteData()

    useEffect(() => {
        if (!window.location.href.includes("callback")) {
            const pathName = window.location.pathname
            const destination = pathName.includes(appBasePath)? pathName.replaceAll(appBasePath, "") : pathName
    
            const hashName = window.location.hash
    
            let requestedRoute = `${destination}${hashName}`
    
            if (requestedRoute === "")
                requestedRoute = homeUrl
    
            localStorage.setItem(initialUrlStorageField, requestedRoute)
        }
    }, [ ])
}

export default useSaveInitialRoute