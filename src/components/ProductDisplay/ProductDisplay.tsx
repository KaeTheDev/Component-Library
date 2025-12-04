import React from "react";
import type { ProductDisplayProps } from "../../types";

export const ProductDisplay: React.FC<ProductDisplayProps> = ({
    product,
    showDescription,
    showStockStatus,
    onAddToCart,
    children
}) => {
    return (
        <>
        <div className="flex mt-4">
        <img src={product.imageUrl} alt={product.name} className="w-32 h-32"/>
        <div>
        <p>{product.name}</p>
        <p>{product.price}</p>
        {showDescription && <p>{product.description}</p>}
        {showStockStatus && <p>{product.inStock}</p>}
        {children}
        {onAddToCart && (
            <button
            onClick={() => onAddToCart(product.id)}
            className="full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >Add to Cart</button>
        )}
        </div>
         </div>
        </>
    )
}