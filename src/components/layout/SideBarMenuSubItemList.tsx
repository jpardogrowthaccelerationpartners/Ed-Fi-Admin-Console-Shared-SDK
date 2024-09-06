import { Flex } from "@chakra-ui/react"
import { SideBarMenuSubItemData } from "./SideBar"
import SideBarMenuSubItem from "./SideBarMenuSubItem"

interface SideBarSubItemListProps {
    subItems: SideBarMenuSubItemData[]
    selectedItemId: string 
    textColor?: string 
    activeSubItemColor?: string 
    hoverSubItemColor?: string  
    onClickItem: (id: string) => any
}

const SideBarMenuSubItemList = ({ subItems, selectedItemId, textColor, activeSubItemColor, hoverSubItemColor, onClickItem }: SideBarSubItemListProps) => {
    return (
        <Flex flexDir='column' w='full'>
            { subItems.map((subItem, index) => 
                <Flex pl='15px' key={index}>
                    <SideBarMenuSubItem 
                        key={index}
                        item={subItem}
                        selectedItemId={selectedItemId}
                        textColor={textColor} 
                        activeSubItemColor={activeSubItemColor} 
                        hoverSubItemColor={hoverSubItemColor} 
                        onClickItem={onClickItem}  />
                </Flex>
            ) }
        </Flex>
    )
}

export default SideBarMenuSubItemList