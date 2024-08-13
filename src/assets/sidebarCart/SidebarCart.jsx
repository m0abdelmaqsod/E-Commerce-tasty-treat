import React from 'react';
import { Container, Button } from 'react-bootstrap';
import './styles/sidebarCart.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';


const SidebarCart = ({ openSidebarCart, setOpenSidebarCart }) => {
    const cartProducts = useSelector((state) => state.cart.cartItems);


    const totalAmount = useSelector((state) => state.cart.totalAmount);

    return (
        <>
            <section className={openSidebarCart === false ? 'sidebarClose div_sidebar' : 'div_sidebar'}>
                <div className="sidebarCart">

                    <Container>

                        <Button onClick={() => setOpenSidebarCart(false)} className='btn_close my-4 ms-2 rounded-5 p-0 d-flex ' variant="dark">X</Button>
                        <div className="allCart ">

                            {
                                cartProducts.length === 0
                                    ? <p className='no_pro'>no item added to the cart</p>
                                    : cartProducts.map((item, index) => (
                                        <CartItem key={index} item={item} />
                                    ))
                            }
                        </div>
                    </Container>


                    <div className="totalPrice d-flex ">
                        <p>Subtotal : $ {totalAmount}</p>
                        <Link to='/Cart' onClick={() => setOpenSidebarCart(false)}>
                            <Button variant="light">Checkout</Button>
                        </Link>
                    </div>
                </div>
            </section>

        </>
    )
}

export default SidebarCart