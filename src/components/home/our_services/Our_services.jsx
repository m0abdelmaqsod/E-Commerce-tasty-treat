import React from 'react';
import './styles/our_services.css'
import { Container, Row, Col } from 'react-bootstrap';



import img1 from "../../../assets/images/category-01.png";
import img2 from "../../../assets/images/category-02.png";
import img3 from "../../../assets/images/category-03.png";
import img4 from "../../../assets/images/category-04.png";
import img5 from "../../../assets/images/service-01.png";
import img6 from "../../../assets/images/service-02.png";
import img7 from "../../../assets/images/service-03.png";





const Our_services = () => {
    return (
        <>
            <div className="our_services">
                <Container>
                    <div className="all_category">
                        <Row>
                            <Col sm="6" md="6" lg="3" xl="3">
                                <div className="category ">
                                    <img src={img1} alt="" />
                                    <p>Fast Food</p>
                                </div>
                            </Col>

                            <Col sm="6" md="6" lg="3" xl="3">
                                <div className="category ">
                                    <img src={img2} alt="" />
                                    <p>pizza</p>
                                </div>
                            </Col>

                            <Col sm="6" md="6" lg="3" xl="3">
                                <div className="category ">
                                    <img src={img3} alt="" />
                                    <p>Asian Food</p>
                                </div>
                            </Col>

                            <Col sm="6" md="6" lg="3" xl="3">
                                <div className="category ">
                                    <img src={img4} alt="" />
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
                                    <img src={img5} alt="" />
                                    <h3>Quick delivery</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, quis!</p>
                                </div>
                            </Col>

                            <Col sm="6" md="6" lg="4" xl="4">
                                <div className="div_features">
                                    <img src={img6} alt="" />
                                    <h3>Super dine in</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, quis!</p>
                                </div>
                            </Col>

                            <Col sm="6" md="6" lg="4" xl="4">
                                <div className="div_features">
                                    <img src={img7} alt="" />
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