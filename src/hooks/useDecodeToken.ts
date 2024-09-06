const useDecodeToken = () => {
    const decodeTokenPayload = (token: string) => {
        const tokenPayload = token.split(".")[1]
        const stringDecodedPayload = atob(tokenPayload)
        const decodedTokenPayload = JSON.parse(stringDecodedPayload)

        return decodedTokenPayload
    }

    return {
        decodeTokenPayload
    }
}

export default useDecodeToken