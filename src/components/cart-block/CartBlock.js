import React from 'react'
import { BsFillCartCheckFill } from 'react-icons/bs'
import { useSelector } from 'react-redux'
import { useState , useCallback} from 'react'
import ItemsInCart from '../items-in-cart/ItemsInCart'
import './cartBlock.css'
import CartMenu from '../cart-menu/CartMenu'
import { useHistory } from 'react-router'

function CartBlock() {
    const [isCartMenuVisible, setIsCartMenuVisible] = useState(false)
    const items = useSelector(state => state.cart.itemsInCart)
    const totalPrice = items.reduce((acc, game) => acc += game.price, 0)
    const history = useHistory()

    const handleClick = useCallback(() => {
            setIsCartMenuVisible(false)
            history.push('/order')
        }, [history])

    return (
        <div className="cart-block">
            <ItemsInCart quantity={items.length} />
            <BsFillCartCheckFill size={25}
                className="cart-block__icon"
                onClick={() => setIsCartMenuVisible(!isCartMenuVisible)} />
            {totalPrice > 0 ? (<span className="cart-block__total-price"> {totalPrice} руб.</span>) : null}
            {isCartMenuVisible && <CartMenu items={items} onClick={handleClick} />}
        </div>
    )
}

export default CartBlock
