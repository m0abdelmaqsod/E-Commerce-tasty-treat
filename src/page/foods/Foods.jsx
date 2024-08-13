import React, { useState, useEffect } from 'react';
import './styles/foods.css'
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FiSearch } from "react-icons/fi";
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../../store/shopping-cart/cartSlice';
import { fetchProduct } from '../../store/products/apiPro';




import imgBanner from "../../assets/images/banner-2.jpg";



const Foods = () => {
    document.title = "All Foods";

    const dispatch = useDispatch();

    // ===== set all data products ===== //
    const { products } = useSelector(state => state.pro);



    useEffect(() => {
        window.scrollTo(0, 0);
        dispatch(fetchProduct());
    }, [])

    // ====== start of handel state search ====== //
    const [search, setSearch] = useState("");

    // ====== start of handel search ====== //
    const handleChangeSearch = (e) => {
        setSearch(e.target.value);
    }

    const clone = [...products];
    const filterSer = clone.filter((item) => search.toLowerCase() === '' ? item : item.namePro.toLowerCase().includes(search))

    // console.log(filterSer);

    // ====== start of handel state filter sortItem price ====== //
    const [sortItem, setSortItem] = useState("default");

    // ====== start of handel state filter sortItem price ====== //
    const sortedProductList = sortItem === "default" ? filterSer.sort((a, b) => a.id - b.id) :
        sortItem === "low"
            ? filterSer.sort((a, b) => a.price - b.price)
            : sortItem === "high"
                ? filterSer.sort((a, b) => b.price - a.price)
                : sortItem === "alphabetically,A-Z" ? filterSer.sort((a, b) => a.namePro > b.namePro ? 1 : -1) : sortItem === "alphabetically,Z-A" ? filterSer.sort((a, b) => b.namePro > a.namePro ? 1 : -1) : '';


    // ====== start of handel state pagination pages ====== //
    const [currentPage, setCurrentPage] = useState(1);

    // ====== start of handel pagination pages ====== //
    const PRODUCT_PER_PAGE = 12;
    const pages = Math.ceil(sortedProductList.length / PRODUCT_PER_PAGE)
    const startIndex = (currentPage - 1) * PRODUCT_PER_PAGE;
    const finishIndex = currentPage * PRODUCT_PER_PAGE;
    const orderedProducts = sortedProductList.slice(startIndex, finishIndex);

    const generatedPages = [];
    for (let i = 1; i <= pages; i++) {
        generatedPages.push(i);
    }





    return (
        <>
            <section className='foods'>
                <div className="banner">
                    <img src={imgBanner} alt="" />
                    <h3><span>All Foods</span></h3>
                </div>


                <div className="all_foods">
                    <Container>
                        <form action="" >
                            <Row className='rowGap'>
                                <Col xl="6" lg="6" md="6" sm="6">
                                    <div className="search_pro d-flex">
                                        <input type="search" id='search' name='search' value={search} onChange={handleChangeSearch} placeholder="i'm looking for...." />
                                        <label htmlFor="search"><FiSearch /></label>
                                    </div>
                                </Col>

                                <Col xl="6" lg="6" md="6" sm="6">
                                    <div className="select d-flex">
                                        <select name="sortedProductList" id="sortedProductList" onChange={(e) => setSortItem(e.target.value)}>

                                            <option value="default">Default</option>

                                            <option value="alphabetically,A-Z"> Alphabetically, A-Z</option>

                                            <option value="alphabetically,Z-A"> Alphabetically, Z-A</option>

                                            <option value="high"> High Price</option>

                                            <option value="low"> Low Price</option>

                                        </select>
                                    </div>
                                </Col>
                            </Row>
                        </form>



                        <div className="foods_Pro">
                            <Row>
                                {
                                    orderedProducts.map((product, index) => (
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





                {/* ====== start of pagination ===== */}
                <Container>
                    <div className="pagination d-flex">
                        <div className="btn_pag">
                            <button
                            className={currentPage === 1 ? "disabled" : ""}
                                disabled={currentPage === 1}
                                onClick={() => {
                                    setCurrentPage((prev) => prev - 1);
                                    window.scrollTo(0, 0);
                                }}
                            >
                                <FiArrowLeft />
                            </button>
                        </div>

                        <div className="btn_num d-flex">
                            {
                                generatedPages.map((page) =>
                                    <button className={currentPage === page ? "activeBtnNum" : ""}
                                        onClick={() => {
                                            setCurrentPage(page);
                                            window.scrollTo(0, 0);
                                        }} key={page}>
                                        {page}
                                    </button>
                                )
                            }
                        </div>

                        <div className="btn_pag">
                            <button
                                className={currentPage === pages ? "disabled" : ""}
                                disabled={currentPage === pages}
                                onClick={() => {
                                    setCurrentPage((prev) => prev + 1)
                                    window.scrollTo(0, 0);
                                }}
                            >
                                <FiArrowRight />
                            </button>
                        </div>
                    </div>
                </Container>

            </section>
        </>
    )
}

export default Foods;