import { useState, useEffect, useContext } from 'react'
import { useIdleTimer } from 'react-idle-timer'
import { TEEAuthDataContext } from '../context'

interface UseIdleSessionProps {
    timeout: number
}

const useIdleSession = ({ timeout }: UseIdleSessionProps) => {
    const { auth } = useContext(TEEAuthDataContext)

    const [ showInactiveModal, setShowInactiveModal ] = useState(false)
    const [ isSessionInactive, setIsSessionInactive ] = useState(false)

    const onCloseInactiveModal = async () => {
        if (auth) {     
            try {
                console.log("Auth: signin silent...")
                await auth.signinSilent()
            }
            catch (ex) 
            {
                console.log("Auth: signin silent failed...", ex)
                console.log("Auth: signin redirect...")
                await auth.signinRedirect()
            }
        }
        
        setShowInactiveModal(false)
        setIsSessionInactive(false)
    }

    const handleIdle = () => setIsSessionInactive(true)

    const idleTimer = useIdleTimer({
        timeout,
        onIdle: handleIdle
    })

    useEffect(() => {
        if (isSessionInactive) {
            idleTimer.reset()
            setShowInactiveModal(true)
        }
    }, [ isSessionInactive ])

    return {
        showInactiveModal,
        onCloseInactiveModal
    }
}

export default useIdleSession