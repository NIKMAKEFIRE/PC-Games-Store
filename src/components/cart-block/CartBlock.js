import React from 'react'
import { BsFillCartCheckFill } from 'react-icons/bs'
import './cartBlock.css'

function CartBlock() {
    return (
        <div className="cart-block">
           <BsFillCartCheckFill size={25} className="cart-block__icon"/>
           <span className="cart-block__total-price"> 2390 руб.</span>
        </div>
    )
}

export default CartBlock
