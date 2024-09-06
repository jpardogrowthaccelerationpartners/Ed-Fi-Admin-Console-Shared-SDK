import { Card, Flex, Image, Link, useColorMode, useColorModeValue } from "@chakra-ui/react"
import modeColors from "../../themes/baseTheme/modeColors"
import AppItemCardOptionsPopover from "./AppItemCardOptionsPopover"
import CommunityCardGroupPopover from "./CommunityCardGroupPopover"
import CommunityCardCoursesPopover from "./CommunityCardCoursesPopover"
import React from "react"

interface CommunityCardProps {
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

const CommunityCard = ({ appId, actionLink, bookmarked, description, imageUrl, overlayColor, darkImageUrl, lightBackgroundUrl, darkBackgroundUrl, onBookmark }: CommunityCardProps) => {
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
            w='330px'>
                <Flex h='full' w='102px'>
                    {imageUrl? 
                        <Flex
                            backgroundImage={colorMode === 'light'? lightBackgroundUrl : darkBackgroundUrl}
                            backgroundPosition='center'
                            backgroundRepeat='no-repeat'
                            backgroundSize='cover'
                            borderRadius='8px 0 0 8px'
                            position='relative'
                            alignItems='center'
                            justifyContent='center'
                            transition='all 1s ease-in-out'
                            _hover={{ 
                                backgroundSize: '200%',
                                "#innerOverlay": {
                                    opacity: 0.3
                                }
                            }}
                            h='full'
                            w='full'
                            zIndex='2'>
                                <>
                                    <Flex 
                                        borderRadius='8px 0 0 8px'
                                        alignItems='center' 
                                        justifyContent='center'
                                        h='full' 
                                        w='full'>
                                            <Flex 
                                                borderRadius='8px 0 0 8px'
                                                backgroundColor={overlayColor}
                                                opacity='0.8'
                                                id='innerOverlay'
                                                h='full'
                                                w='full'>
                                            </Flex>
                                            <Image 
                                                position='absolute'
                                                h='50%' 
                                                src={colorMode === 'light'? imageUrl : darkImageUrl}
                                                alt='app image' />
                                    </Flex>
                                </>
                            </Flex> : 
                        <Flex 
                            bg='blue.500' 
                            borderRadius='10px 0 0 10px'
                            h='full'
                            w='full' />}
                </Flex>
                <Flex 
                    fontSize='sm'
                    justifyContent='center'
                    alignItems='center' 
                    padding='5px 0px 0px 10px'
                    h='full'
                    w='220px'>
                        <Flex 
                            flexDir='column'
                            justifyContent='center'
                            alignItems='flex-end'
                            h='full'
                            w='full'>
                                <Flex 
                                    justifyContent='flex-end'
                                    paddingLeft='5px'
                                    h='full'
                                    w='full'>
                                    <Link 
                                        fontWeight='bold'
                                        fontSize='md'
                                        display='flex'
                                        alignItems='center'
                                        href={actionLink}
                                        w='full'> 
                                            {description}
                                    </Link>
                                </Flex>
                                <Flex   
                                    marginTop='auto'
                                    alignItems='flex-end'
                                    w='full'>
                                        <CommunityCardGroupPopover />
                                        <Flex marginLeft='10px'>
                                            <CommunityCardCoursesPopover />
                                        </Flex>
                                </Flex>
                        </Flex>
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

export default CommunityCard