import React, { useEffect } from 'react';
import './styles/contact.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FiMail, FiHome, FiHeadphones } from "react-icons/fi";



const Contact = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <>

            <section className='contactUs'>
                {/* ====== start of banner ======= */}
                <div className="banner">
                    <img src="../../../public/images/banner-2.jpg" alt="" />
                    <h3><span>Contact US</span></h3>
                </div>




                {/* ====== start of maps ======= */}
                <Container>
                    <div className="maps">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d876849.4508587751!2d31.0834699!3d30.8532664!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sar!2seg!4v1703112183456!5m2!1sar!2seg" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>



                    <div className="details_contact">
                        <Row>
                            <Col sm='12' md='12' lg='4' xl='3'>
                                <div className="info">
                                    <div className="div_info">
                                        <div className="icon_info">
                                            <FiHome />
                                        </div>
                                        <div className="div_cont">
                                            <h5>Egypt - Mansourah</h5>
                                            <p>Egypt - Mansourah</p>
                                        </div>
                                    </div>
                                    <div className="div_info">
                                        <div className="icon_info">
                                            <FiHeadphones />
                                        </div>
                                        <div className="div_cont">
                                            <h5>(+20) 123456789</h5>
                                            <p>Mon to Fri 9am to 6pm</p>
                                        </div>
                                    </div>
                                    <div className="div_info">
                                        <div className="icon_info">
                                            <FiMail />
                                        </div>
                                        <div className="div_cont">
                                            <h5>ahmed@gamil.com</h5>
                                            <p>send us your query anytime !</p>
                                        </div>
                                    </div>
                                </div>
                            </Col>

                            <Col sm='12' md='12' lg='8' xl='9'>
                                <form action="">
                                    <Row>
                                        <Col sm='12' md='6' lg='5' xl='5'>
                                            <div>
                                                <input type="text" name='name' placeholder='Enter your name' />
                                            </div>
                                            <div>
                                                <input type="email" name='email' placeholder='Enter email address' />
                                            </div>
                                            <div>
                                                <input type="text" name='subject' placeholder='Enter subject' />
                                            </div>
                                        </Col>

                                        <Col sm='12' md='6' lg='7' xl='7'>
                                            <div>
                                                <textarea name="massage" id="massage" placeholder='Enter massage.....'></textarea>
                                            </div>
                                        </Col>
                                    </Row>
                                </form>
                            </Col>
                        </Row>

                        <div className="btn_send_mass">
                            <Button variant="danger">Send Massage</Button>
                        </div>
                    </div>
                </Container>



            </section>
        </>
    )
}

export default Contact