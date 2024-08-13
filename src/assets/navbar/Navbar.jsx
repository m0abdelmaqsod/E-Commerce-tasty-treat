import React, { useState } from 'react';
import './styles/navbar.css'
import { FaRegUser, FaBasketShopping } from "react-icons/fa6";
import { CgMenuRight } from "react-icons/cg";
import { Container, Button } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import SidebarCart from '../sidebarCart/SidebarCart';
import { useSelector } from 'react-redux';



const Navbar = () => {
    const [openSidebarCart, setOpenSidebarCart] = useState(false);

    const [openSidebarLink, setOpenSidebarLink] = useState(false);


    const totalQuantity = useSelector(store => store.cart.totalQuantity)


    return (
        <>
            <nav className='navbar py-2'>
                <Container>

                    <div className="logo_nav">
                        <Link to='/'>
                            <img className='d-flex  m-auto mb-1' src="../images/res-logo.png" alt="" />
                            <h3>Testy Treat</h3>
                        </Link>
                    </div>




                    <div>
                        <ul className={openSidebarLink === false ? "close-link link_nav" : "link_nav"}>

                            <Button onClick={() => setOpenSidebarLink(false)} className='btn_close m-4 rounded-5 p-0' variant="dark">X</Button>

                            <li>
                                <NavLink className={({ isActive }) => isActive ? "activeLinkNav" : ""} onClick={() => setOpenSidebarLink(false)} to='/'>Home</NavLink>
                            </li>

                            <li>
                                <NavLink className={({ isActive }) => isActive ? "activeLinkNav" : ""} onClick={() => setOpenSidebarLink(false)} to='/Foods'>Foods</NavLink>
                            </li>

                            <li>
                                <NavLink className={({ isActive }) => isActive ? "activeLinkNav" : ""} onClick={() => setOpenSidebarLink(false)} to='/Cart'>Cart</NavLink>
                            </li>

                            <li>
                                <NavLink className={({ isActive }) => isActive ? "activeLinkNav" : ""} onClick={() => setOpenSidebarLink(false)} to='/Contact'>Contact</NavLink>
                            </li>
                        </ul>
                    </div>




                    <div className="div_icons_navbar d-flex ">
                        <div className="icon_cart">
                            <button onClick={() => setOpenSidebarCart(true)}>
                                <FaBasketShopping />
                                <span className='d-flex rounded-5 text-light'>{totalQuantity}</span>
                            </button>
                        </div>

                        <div className="icon_user">
                            <Link to='/Login'>
                                <button>
                                    <FaRegUser />
                                </button>
                            </Link>
                        </div>

                        <div className="btn_toggle_link">
                            <CgMenuRight onClick={() => setOpenSidebarLink(true)} />
                        </div>
                    </div>

                    <SidebarCart setOpenSidebarCart={setOpenSidebarCart} openSidebarCart={openSidebarCart} />


                </Container >
            </nav>
        </>
    )
}

export default Navbar