import { BsBasket3 } from "react-icons/bs";
import React, {Component, useState} from "react";
import "./cart.css"
import CartCounter from "./cart-counter.js"

const CartWidget = ({cartProducts}) => {
const [number, setCounter] = useState(0)
    return(
        <div className="cart-widget">
            <BsBasket3 className="Cart"/>
            <p>{cartProducts.length}</p>
        </div>
    )
}


export default CartWidget;