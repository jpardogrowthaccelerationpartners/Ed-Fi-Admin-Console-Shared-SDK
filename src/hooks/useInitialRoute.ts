import useInitialRouteData from "./useInitialRouteData"

const useInitialRoute = () => {
    const { initialUrlStorageField } = useInitialRouteData()

    const getInitialPath = () => localStorage.getItem(initialUrlStorageField)

    return {
        getInitialPath
    }
}

export default useInitialRoute