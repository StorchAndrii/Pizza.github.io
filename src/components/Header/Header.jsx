import React from "react";
import { NavLink } from "react-router-dom";

import logo from "../../assets/img/storchPizzaLogo.jpg";
import Search from "../Search/Search";
import bagCart from "../../assets/img/bagCart.svg";
import { useSelector } from "react-redux";
import { selectorCart } from "../../redux/cartSlice/cartSlice";

const Header = () => {
  const { items, totalPrice } = useSelector(selectorCart);

  const totalCount = items.reduce((sum, item) => sum + item.count, 0);

  return (
    <div className="header">
      <div className="container">
        <NavLink to={"/"} className="header__logo">
          <img width="100" src={logo} alt="Pizzalogo" />
          <div>
            <h1>Storch Pizza</h1>
            <p>самая вкусная пицца во вселенной</p>
          </div>
        </NavLink>
        <Search />
        <div className="header__cart">
          <NavLink to={"/cart"} className="button button--cart">
            <span>{totalPrice} ₴</span>
            <div className="button__delimiter" />
            <img src={bagCart} alt="bagCart" />
            <span>{totalCount}</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
