import React from 'react';
import { FaCarRear } from "react-icons/fa6";
import { AiOutlineSafety } from "react-icons/ai";
import { Container, Row, Col, Button } from 'react-bootstrap';
import './styles/header.css'
import { Link } from 'react-router-dom';




import imgHead from "../../../assets/images/hero.png"



const Header = () => {
    return (
        <>
            <div className="header">
                <Container>
                    <Row>
                        <Col sm="12" md="12" lg="6" xl="6">
                            <div className="header_info  mt-5">
                                <h3>Easy Way to make an order</h3>

                                <h1><span>HUNGRY?</span> just wait food at <span>your door</span></h1>

                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exnemo exercitati onem, minima eveniet expedita dolor.</p>

                                <div className="btn_header d-flex">
                                    <Link to='/'>
                                        <Button variant="danger">Order Now </Button>
                                    </Link>
                                    <Link to='/Foods'>
                                        <Button className='px-4' variant="outline-danger">See all foods</Button>
                                    </Link>
                                </div>


                                <div className="hero_service d-flex mt-5">
                                    <h5>
                                        <span><FaCarRear /> </span>
                                        No Shipping Fees
                                    </h5>

                                    <h5>
                                        <span><AiOutlineSafety /> </span>
                                        100% Secure Checkout
                                    </h5>
                                </div>
                            </div>
                        </Col>

                        <Col >
                            <div className="img_header">
                                <img className='w-100' src={imgHead} alt="" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

        </>
    )
}

export default Header