import { useContext, useEffect } from "react";
import { TEEAuthDataContext } from "../context";

const useAnalyticsTagManager = () => {
  const { edxAppConfig } = useContext(TEEAuthDataContext)

  useEffect(() => {
    if (edxAppConfig && edxAppConfig.app && edxAppConfig.app.analytics) {
      console.log("Adding Matomo tag manager analytics script for react - edx")
      var _mtm = (<any>window)._mtm = (<any>window)._mtm || []

      _mtm.push({'mtm.startTime': (new Date().getTime()), 'event': 'mtm.Start'})

      var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0]

      g.async=true
      g.src=`${edxAppConfig.app.analytics.managerUrl}/js/container_${edxAppConfig.app.analytics.containerId}.js`

      if (s.parentNode) {
        console.log('Insert matomo script')
        s.parentNode.insertBefore(g,s)
      }
    }
  }, [])
}   
  
export default useAnalyticsTagManager