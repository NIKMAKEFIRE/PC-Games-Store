import React from 'react'
import { useDispatch } from 'react-redux'
import GameCover from '../game-cover/GameCover'
import deleteItemFromCart from '../../redux/cart/reducer'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import './OrderItem.css'


function OrderItem({ game }) {
    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(deleteItemFromCart(game.id));
    };

    return (
        <div className="order-item">
            <div className="order-item__cover">
                <GameCover image={game.image} />
            </div>
            <div className="order-item__title">
                <span>
                    {game.title}
                </span>
            </div>
            <div className="order-item__price">
                <span>{game.price} руб.</span>
                <AiOutlineCloseCircle
                    size={25}
                    className="cart-item__delete-icon"
                    onClick={handleClick}/>
            </div>
        </div>
    )
}

export default OrderItem