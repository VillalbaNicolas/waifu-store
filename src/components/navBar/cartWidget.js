import { BsBasket3 } from "react-icons/bs";
import React, {Component, useState} from "react";
import "./cart.css"
import CartCounter from "./cart-counter.js"

const CartWidget = () => {
const [number, setCounter] = useState(0)
    return(
        <div className="cart-widget">
            <BsBasket3 className="Cart"/>
            <CartCounter counter={number} update={setCounter}/>
        </div>
    )
}


export default CartWidget;