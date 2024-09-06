import { createContext, useEffect } from "react";
import { EdxAppConfig } from "../core/EdxApp.types";
import { AuthContextProps, useAuth } from "react-oidc-context";
import { UserProfileContext } from "./UserProfileContext";
import { ExternalAppsContext } from "./ExternalAppsContext";
import { useUserAppList, useUserProfile } from "../hooks";

interface ITEEAuthDataContext {
  edxAppConfig: EdxAppConfig | null;
  auth: AuthContextProps | null;
}

export const TEEAuthDataContext = createContext<ITEEAuthDataContext>({
  edxAppConfig: null,
  auth: null,
});

interface TEEAuthContextProviderProps {
  children: JSX.Element;
  edxAppConfig: EdxAppConfig;
}

export const TEEAuthDataContextProvider = ({
  children,
  edxAppConfig,
}: TEEAuthContextProviderProps) => {
  const auth = useAuth();
  const { userProfile, setUserProfile, loadingProfile } = useUserProfile({
    apiUrl: edxAppConfig.api.baseUri ?? "",
  });
  const {
    externalApps,
    setExternalApps,
    fetchedExternalApps,
    loadingExternalApps,
  } = useUserAppList({ userProfile, apiUrl: edxAppConfig.api.baseUri ?? "" });

  console.log("UI Package version", "2.2.5");

  useEffect(() => {
    auth.events.addSilentRenewError(async () => {
      await auth.signinRedirect();
    });
  }, []);

  return (
    <TEEAuthDataContext.Provider value={{ auth, edxAppConfig }}>
      <UserProfileContext.Provider
        value={{
          userProfile,
          setUserProfile,
          loadingProfile,
        }}
      >
        <ExternalAppsContext.Provider
          value={{
            externalApps,
            fetchedExternalApps,
            loadingExternalApps,
            setExternalApps,
          }}
        >
          {children}
        </ExternalAppsContext.Provider>
      </UserProfileContext.Provider>
    </TEEAuthDataContext.Provider>
  );
};
