import React, { useEffect, useState } from 'react';
import './styles/filter_popular_foods.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../../../store/shopping-cart/cartSlice';
import { fetchProduct } from '../../../store/products/apiPro';


const Fil_popular_foods = () => {

    const dispatch = useDispatch();
    const { products } = useSelector(state => state.pro);

    useEffect(() => {
        dispatch(fetchProduct());
    }, [])

    // === set Btn Category === //
    const [btnCategory, setBtnCategory] = useState("all");

    // === handel Filter Category Popular Foods === //
    const handelFilCategory = btnCategory === "all" ? products : products.filter((product) => product.category === btnCategory)



    return (
        <>
            <div className="fil_popular_foods">
                <h3 className='text-center'>Popular Foods</h3>
                <Container>
                    <div className="navbar_filter_popular py-3">
                        <ul className='d-flex m-auto'>
                            <li>
                                <button onClick={() => setBtnCategory("all")} className={btnCategory === "all" ? "activeNavFilter" : ""}>
                                    <span>All</span>
                                </button>
                            </li>

                            <li>
                                <button onClick={() => setBtnCategory("burger")} className={btnCategory === "burger" ? "activeNavFilter" : ""}>
                                    <img src="../../../../public/images/hamburger.png" alt="" />
                                    <span>Burger</span>
                                </button>
                            </li>

                            <li>
                                <button onClick={() => setBtnCategory("pizza")} className={btnCategory === "pizza" ? "activeNavFilter" : ""}>
                                    <img src="../../../../public/images/pizza.png" alt="" />
                                    <span>Pizza</span>
                                </button>
                            </li>

                            <li>
                                <button onClick={() => setBtnCategory("bread")} className={btnCategory === "bread" ? "activeNavFilter" : ""}>
                                    <img src="../../../../public/images/bread.png" alt="" />
                                    <span>Bread</span>
                                </button>
                            </li>
                        </ul>
                    </div>




                    <div className="all_pro_popular mt-5">
                        <Row>
                            {
                                handelFilCategory.map((product, index) => (
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

export default Fil_popular_foods