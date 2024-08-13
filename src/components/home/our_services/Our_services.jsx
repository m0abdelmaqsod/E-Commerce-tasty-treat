import React from 'react';
import './styles/our_services.css'
import { Container, Row, Col } from 'react-bootstrap'
const Our_services = () => {
    return (
        <>
            <div className="our_services">
                <Container>
                    <div className="all_category">
                        <Row>
                            <Col sm="6" md="6" lg="3" xl="3">
                                <div className="category ">
                                    <img src="../../../../public/images/category-01.png" alt="" />
                                    <p>Fast Food</p>
                                </div>
                            </Col>

                            <Col sm="6" md="6" lg="3" xl="3">
                                <div className="category ">
                                    <img src="../../../../public/images/category-02.png" alt="" />
                                    <p>pizza</p>
                                </div>
                            </Col>

                            <Col sm="6" md="6" lg="3" xl="3">
                                <div className="category ">
                                    <img src="../../../../public/images/category-03.png" alt="" />
                                    <p>Asian Food</p>
                                </div>
                            </Col>

                            <Col sm="6" md="6" lg="3" xl="3">
                                <div className="category ">
                                    <img src="../../../../public/images/category-04.png" alt="" />
                                    <p>Row Meat</p>
                                </div>
                            </Col>
                        </Row>
                    </div>


                    <div className="what_we_serve text-center">
                        <h5 className='mb-3 text-danger'>what we serve</h5>
                        <h3>just sit back at home we will <span>tack care</span></h3>
                        <p className='mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. At, sed.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At, sed.</p>
                    </div>


                    <div className="features">
                        <Row className='row_features'>
                            <Col sm="6" md="6" lg="4" xl="4">
                                <div className="div_features">
                                    <img src="../../../../public/images/service-01.png" alt="" />
                                    <h3>Quick delivery</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, quis!</p>
                                </div>
                            </Col>

                            <Col sm="6" md="6" lg="4" xl="4">
                                <div className="div_features">
                                    <img src="../../../../public/images/service-02.png" alt="" />
                                    <h3>Super dine in</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, quis!</p>
                                </div>
                            </Col>

                            <Col sm="6" md="6" lg="4" xl="4">
                                <div className="div_features">
                                    <img src="../../../../public/images/service-03.png" alt="" />
                                    <h3>Easy pick up</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, quis!</p>
                                </div>
                            </Col>
                        </Row>
                    </div>


                </Container>
            </div>
        </>
    )
}

export default Our_services