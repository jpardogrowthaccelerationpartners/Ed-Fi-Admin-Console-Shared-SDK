import { Flex } from "@chakra-ui/react"

interface RightSlideInPanelBodyProps {
    header: JSX.Element
    content: JSX.Element
    height: string 
    bodyPadding?: string 
    width: string 
}

const RightSlideInPanelBody = ({ header, content, bodyPadding, height, width }: RightSlideInPanelBodyProps) => {
    return (
        <form style={{ display: 'flex', height, width }}>
            <Flex 
                bg='white'
                padding={ bodyPadding ?? '32px 34px'}
                flexDir='column'
                h='full'
                w='full'>
                    <Flex w='full'>
                        {header}
                    </Flex>
                    <Flex mt='32px' w='full'>
                        {content}
                    </Flex>
            </Flex>
        </form>
    )
}

export default RightSlideInPanelBody