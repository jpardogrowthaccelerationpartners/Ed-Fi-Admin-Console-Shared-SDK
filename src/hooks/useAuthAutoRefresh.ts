import { useContext, useEffect } from "react";
import { hasAuthParams } from "react-oidc-context";
import { TEEAuthDataContext } from "../context";

interface UseAuthAutoRefreshProps {

}

const useAuthAutoRefresh = (params?: UseAuthAutoRefreshProps) => {
    const { auth } = useContext(TEEAuthDataContext) as any

    useEffect(() => {
        if (auth && !hasAuthParams() && !auth.isAuthenticated && !auth.activeNavigator && !auth.isLoading)
            auth.signinRedirect();
    }, [ 
        auth,
        auth.isAuthenticated, 
        auth.activeNavigator, 
        auth.isLoading, 
        auth.signinRedirect 
    ])
}

export default useAuthAutoRefresh