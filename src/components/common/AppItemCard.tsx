import { Flex, Card, Link, Image, useColorModeValue, useColorMode, Heading } from '@chakra-ui/react'
import modeColors from '../../themes/baseTheme/modeColors'
import AppItemCardIcon from './AppItemCardIcon'
import AppItemCardOptionsPopover from './AppItemCardOptionsPopover'

interface AppItemCardProps {
    appId: string
    imageUrl: string | null
    lightBackgroundUrl?: string 
    darkImageUrl?: string
    darkBackgroundUrl?: string
    overlayColor: string
    description: string
    actionLink: string
    bookmarked: boolean
    onBookmark: (appId: string) => void
}

const AppItemCard = ({ appId, imageUrl, description, actionLink, lightBackgroundUrl, darkBackgroundUrl, darkImageUrl, overlayColor, bookmarked, onBookmark }: AppItemCardProps) => {
    const { colorblued } = modeColors
    const bg = useColorModeValue(colorblued.light, colorblued.dark)
    const { colorMode } = useColorMode()

    return (
        <Card 
            display='flex' 
            direction='row' 
            borderRadius='8px' 
            marginTop='15px' 
            marginRight='15px'
            shadow='lg'
            bg={bg}
            h='102px' 
            w='303px'>
                <Link href={actionLink} display='flex' h='full' w='102px'>
                    {imageUrl? 
                        <AppItemCardIcon 
                            colorMode={colorMode}
                            lightBackgroundTileUrl={lightBackgroundUrl ?? ""}
                            darkBackgroundTileUrl={darkBackgroundUrl ?? ""}
                            darkIconUrl={darkImageUrl ?? ""}
                            lightIconUrl={imageUrl ?? ""} /> : 
                        <Flex 
                            bg='blue.500' 
                            borderRadius='10px 0 0 10px'
                            h='full'
                            w='full' />}
                </Link>
                <Flex 
                    fontSize='sm'
                    justifyContent='center'
                    alignItems='center' 
                    padding='5px 10px'
                    h='full'
                    w='201px'>
                        <Link 
                            fontFamily='Poppins'
                            display='flex'
                            alignItems='center'
                            href={actionLink}
                            padding='5px 5px'
                            h='full'
                            w='full'> 
                                <Heading 
                                    fontWeight='600'
                                    size='xs'>{description}</Heading>
                        </Link>
                        <AppItemCardOptionsPopover 
                            appId={appId}
                            description={description}
                            actionLink={actionLink}
                            bookmarked={bookmarked}
                            onBookmark={onBookmark} />
                </Flex>
        </Card>
    )
}

export default AppItemCard