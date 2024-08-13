import React from 'react'
import './styles/sidebarCart.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/shopping-cart/cartSlice';






const CartItem = ({ item }) => {

    const { id, namePro, imgUrl, totalPrice, price, quantity } = item;

    const dispatch = useDispatch();

    const incrementItem = () => {
        dispatch(cartActions.addItem({
            id,
            namePro,
            imgUrl,
            price,
        }))
    }

    const decrementItem = () => {
        dispatch(cartActions.removeItem({ id }))
    }

    const deleteItem = () => {
        dispatch(cartActions.deleteItem({ id }))
    }




    return (
        <>
            <div className="singleProCart d-flex mb-3">
                <div className="div_img">
                    <Link to={`/Single_pro/${id}`}>
                        <img src={imgUrl} alt="" />
                    </Link>
                </div>
                <div className="infoSingleProCart w-100">
                    <Link to={`/Single_pro/${id}`}>
                        <h3>{namePro}</h3>
                    </Link>

                    <div className="quantity_price d-flex">
                        <p>{item.quantity}x</p>
                        <h5>${totalPrice}</h5>
                    </div>

                    <div className="btn_inc_and_dec d-flex">
                        <button onClick={incrementItem}>+</button>
                        <p className='m-0'>{quantity}</p>
                        <button onClick={decrementItem}>-</button>
                    </div>
                </div>
                <div className="btn_delete d-flex">
                    <button className='delete' onClick={deleteItem}>X</button>
                </div>
            </div>
        </>
    )
}

export default CartItem