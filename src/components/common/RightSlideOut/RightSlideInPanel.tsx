import { Flex } from "@chakra-ui/react"
import { AnimatePresence, motion } from "framer-motion"
import RightSlideInPanelBody from "./RightSlideInPanelBody"

interface RightSlideInPanelProps {
    header: JSX.Element
    content: JSX.Element
    show: boolean 
    bodyPadding?: string 
    padding?: string
    background?: string 
    borderLeft?: string
    borderTop?: string
    borderBottom?: string
    borderRight?: string
    borderColor?: string 
    width?: string 
    bodyWidth?: string 
    maxWidth?: string
}

const RightSlideInPanel = ({ header, content, show, bodyPadding, background, borderTop, borderBottom, borderLeft, borderRight, borderColor, padding, bodyWidth, width, maxWidth }: RightSlideInPanelProps) => {
    return (
        <Flex
            transition="all 0.7s ease-in-out"
            bg={ background ?? '#eff4f6'}
            borderTop={ borderTop }
            borderBottom={ borderBottom }
            borderLeft={ borderLeft }
            borderRight={ borderRight }
            borderTopColor={ borderColor }
            borderBottomColor={ borderColor }
            borderRightColor={ borderColor }
            borderLeftColor={ borderColor }
            padding={ show? (padding ?? '111px 67px 463px 42px') : '0'}
            w={ show? (width ?? '629px') : '0px'}
            maxW={ maxWidth ?? '629px'}>
                <AnimatePresence>
                    {show &&
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }} 
                            exit={{ opacity: 0 }}>
                                <RightSlideInPanelBody
                                    header={header} 
                                    content={content} 
                                    bodyPadding={ bodyPadding }
                                    height="auto" 
                                    width={ bodyWidth ?? "512px"} />      
                    </motion.div>}
                </AnimatePresence>
        </Flex>
    )
}

export default RightSlideInPanel