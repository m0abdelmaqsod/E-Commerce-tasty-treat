import React, { useEffect } from 'react';
import './styles/cart.css';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import CartPro from '../../components/cart/cartProducts/CartPro';


import imgBanner from "../../assets/images/banner-2.jpg";



const Cart = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    const dispatch = useDispatch();
    const cartProducts = useSelector(state => state.cart.cartItems)


    // console.log(cartProducts);
    const totalAmount = useSelector((state) => state.cart.totalAmount)


    return (
        // ====== start of cart ======= //
        <search className='cart'>

            {/* ====== start of banner ======= */}
            <div className="banner">
                <img src={imgBanner} alt="" />
                <h3><span>Your Cart</span></h3>
            </div>


            {/* ====== start of div cart ======= */}
            <div className="div_cart">
                <Container>

                    {
                        cartProducts.length === 0
                            ? <p className='no_pro'>no item added to the cart</p>
                            :

                            <table>
                                <thead>
                                    <tr>
                                        <th>Image</th>
                                        <th>Product Title</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                        <th>Delete</th>
                                    </tr>
                                </thead>


                                <tbody>
                                    {
                                        cartProducts.map((item, index) => (
                                            <CartPro item={item} key={index} />
                                        ))
                                    }
                                </tbody>
                            </table>
                    }









                    {/* ====== start of div total price ======= */}
                    <div className="total_price">
                        <h5>Subtotal : $<span> {totalAmount}</span></h5>
                        <p>Taxes and shipping will calculate at checkout</p>
                        <div className="btn_shop_and_checkout">
                            <Link to='/Foods'>
                                <Button variant="danger">Continue Shopping</Button>
                            </Link>
                            <Link to='/Checkout'>
                                <Button variant="danger">Proceed to checkout</Button>
                            </Link>
                        </div>
                    </div>
                </Container>
            </div>

        </search>
    )
}

export default Cart