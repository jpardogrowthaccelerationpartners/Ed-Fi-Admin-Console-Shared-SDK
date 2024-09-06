import { createContext } from 'react'
import { ExternalAppsContextData } from '../core/Apps.types'

export const ExternalAppsContext = createContext<ExternalAppsContextData>({
    externalApps: [],
    loadingExternalApps: false,
    fetchedExternalApps: false,
    setExternalApps: () => null
})