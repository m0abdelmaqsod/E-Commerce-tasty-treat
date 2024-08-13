import React, { useState, useEffect } from 'react';
import "./styles/info_data_single_pro.css"
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AiTwotoneStar } from "react-icons/ai";
import { BsExclamationCircleFill } from "react-icons/bs";
import axios from 'axios';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from 'react-redux';
import { getReviews } from '../../../store/products/apiPro';

const Info_data_single_pro = ({ dataPro }) => {
    const dispatch = useDispatch();
    // ======= handel get data ====== //
    const { reviewUser } = useSelector(state => state.pro);


    // ======= handel active nav info ====== //
    const [activeNavInfo, setActiveNavInfo] = useState("review");

    // ======= handel Submit btn star & form reviews  ====== //
    const handleStar = (e) => {
        e.preventDefault();
    }

    // ======= start handel btn star review ======= //
    const [starReview, setStarReview] = useState(0);

    // ======= handel post data reviews form ====== //
    const [nameUser, setNameUser] = useState("");
    const [emailUser, setEmailUser] = useState("");
    const [review, setReview] = useState("");
    const [imgUser, setImgUser] = useState("");
    const nameProReview = dataPro.namePro;
    const [accept, setAccept] = useState(false);


    // ======= handel Submit btn & form reviews  ====== //
    const handleSubmit = (e) => {
        e.preventDefault();
        let userData = { nameProReview, nameUser, emailUser, imgUser, starReview, review }
        // console.log(userData);
        let checkData = true;
        setAccept(true);

        if (nameUser === '' || emailUser.length <= 11 || starReview === 0 || review === '') {
            checkData = false;
        } else checkData = true;
        try {
            if (checkData) {
                let res = axios.post("http://localhost:8000/reviewUser", userData)
                    .then((res) => toast.success('the product was evaluated'))
                    .catch((error) => toast.error(error.message));
            }
        } catch (error) {
            console.log(error);
        }
    }





    // ======= handel show & hide length reviews ====== //
    const [showHideBtn, setShowHideBtn] = useState(true)
    const [lengthReviews, setLengthReviews] = useState(3);



    // ======= start handel axios get data ======= //
    useEffect(() => {
        dispatch(getReviews())
    }, []);




    // ======= handel filter reviews  ====== //
    const filterPro = reviewUser.filter((product) => product.nameProReview === dataPro.namePro);


    // ======= handel length data reviews ====== //
    const lengthData = filterPro.slice(0, lengthReviews);



    return (
        <>
            <div className="info_single_pro">
                <Container>
                    <div className="nav_info_pro">
                        <button className={activeNavInfo === "review" ? "activeNavInfo" : ""} onClick={() => setActiveNavInfo("review")}>Review</button>
                        <button className={activeNavInfo === "description" ? "activeNavInfo" : ""} onClick={() => setActiveNavInfo("description")}>Description</button>
                    </div>

                    <div className="data_info_pro">
                        {
                            activeNavInfo === 'description' ?
                                <div className="description">
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur dolore aliquid modi. Dolor nesciunt, asperiores facilis non quisquam ipsum modi earum. Inventore itaque officiis odio vel nobis! Soluta ducimus similique laborum exercitationem expedita pariatur accusantium dicta, officiis, eos numquam cumque dolorem autem vitae optio quia a nihil! Consectetur, nesciunt dolorem!
                                    </p>
                                </div>
                                :
                                <div className="review">
                                    <Row className='row_sev_com'>
                                        <Col sm="12" md="5" lg="5" xl="5">
                                            <h3>{filterPro.length} Reviews</h3>
                                            {
                                                lengthData.length === 0 ?
                                                    <p className='mesReview'>There is no evaluations</p>
                                                    : <div>
                                                        {
                                                            lengthData.map((product, index) => (
                                                                <div key={index} className="com_pro">
                                                                    <div className="data_com_user d-flex">
                                                                        <div className="d-flex">
                                                                            <div className="img_user">
                                                                                {
                                                                                    product.imgUser === "" ?
                                                                                        <img src="../../../../public/images/user.png" alt="" />
                                                                                        : <img src={product.imgUser} alt="" />
                                                                                }

                                                                            </div>

                                                                            <div className="info_user">
                                                                                <h5>{product.nameUser}</h5>
                                                                                <Link>{product.emailUser}</Link>
                                                                            </div>
                                                                        </div>

                                                                        <div className="message_time">
                                                                            <h6>1 Hour</h6>

                                                                            <div className="assess">
                                                                                <button className={product.starReview === 5 ? "five" : ""}>
                                                                                    <AiTwotoneStar />
                                                                                </button>
                                                                                <button className={product.starReview === 4 ? "four" : product.starReview === 5 ? "five" : ""}>
                                                                                    <AiTwotoneStar />
                                                                                </button>
                                                                                <button className={product.starReview === 3 ? "three" : product.starReview === 4 ? "four" : product.starReview === 5 ? "five" : ""}>
                                                                                    <AiTwotoneStar />
                                                                                </button>
                                                                                <button className={product.starReview === 2 ? "tow" : product.starReview === 3 ? "three" : product.starReview === 4 ? "four" : product.starReview === 5 ? "five" : ""}>
                                                                                    <AiTwotoneStar />
                                                                                </button>
                                                                                <button className={product.starReview === 1 ? "one" : product.starReview === 2 ? "tow" : product.starReview === 3 ? "three" : product.starReview === 4 ? "four" : product.starReview === 5 ? "five" : ""}>
                                                                                    <AiTwotoneStar />
                                                                                </button>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                    <p>{product.review}</p>
                                                                </div>
                                                            ))
                                                        }
                                                    </div>
                                            }



                                            <div className="btn_show_hide">
                                                {
                                                    filterPro.length <= 3 ? "" :
                                                        showHideBtn === true ?
                                                            <button onClick={() => {
                                                                setLengthReviews(filterPro.length)
                                                                setShowHideBtn(false)
                                                            }}>Show all reviews</button> : showHideBtn === false ?
                                                                <button onClick={() => {
                                                                    setLengthReviews(3)
                                                                    setShowHideBtn(true)
                                                                }}>Hide some reviews</button> : ""
                                                }
                                            </div>
                                        </Col>



                                        <Col sm="12" md="6" lg="6" xl="6">
                                            <div className="div_review">

                                                <h3>Add Review</h3>
                                                <form action="">
                                                    <Row className='row_review'>
                                                        <Col sm="12" md="12" lg="12" xl="12">
                                                            <div className="assess d-flex" onClick={handleStar}>
                                                                <h6>review</h6>

                                                                <button className={starReview === 1 ? "start" :
                                                                    starReview === 2 ? "start" : starReview === 3 ? "start" : starReview === 4 ? "start" : starReview === 5 ? "start" : ""} onClick={() => setStarReview(1)}>
                                                                    <AiTwotoneStar />
                                                                </button>
                                                                <button className={
                                                                    starReview === 2 ? "start" : starReview === 3 ? "start" : starReview === 4 ? "start" : starReview === 5 ? "start" : ""} onClick={() => setStarReview(2)}>
                                                                    <AiTwotoneStar />
                                                                </button>
                                                                <button className={starReview === 3 ? "start" : starReview === 4 ? "start" : starReview === 5 ? "start" : ""} onClick={() => setStarReview(3)}>
                                                                    <AiTwotoneStar />
                                                                </button>
                                                                <button className={starReview === 4 ? "start" : starReview === 5 ? "start" : ""} onClick={() => setStarReview(4)}>
                                                                    <AiTwotoneStar />
                                                                </button>
                                                                <button className={starReview === 5 ? "start" : ""} onClick={() => setStarReview(5)}>
                                                                    <AiTwotoneStar />
                                                                </button>
                                                            </div>
                                                            {
                                                                starReview === 0 && accept && (
                                                                    <p className='errorMassing'>
                                                                        <span><BsExclamationCircleFill /></span> Enter your star review
                                                                    </p>
                                                                )
                                                            }
                                                        </Col>
                                                        <Col sm="12" md="12" lg="12" xl="12">
                                                            <div className="">
                                                                <input type="text" name='name' placeholder='Enter your name' value={nameUser} onChange={(e) => setNameUser(e.target.value)} required />
                                                            </div>
                                                            {
                                                                nameUser === "" && accept && (
                                                                    <p className='errorMassing'>
                                                                        <span><BsExclamationCircleFill /></span>  Enter your name
                                                                    </p>
                                                                )
                                                            }
                                                        </Col>
                                                        <Col sm="12" md="12" lg="12" xl="12">
                                                            <div className="">
                                                                <input type="email" placeholder='Enter your email' name='email' value={emailUser} onChange={(e) => setEmailUser(e.target.value)} required />
                                                            </div>
                                                            {
                                                                emailUser.length <= 11 && accept && (
                                                                    <p className='errorMassing'>
                                                                        <span><BsExclamationCircleFill /></span> Enter your email
                                                                    </p>
                                                                )
                                                            }
                                                        </Col>
                                                        <Col sm="12" md="12" lg="12" xl="12">
                                                            <div className="">
                                                                <textarea name="review" id="" placeholder='Enter your review' value={review} onChange={(e) => setReview(e.target.value)} required></textarea>
                                                            </div>
                                                            {
                                                                review === "" && accept && (
                                                                    <p className='errorMassing'>
                                                                        <span><BsExclamationCircleFill /></span> Enter your review
                                                                    </p>
                                                                )
                                                            }
                                                        </Col>
                                                        <Col sm="12" md="12" lg="12" xl="12">
                                                            <div className="btn_submit d-flex">
                                                                <Button onClick={handleSubmit} variant="danger">Submit</Button>
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                </form>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                        }
                    </div>
                </Container >
            </div >
        </>
    )
}

export default Info_data_single_pro