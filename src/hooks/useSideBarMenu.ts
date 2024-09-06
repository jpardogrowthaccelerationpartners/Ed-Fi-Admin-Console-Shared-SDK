import { useEffect, useState } from "react"
import { SideBarMenuItemData } from "../components/layout/SideBar"

interface UseSidBarMenuProps {
    items: SideBarMenuItemData[]
    showText: boolean 
    onExpand: () => void
}

interface AccordionData {
    accordionId: string 
    isOpen: boolean 
}

const generateAccordionsData = (items: SideBarMenuItemData[]) => {
    const data: AccordionData[] = items
        .filter(item => item.subItems && item.subItems.length > 0)
        .map((item) => {
            const accordionData: AccordionData = {
                accordionId: item.id,
                isOpen: false
            }

            return accordionData
        })

    return data
}

const useSideBarMenu = ({ items, showText, onExpand }: UseSidBarMenuProps) => {
    const [accordions, setAccordions] = useState<AccordionData[]>(() => generateAccordionsData(items))
    const [ selectedAccordionId, setSelectedAccordionId ] = useState<string | undefined>()

    const findAccordion = (items: AccordionData[], id: string) => {
        return items.find(accordion => accordion.accordionId === id)
    }

    const onToggleAccordion = (id: string) => {
        if (showText) {
            const newAccordions = accordions.map(accordion => ({...accordion}))
            const accordion = findAccordion(newAccordions, id)
            
            if (accordion)
                accordion.isOpen = !accordion.isOpen
            
            setAccordions(newAccordions)
        }
        else {
            const newAccordions = accordions.map(accordion => ({...accordion}))
            const accordion = findAccordion(newAccordions, id)
            
            if (accordion)
                accordion.isOpen = true
            
            onExpand()
            setAccordions(newAccordions)
        }
        
        setSelectedAccordionId(id)
    }

    useEffect(() => {
        if (!showText) {
            const newAccordions: AccordionData[] = accordions.map(accordion => {
                return {
                    accordionId: accordion.accordionId,
                    isOpen: false
                }
            })

            setAccordions(newAccordions)
        }
    }, [ showText ])

    return {
        accordions,
        selectedAccordionId,
        onToggleAccordion
    }
}

export default useSideBarMenu