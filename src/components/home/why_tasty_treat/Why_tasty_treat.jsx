import React from 'react';
import { FaRegCircleCheck } from "react-icons/fa6";
import './styles/why_tasty_treat.css'
import { Container, Row, Col } from 'react-bootstrap';




import img from "../../../assets/images/location.png";


const Why_tasty_treat = () => {
    return (
        <>
            <Container >
                <section className='tasty_treat'>
                    <Row>
                        {/* ===== start of img why tasty treat ===== */}

                        <Col sm="12" md="6" lg="6" xl="6">
                            <div className="img_why_tasty_treat">
                                <img src={img} alt="" />
                            </div>
                        </Col>

                        {/* ===== start of div why tasty treat ===== */}
                        <Col sm="12" md="6" lg="6" xl="6">
                            <div className="div_why_tasty_treat">
                                <h3 className='mb-3'>why <span>Tasty Treat?</span></h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia cupiditate nemo omnis hic enim dolorem. Sequi non impedit nemo minima quibusdam. Quasi velit beatae vitae quidem consequuntur, quae temporibus dolor!</p>

                                <div className="features_tasty_treat mt-4 pt-2 pb-3">
                                    <div>
                                        <h5>
                                            <span variant="success" ><FaRegCircleCheck /> </span>
                                            Fresh and tasty foods</h5>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, sequi.</p>
                                    </div>
                                    <div>
                                        <h5>
                                            <span className='color-red'><FaRegCircleCheck /> </span>
                                            Quality support</h5>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, sequi.</p>
                                    </div>
                                    <div>
                                        <h5>
                                            <span className='color-red'><FaRegCircleCheck /> </span>
                                            Order from any location</h5>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, sequi.</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </section>
            </Container>
        </>
    )
}

export default Why_tasty_treat