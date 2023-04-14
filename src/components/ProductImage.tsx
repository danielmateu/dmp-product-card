import React, { CSSProperties, useContext } from "react";
import { ProductContext } from "./ProductCard";
import noImage from '../assets/no-image.jpg';
import styles from '../styles/styles.module.css';

export interface Props {
    img?: string;
    className?: string;
    style?: CSSProperties
}

export const ProductImage = ({ img, className, style }: Props) => {
    const { product } = useContext(ProductContext)
    let imgToShow: string;
    // If there is no image, show the noImage image
    imgToShow = img ? img : product.img ? product.img : noImage;

    return (
        <img
            style={style}
            src={imgToShow}
            className={`${styles.productImg} ${className}`}
            alt="Product image"
        />
    )
}