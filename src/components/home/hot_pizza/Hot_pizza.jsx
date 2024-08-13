import React from 'react';
import './styles/hot_pizza.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../../store/shopping-cart/cartSlice';

const Hot_pizza = (handelHotPizza) => {
    const data = handelHotPizza.handelHotPizza;
    const dispatch = useDispatch()

    return (
        <>
            <div className="hot_pizza">
                <Container>
                    <h3>Hot Pizza</h3>
                    <div className="pro_hot_pizza mt-4">
                        <Row>
                            {
                                data.map((product, index) => (
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
                </Container>

            </div>
        </>
    )
}

export default Hot_pizza;