import React, { CSSProperties, useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from '../styles/styles.module.css';

export interface Props {
    className?: string
    title?: string,
    activeClass?: string
    style?: CSSProperties
}

export const ProductTitle = ({ title, className, style }: Props) => {

    const { product } = useContext(ProductContext)
    // If there is no title, show the title from the product
    const titleToShow = title ? title : product.title ? product.title : 'No title';

    return (
        <span
            style={style}
            className={`${styles.productDescription} ${className}`}>
            {titleToShow}
        </span>
    )
}