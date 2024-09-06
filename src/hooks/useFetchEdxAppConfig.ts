import { useEffect, useState } from "react"
import { EdxAppConfig } from "../core"
import fetchConfig from "../services/EdxAppConfigService"

interface UseFetchEdxAppConfig {
    env: string | undefined
    serverMode: string | undefined
}

const useFetchEdxAppConfig = ({ env, serverMode }: UseFetchEdxAppConfig) => {
    const [appConfig, setAppConfig] = useState<EdxAppConfig | null>(null)

    const fetchAppConfig = async () => {
        const config = await fetchConfig({ env, serverMode })

        setAppConfig(config)
    }

    useEffect(() => {
        fetchAppConfig()
    }, [])

    return {
        appConfig
    }
}

export default useFetchEdxAppConfig