import React from 'react';
import '../../../page/cart/styles/cart.css';
import { RiDeleteBinLine } from "react-icons/ri";
import { Link } from 'react-router-dom';
import { cartActions } from '../../../store/shopping-cart/cartSlice';
import { useDispatch } from 'react-redux';







const CartPro = ({ item }) => {
    const { id, namePro, imgUrl, totalPrice, quantity } = item;

    const dispatch = useDispatch();

    const deleteItem = () => {
        dispatch(cartActions.deleteItem({ id }))
    }
    return (
        <>
            <tr>
                <td>
                    <Link to={`/Single_pro/${id}`}>
                        <img src={imgUrl} alt="" />
                    </Link>
                </td>
                <td>
                    <Link to={`/Single_pro/${id}`}>
                        <p>{namePro}</p>
                    </Link>
                </td>
                <td>${totalPrice}</td>
                <td>{quantity}x</td>
                <td>
                    <button onClick={deleteItem}><RiDeleteBinLine /></button>
                </td>

            </tr>
        </>
    )
}

export default CartPro