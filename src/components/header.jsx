import React from "react";

const NavBar = () =>
{
    return (
        <nav class="navBar shadows">
        <a href="/index.html">
            <h1 class="pd-x-md mg-x-md fs-xxl">Purritos</h1>
        </a>
        <div class="boxInput pd-sm">
            <label for="name" class="mg-x-sm fs-lg"><i class="fa-solid fa-magnifying-glass"></i></label>
            <input type="text" id="name" class="searchBox pd-sm" />
        </div>

        <div class="rightNav">
            <a href="/Templates/loginSignup.html" class="btn btn-primary">Signup</a>
            <div class="badgeWrap mg-md">
                <a href="/Templates/cart.html">
                    <div class="fs-xl fas fa-shopping-cart"></div>
                </a>
                <div class="fs-sm badge badgeTopRight badgeRed">2
                </div>
            </div>
            <div class="badgeWrap mg-md">
                <a href="/Templates/wishlist.html">
                    <div class="fs-xl fa-solid fa-heart"></div>
                </a>
                <div class="fs-sm badge badgeTopRight badgeRed">9+
                </div>
            </div>
        </div>
    </nav>
    )
}

export default NavBar;