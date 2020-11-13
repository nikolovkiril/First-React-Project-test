import React from 'react'
import { useStateValue } from './StateProvider';
import "./Checkout.css";
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal.js';

function Checkout() {
    const [{ basket }] = useStateValue();

    return <div className="checkout">
        <div className="checkout__left">
            <img
                className="checkout__ad"
                src="https://images-eu.ssl-images-amazon.com/images/G/03/mozart/EN/2020/img/X_Site/EBDF_Deals/XCM_Manual_ORIGIN_1274735_1407964_DE_HOD20_DE_Stripe_3436353_1500x80_en_GB.jpg"
                alt="" />

            {basket?.length === 0 ? (
                <div>
                    <h2>basket is empty</h2>
                </div>
            ) : (
                    <div>
                        <h2 className="checkout__title">Your Shopping Basket</h2>
                        {/* List off all checkout Products */}
                        {basket.map((item) => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                rating={item.rating}
                                price={item.price}
                                image={item.image}
                            />
                        ))}
                    </div>
                )}
        </div>
        {basket.length > 0 && (
            <div className="checkout__right">
                <Subtotal />
            </div>
        )}
    </div>;
}

export default Checkout
