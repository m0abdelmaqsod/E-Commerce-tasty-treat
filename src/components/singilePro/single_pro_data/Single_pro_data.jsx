import React, { useState } from 'react';
import './styles/single_pro_data.css'
import { Container, Col, Row, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../../store/shopping-cart/cartSlice';


const Single_pro_data = ({ data }) => {


    const [handelImg, setHandelImg] = useState("");

    const { id, namePro, imgUrl, imgUrl2, imgUrl3, category, price } = data;

    const dispatch = useDispatch();

    const addToCart = () => {
        dispatch(cartActions.addItem({
            id, namePro, imgUrl, price
        }))
    }

    return (
        <>
            <div className="single_data">

                <div className="banner">
                    <img src="../../../../public/images/banner.jpg" alt="" />
                    <h3><span>{namePro}</span></h3>
                </div>

                <Container>
                    <div className="data_pro">
                        <Row className='row_pro'>
                            <Col sm="12" md="6" lg="6" xl="6">
                                <div className="slider_pro">
                                    <Row>
                                        <Col sm="12" md="12" lg="3" xl="3">
                                            <div className="img_sidebar_slider">
                                                <img onClick={() => setHandelImg(imgUrl)} src={imgUrl} alt="" />

                                                <img className={imgUrl2 === "" ? "img_none" : ""} onClick={() => setHandelImg(imgUrl2)} src={imgUrl2} alt="" />

                                                <img className={imgUrl3 === "" ? "img_none" : ""} onClick={() => setHandelImg(imgUrl3)} src={imgUrl3} alt="" />
                                            </div>
                                        </Col>


                                        <Col sm="12" md="12" lg="9" xl="9">
                                            <div className="img_slider">
                                                <img src={handelImg === "" ? imgUrl : handelImg} alt="" />
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>


                            <Col sm="12" md="5" lg="5" xl="5">
                                <div className="data_slider">
                                    <h3>{namePro}</h3>
                                    <h5>Price: <span>${price}</span></h5>
                                    <p>Category: <span>{category}</span></p>
                                    <Button variant="danger" onClick={addToCart}>Add To Cart</Button>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default Single_pro_data;