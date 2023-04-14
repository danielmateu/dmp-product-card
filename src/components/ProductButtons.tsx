import React, { CSSProperties, useContext } from "react"
import { ProductContext } from "./ProductCard"
import styles from '../styles/styles.module.css';

export interface Props {
    className?: string;
    style?: CSSProperties;
}


export const ProductButtons = ({ className, style }: Props) => {

    const { counter, handleAdd, maxCount } = useContext(ProductContext)
    const isMaxReached = () => !!maxCount && counter === maxCount


    return (
        <div
            style={style}
            className={`${styles.buttonsContainer} ${className}`}>
            <button
                className={styles.buttonMinus}
                onClick={() => handleAdd(-1)}>-</button>

            <div
                className={styles.countLabel}
            >{counter}</div>

            <button
                className={`${styles.buttonAdd} ${isMaxReached() ? styles.disabled : ''}`}
                onClick={() => handleAdd(1)}>+</button>
        </div>
    )
}