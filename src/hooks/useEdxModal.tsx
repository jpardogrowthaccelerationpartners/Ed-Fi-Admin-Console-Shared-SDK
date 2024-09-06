import { useState } from 'react'

const useEdxModal = () => {
    const [ showEdxModal, setShowEdxModal ] = useState(false)

    const openEdxModal = () => {
        setShowEdxModal(true)
    }

    const hideEdxModal = () => {
        setShowEdxModal(false)
    }

    return {
        showEdxModal,
        openEdxModal,
        hideEdxModal
    }
}

export default useEdxModal