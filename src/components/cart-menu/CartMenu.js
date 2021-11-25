import React from 'react'
import Button from '../button/button'
import './CartMenu.css'
import CartItem from '../cart-item/CartItem'


function CartMenu({ items, onClick }) {
 const totalPrice =  items.reduce((acc, game) => acc += game.price, 0)

    return (
        <div className="cart-menu">
            <div className="cart-menu__games-list">
                {items.length > 0 ? items.map(game => 
                <CartItem key={game.title} 
                price={game.price} 
                title={game.title}
                id={game.id}
                />) : 'Корзина пуста'}
            </div>
            {items.length > 0 ? (
                <div className="cart-menu__arrange">
                    <div className="cart-menu__total-price">
                        <span>Итого: </span>
                        <span>{totalPrice} руб.</span>
                    </div>
                    <Button type="primary" size="l" onClick={onClick}>
                        Оформить заказ
                    </Button>
                </div>
            ) : null}
        </div>
    )
}

export default CartMenu
