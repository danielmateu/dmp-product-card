import { useProduct } from '../hooks/useProduct';
import React, { CSSProperties, createContext } from 'react';
import { Product, ProductCardHandlers, ProductContextProps, initialValues, onChangeArgs } from '../interfaces/interfaces';

import styles from '../styles/styles.module.css';

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
    product: Product
    children: (args: ProductCardHandlers) => JSX.Element;
    className?: string;
    style?: CSSProperties;
    onChange?: (args: onChangeArgs) => void;
    value?: number;
    initialValues?: initialValues;
    maxCount?: number;
}

// const { Provider } = ProductContext

export const ProductCard = ({ children, product, className, style, onChange, value, initialValues }: Props) => {

    const { 
        counter, 
        handleAdd, 
        maxCount,
        reset,
        isMaxCountReached } = useProduct({ onChange, product, value, initialValues })
        
        ;

    return (
        <Provider value={{
            product,
            counter,
            handleAdd,
            maxCount,
            // reset,
        }}>
            <div
                className={`${styles.productCard} ${className}`}
                style={style}
            >
                {
                children({
                    count: counter,
                    isMaxCountReached,
                    maxCount: initialValues?.maxCount || 10,
                    product,

                    handleAdd,
                    reset,
                    })}
            </div>
        </Provider>
    )
}

