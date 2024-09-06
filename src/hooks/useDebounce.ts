import { useEffect, useState } from "react"

type DebouncedValueType = number | string 

interface UseDebounceProps {
    value: DebouncedValueType
    delay: number 
}

const useDebounce = ({ value, delay }: UseDebounceProps) => {
    const [debouncedValue, setDebouncedValue] = useState<DebouncedValueType>(value)

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value)
        }, delay)

        return () => {
            clearTimeout(handler)
        }
    },[ value, delay ])

    return {
        debouncedValue
    }
}

export default useDebounce