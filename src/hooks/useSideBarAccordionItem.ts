import { SideBarMenuItemData } from "../components/layout/SideBar"

interface UseSideBarAccordionItemProps {
    item: SideBarMenuItemData
    selectedItemId: string
    selectedAccordionId: string | undefined
    isOpen: boolean 
}

const useSideBarAccordionItem = ({ item, selectedItemId, selectedAccordionId, isOpen }: UseSideBarAccordionItemProps) => {
    const findSelectedChildren = () => {
        if (item.subItems) {
            return item.subItems
                .find(subItem => subItem.id === selectedItemId)
        }

        return false
    }

    const showAsSelectedAccordion = () => {
        const hasSelectedChildren = findSelectedChildren()

        return item.id === selectedAccordionId && hasSelectedChildren && !isOpen
    }

    return {
        showAsSelectedAccordion
    }
}

export default useSideBarAccordionItem