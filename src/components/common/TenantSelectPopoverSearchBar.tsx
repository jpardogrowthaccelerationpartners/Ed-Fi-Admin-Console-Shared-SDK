import { Flex, Input } from "@chakra-ui/react"
import { ChangeEvent } from "react"
import CustomFormLabel from "./CustomFormLabel"

interface TenantSelectPopoverSearchBarProps {
    searchText: string 
    onSearch: (e: ChangeEvent<HTMLInputElement>) => void
}

const TenantSelectPopoverSearchBar = ({ searchText, onSearch }: TenantSelectPopoverSearchBarProps) => {
    return (
        <Flex flexDir='column'>
            <CustomFormLabel
                htmlFor="tenantSearch"
                text="Search for District/Charter" />
            <Input 
                id="tenantSearch"
                value={searchText}
                onChange={onSearch}
                size='sm'
                placeholder='Start typing to search' />
        </Flex>
    )
}

export default TenantSelectPopoverSearchBar