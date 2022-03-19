import React from "react";
import '../App.css';
const NavBar = () =>
{
    return (
        <nav className="navBar shadows">
        <a href="/index.html">
            <h1 className="pd-x-md mg-x-md fs-xxl">Purritos</h1>
        </a>
        <div className="boxInput pd-sm">
            <label for="name" className="mg-x-sm fs-lg"><i className="fas fa-search"></i></label>
            <input type="text" id="name" className="searchBox pd-sm" />
        </div>

        <div className="rightNav">
            <a href="/Templates/loginSignup.html" className="btn btn-primary">Signup</a>
            <div className="badgeWrap mg-md">
                <a href="/Templates/cart.html">
                    <div className="fs-xl fas fa-shopping-cart"></div>
                </a>
                <div className="fs-sm badge badgeTopRight badgeRed">2
                </div>
            </div>
            <div className="badgeWrap mg-md">
                <a href="/Templates/wishlist.html">
                    <div className="fs-xl fas fa-heart"></div>
                </a>
                <div className="fs-sm badge badgeTopRight badgeRed">9+
                </div>
            </div>
        </div>
    </nav>
    )
}

export default NavBar;