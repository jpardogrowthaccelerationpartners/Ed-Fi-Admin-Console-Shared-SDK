import { Flex } from "@chakra-ui/react"

interface AppItemCardSimpleIconProps {
    lightIconUrl: string
}

const AppItemCardSimpleIcon = ({ lightIconUrl }: AppItemCardSimpleIconProps) => {
    return (
        <Flex 
            backgroundImage={lightIconUrl}
            borderRadius='10px'
            backgroundPosition='center'
            backgroundRepeat='repeat'
            backgroundSize='100%'
            alignItems='center'
            justifyContent='center'
            transition="all 0.3s ease-in-out"
            h='full' 
            w='full'
            _hover={{ backgroundSize: '108%' }} />
    )
}

export default AppItemCardSimpleIcon