import React from 'react';
import "./Product.css";
import { useStateValue } from './StateProvider';

function Product({ id, title, price, rating, image }) {

    const [{ basket }, dispatch] = useStateValue();
    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id,
                title,
                price,
                rating,
                image,
            },
        });
    };
    return (
        <div className="product">
            <div className="product__info">
                
                
            </div>
            <p className="product__title">
                    {title}
                </p>
            <p className="product__price">
                    <strong> $ </strong>
                    <strong>{price}</strong>
                </p>
            <p className="product__rating">
                {
                    Array(rating)
                        .fill()
                        .map((_) => (
                            <p>⭐</p>
                        ))}
            </p>
            <img src={image} alt="" />
            <button onClick={addToBasket}>Add to basket</button>
        </div>
    )

}

export default Product
