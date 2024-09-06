import { Flex, Text, Button, Tooltip, Spinner } from "@chakra-ui/react"
import { TenantSelectPopoverItem } from "../../hooks/useTenantSelectPopover.types"

interface TenantSelectPopoverSearchListProps {
    filteredList: TenantSelectPopoverItem[]
    isChangingTenant: boolean 
    tenantIdToUpdate: string 
    handleChangeTenantId: (tenantId: string) => void
}

const TenantSelectPopoverSearchList = ({ filteredList, tenantIdToUpdate, isChangingTenant, handleChangeTenantId }: TenantSelectPopoverSearchListProps) => {
    return (
        <Flex flexDir='column' marginTop='15px' h='100px' overflowY='scroll' w='full' style={{ scrollbarColor: "#3D5EFC #EFF4F6", scrollbarWidth: "thin" }}>
            {filteredList.map(tenant => 
                <Button
                    aria-label={`Select ${tenant.organizationName} tenant`}
                    display='flex'
                    color="gray.800"
                    justifyContent='space-between'
                    isDisabled={isChangingTenant}
                    size='sm'
                    padding='10px 10px'
                    w='full'
                    _hover={{ backgroundColor: 'gray.100' }}
                    key={tenant.tenantId}
                    onClick={() => handleChangeTenantId(tenant.tenantId)}>
                        <Tooltip 
                            hasArrow 
                            label={<Flex color='white' flexDir='column' w='full'>
                                <Text color='white' fontFamily='Open sans'>Tenant ID: {tenant.tenantId}</Text>
                                <Text color='white' fontFamily='Open sans'>Org ID: {tenant.organizationIdentifier}</Text>
                            </Flex>} 
                            bg='black' 
                            fontSize='12px' 
                            color="white">
                                <Text color='gray.800'>
                                    {tenant.organizationName.length < 23? tenant.organizationName : tenant.organizationName.slice(0, 24) + '...'}
                                </Text>
                        </Tooltip>
                        { tenant.tenantId === tenantIdToUpdate && <Spinner size='sm' /> }
                </Button>
            )}
        </Flex>
    )
}

export default TenantSelectPopoverSearchList