import { Flex, Switch } from "@chakra-ui/react"
import { ChangeEvent } from "react"

interface CustomSwitchProps {
    id?: string
    isChecked: boolean
    isDisabled?: boolean
    onCheck?: (e: ChangeEvent<HTMLInputElement>) => void
}

const CustomSwitch = ({ id, isChecked, isDisabled, onCheck }: CustomSwitchProps) => {
    return (
        <Flex>
            <Switch 
                aria-label={id}
                aria-hidden={false}
                onChange={onCheck}
                id={id}
                isChecked={isChecked}
                isDisabled={isDisabled}
                data-testid={id}
                _checked={{ '& > span': { bg: 'blue.600' }}}
                size='sm' />
        </Flex>
    )
}

export default CustomSwitch