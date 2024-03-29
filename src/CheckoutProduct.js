import React from 'react';
import "./CheckoutProduct.css";
import { useStateValue } from './StateProvider';

function CheckoutProduct({ id, title, rating, price, image }) {

    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {

        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id,
        })
    }

    return (
        <div className="checkoutProduct">
            <img src={image} alt="" />

            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">
                    {title}
                </p>
                <p className="checkoutProduct__price">
                    <strong> $ </strong>
                    <strong>{price}</strong>
                </p>
                <p className="checkoutProduct__rating">
                    {
                        Array(rating)
                            .fill()
                            .map((_) => (
                                <p>⭐</p>
                            ))}
                </p>
                <button onClick={removeFromBasket}>Remove from basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
