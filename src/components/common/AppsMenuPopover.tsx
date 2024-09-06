import { Flex, Popover, PopoverTrigger, PopoverContent, PopoverCloseButton, PopoverBody, Button, useColorModeValue } from '@chakra-ui/react'
import modeColors from '../../themes/baseTheme/modeColors'
import { CgMenuGridO } from 'react-icons/cg'

interface AppsMenuPopoverProps {
    content: JSX.Element
    footer: JSX.Element
}

const AppsMenuPopover = ({ content, footer }: AppsMenuPopoverProps) => {
    const { colorblued } = modeColors
    const bg = useColorModeValue(colorblued.light, colorblued.dark)
    const lineColor = useColorModeValue("gray.200", "blue.900")

    return (
        <Popover>
            <PopoverTrigger>
                <Button 
                    aria-label="Show Quick Launcher Menu"
                    display='flex'
                    bg='white'
                    color='blue.900'
                    variant='icon'
                    border='none' 
                    marginRight='8px'
                    _hover={{ backgroundColor: '#e9ecf7', color: 'blue.900' }}
                    padding='0'>
                        <CgMenuGridO fontSize='30px' aria-hidden="true" focusable="false" aria-description="Quick Launcher Menu Icon" />
                </Button>
            </PopoverTrigger>
            <PopoverContent 
                aria-label="Applications Menu"
                left='15px' 
                bg={bg} 
                width='auto'>
                <PopoverBody padding='16px'>
                    { content }
                </PopoverBody>
            </PopoverContent>
        </Popover>
    )
}

export default AppsMenuPopover