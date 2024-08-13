import React, { useState, useEffect } from 'react';
import './styles/you_might_also_like.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../../store/shopping-cart/cartSlice';




const You_might_also_like = ({ categoryPro }) => {

    // ===== handel data ==== //
    const [data, setData] = useState([]);


    useEffect(() => {
        axios.get('http://localhost:8000/allProduct')
            .then((res) => setData(res.data))
            .catch((error) => console.error(error))
    }, [])



    // ===== handel filter Data Similar --> category ==== //
    const filterData = data.filter((pro) => pro.category === categoryPro.category)



    // ===== handel Other products you may like ==== //
    function randomNum(min, max) {
        return Math.ceil(Math.random() * (max - min) + min)
    }

    const data_pro_other = data.slice(randomNum(0, 8), randomNum(9, 13));
    const handelData = data_pro_other.slice(0, 4);


    const dispatch = useDispatch();

    return (
        <>
            <div className="you_might_also_like">
                <Container>

                    {/* ======= start of You might also like ====== */}
                    <h3>You might also like</h3>

                    <div className="all_pro_popular">
                        <Row>
                            {
                                filterData.map((product, index) => (
                                    <Col key={index} xl="3" lg="4" md="6" sm="6" className='mb-5'>
                                        <div className="pro p-4">
                                            <Link to={`/Single_pro/${product.id}`}>
                                                <img src={product.imgUrl} alt="" />
                                                <h5>{product.namePro}</h5>
                                            </Link>

                                            <div className="price_btn d-flex">
                                                <p>${product.price}</p>
                                                <Button variant="danger" onClick={() => dispatch(cartActions.addItem(product))}>Add To Cart</Button>
                                            </div>
                                        </div>
                                    </Col>
                                ))
                            }
                        </Row>
                    </div>










                    {/* ====== start of Other products you may like ===== */}
                    <div className="OtherProYouMayLike">
                        <h3>Other products you may like</h3>
                        <Row>
                            {
                                handelData.map((product, index) => (
                                    <Col key={index} xl="3" lg="4" md="6" sm="6" className='mb-5'>
                                        <div className="pro p-4">
                                            <Link to={`/Single_pro/${product.id}`}>
                                                <img src={product.imgUrl} alt="" />
                                                <h5>{product.namePro}</h5>
                                            </Link>

                                            <div className="price_btn d-flex">
                                                <p>${product.price}</p>
                                                <Button variant="danger" onClick={()=> dispatch(cartActions.addItem(product))}>Add To Cart</Button>
                                            </div>
                                        </div>
                                    </Col>
                                ))
                            }
                        </Row>
                    </div>
                </Container >
            </div >
        </>
    )
}

export default You_might_also_like