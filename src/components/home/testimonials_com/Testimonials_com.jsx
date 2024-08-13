import React from 'react';
import './styles/testimonials_com.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Container, Row, Col } from 'react-bootstrap';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';


import img1 from "../../../assets/images/ava-1.jpg";
import img2 from "../../../assets/images/ava-2.jpg";
import img3 from "../../../assets/images/ava-3.jpg";
import img4 from "../../../assets/images/ava-4.jpg";
import img5 from "../../../assets/images/network.png";





const Testimonials_com = () => {
    return (
        <>
            <div className="testimonials_com">
                <Container>
                    <Row>
                        <Col sm="12" md="6" lg="6" xl="6">

                            <h3>Testimonials</h3>
                            <h2>What our <span>customer</span> are saying</h2>

                            <div className="div_swiper">
                                <Swiper
                                    pagination={{
                                        dynamicBullets: true,
                                        clickable: true,
                                    }}
                                    modules={[Pagination]}
                                    className="mySwiper mt-4 pb-5"
                                >
                                    <SwiperSlide>
                                        <div className="com">
                                            <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat quis consectetur sit magnam labore earum dolores, veritatis, nemo molestias, magni id dolore exercitationem? Accusantium dicta minima facilis reiciendis quasi ipsa."</p>

                                            <div className="name_com d-flex mt-5">
                                                <img src={img1} alt="" />
                                                <h5>Ahmed Belal</h5>
                                            </div>
                                        </div>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <div className="com">
                                            <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat quis consectetur sit magnam labore earum dolores, veritatis, nemo molestias, magni id dolore exercitationem? Accusantium dicta minima facilis reiciendis quasi ipsa."</p>

                                            <div className="name_com d-flex mt-5">
                                                <img src={img2} alt="" />
                                                <h5>Ahmed Belal</h5>
                                            </div>
                                        </div>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <div className="com">
                                            <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat quis consectetur sit magnam labore earum dolores, veritatis, nemo molestias, magni id dolore exercitationem? Accusantium dicta minima facilis reiciendis quasi ipsa."</p>

                                            <div className="name_com d-flex mt-5">
                                                <img src={img3} alt="" />
                                                <h5>Ahmed Belal</h5>
                                            </div>
                                        </div>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <div className="com">
                                            <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat quis consectetur sit magnam labore earum dolores, veritatis, nemo molestias, magni id dolore exercitationem? Accusantium dicta minima facilis reiciendis quasi ipsa."</p>

                                            <div className="name_com d-flex mt-5">
                                                <img src={img4} alt="" />
                                                <h5>Ahmed Belal</h5>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </Col>


                        <Col sm="12" md="6" lg="6" xl="6">
                            <div className="div_img">
                                <img src={img5} alt="" />
                            </div>
                        </Col>
                    </Row>
                </Container>

            </div>
        </>
    )
}

export default Testimonials_com