import { useEffect, useRef, useState } from "react"
import { Product, initialValues, onChangeArgs } from "../interfaces/interfaces"
export interface useProductArgs {
    product: Product;
    onChange?: (args: onChangeArgs) => void;
    value?: number;
    // maxCount?: number;
    initialValues?: initialValues;

}

export const useProduct = ({ onChange, product, value = 0, initialValues }: useProductArgs) => {

    const [counter, setCounter] = useState<number>(initialValues?.count || value)
    const isMounted = useRef(false);

    const maxCount = initialValues?.maxCount

    const handleAdd = (value: number) => {

        let newValue = Math.max(counter + value, 0)

        if(maxCount){
            newValue = Math.min(newValue, maxCount)
        }

        setCounter(newValue)

        onChange && onChange({ count: newValue, product })
    }

    const reset = () => {
        setCounter(initialValues?.count || value)
    }

    useEffect(() => {
        if (!isMounted.current) return;

        setCounter(initialValues?.count || value)
    }, [initialValues?.count, value])

    useEffect(() => {
        isMounted.current = true;
    }, [])

    return {
        counter,
        isMaxCountReached: !!initialValues?.count && initialValues.maxCount === counter,
        maxCount: initialValues?.maxCount,
        
        handleAdd,
        reset
    }

}


