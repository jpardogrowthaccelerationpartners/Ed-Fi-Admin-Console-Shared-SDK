import { Flex, Text, Button } from "@chakra-ui/react"

interface TenantSelectPopoverPaginationControlsProps {
    shownItems: number 
    totalItems: number 
    onLoadMoreItems: () => void
}

const TenantSelectPopoverPaginationControls = ({ shownItems, totalItems, onLoadMoreItems }: TenantSelectPopoverPaginationControlsProps) => {
    return (
        <Flex alignItems='flex-end' justifyContent='space-between' mt='10px' w='full'>
            <Text 
                color='blue.500'
                fontSize='xs'
                fontFamily='Open sans'
                fontWeight='400'>
                    Showing {shownItems} of {totalItems}
            </Text>
            { shownItems < totalItems && <Button
                onClick={onLoadMoreItems}
                color='blue.500'
                fontFamily='Open sans'
                fontWeight='700'
                padding='0'
                minWidth='auto'>
                    Load More
            </Button> }
        </Flex>
    )
}

export default TenantSelectPopoverPaginationControls