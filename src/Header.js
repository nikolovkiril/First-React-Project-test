import React from 'react';
import "./Header.css";
import alien from './png/alien.png';
import { Link } from "react-router-dom";
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useStateValue } from './StateProvider';
import { auth } from './Firebase';


function Header() {
    const [{ basket, user }] = useStateValue();

    const login =() =>{
        if (user) {
            auth.signOut();
        }
    }
    return <nav className="header">
        {/* logo on the left  --> img */}
        <Link to="/">
            <img
                className="header__logo"
                src={alien}
                alt=""
            />
        </Link>
        {/* Search box  */}
        <div className="header__search">
            <input type="text" className="header__searchInput" />
            <SearchIcon className="header__searcIcon" />
        </div>
        {/* some links  */}
        <div className="header__nav">
            {/* 1st link */}
            <Link to={!user && "/login"} className="header__link">
                <div onClick={login} className="header__option">
                    <span className="header__onptionOne">Hello {user?.email}</span>
                    <span className="header__onptionTwo">{user ? 'Sing Out' : 'Sing in'}</span>
                </div>
            </Link>
            {/* 2nd link */}
            {/* <Link to="/Orders" className="header__link">
                <div className="header__option">
                    <span className="header__onptionOne">Returns</span>
                    <span className="header__onptionTwo">& Orders</span>
                </div>
            </Link> */}
            {/* 3rd link */}
            <Link to="/Discount" className="header__link">
                <div className="header__option">
                    <span className="header__onptionOne">Get</span>
                    <span className="header__onptionTwo"> Discount</span>
                </div>
            </Link>
            {/* 4th link */}
            <Link to="/Details" className="header__link">
                <div className="header__option">
                    <span className="header__onptionOne">Our</span>
                    <span className="header__onptionTwo">Details</span>
                </div>
            </Link>
        </div>
        {/* shoping basket with number */}

        <Link to="/checkout" className="header__link">
            <div className="header__option__basket">
                {/* Shopping basked icon */}
                <ShoppingBasketIcon />
                {/* Number of items in the basked */}
                <span className="header__onptionOne header__basketCount">{basket.length}</span>
            </div>
        </Link>
    </nav>;
}

export default Header
