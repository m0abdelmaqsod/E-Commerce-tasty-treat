import React from 'react';
import './styles/footer.css'
import { RiSendPlaneLine } from "react-icons/ri";
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <footer className='footer'>
                <Container>
                    <Row >
                        <Col className='mb-5' xl="3" lg="4" md="6" sm="12">
                            <div className="logo_footer">
                                <Link to='/'>
                                    <img src="../images/res-logo.png" alt="" />
                                    <h3>Testy Treat</h3>
                                </Link>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, eum!
                                </p>
                            </div>
                        </Col>

                        <Col className='mb-5' xl="3" lg="4" md="6" sm="12">
                            <div className="delivery_time">
                                <h3>Delivery time</h3>
                                <div className="mt-3">
                                    <h5>Sunday thursday</h5>
                                    <h5>10:00 PM - 11:00 PM</h5>
                                </div>

                                <div className="mt-5">
                                    <h5>Friday saturday</h5>
                                    <h5>off day</h5>
                                </div>
                            </div>
                        </Col>

                        <Col className='mb-5' xl="3" lg="4" md="6" sm="12">
                            <div className="contact">
                                <h3>Contact</h3>
                                <div className="mt-3">
                                    <h5>Location : Egypt - Mansourah</h5>
                                    <h5>Phone : 0123456789</h5>
                                    <h5>Email : ahmed@gamil.com</h5>
                                </div>
                            </div>
                        </Col>

                        <Col className='mb-5' xl="3" lg="4" md="6" sm="12">
                            <div className="newsletter">
                                <h3>Newsletter</h3>
                                <form action="">
                                    <label htmlFor="email">subscribe our newsletter</label>
                                    <div className="btn_input d-flex p-1 pe-3 mt-3">
                                        <input type="email" id='emailFooter' placeholder='Enter Email' />
                                        <Button variant="dark"><RiSendPlaneLine /></Button>
                                    </div>
                                </form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </>
    )
}

export default Footer