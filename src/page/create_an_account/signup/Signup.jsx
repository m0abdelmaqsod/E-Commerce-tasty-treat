import React, { useState, useEffect } from 'react';
import '../styles/create_account.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import axios from 'axios';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { IoMdAlert } from "react-icons/io";




import imgBgAll from "../../../assets/images/e4c70a70d42588df1e33146f414c4d15 bg.jpg";
import imgLogo from "../../../assets/images/res-logo.png";
import imgForm from "../../../assets/images/bg_login.jpg";




const Signup = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])


    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [accept, setAccept] = useState(false);

    // console.log(userName, email, password);
    const navigate = useNavigate();



    // ======= handel Submit btn & form reviews  ====== //
    const handleSubmit = (e) => {
        e.preventDefault();
        let userData = { userName, email, password }
        // console.log(userData);
        let checkData = true;
        setAccept(true);

        if (userName === '' || email.length <= 11 || password === "" || password < 8) {
            checkData = false;
        } else checkData = true;
        try {
            if (checkData) {
                let res = axios.post("http://localhost:8000/user", userData)
                    .then((res) => {
                        toast.success('An account has been created successfully')
                        navigate('/Login');
                    })
                    .catch((error) => toast.error(error.message));
            }
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
            <section className='create_account'>
                <div className="bg_create_account">
                    <img src={imgBgAll} alt="" />
                </div>

                <div className="div_blur">
                    <div className="div_account">
                        <Container className='p-0'>
                            <Row>
                                <Col className='p-0' sm='12' md='12' lg='5' xl='5'>
                                    <div className="div_form">
                                        <div className="logo_img">
                                            <img src={imgLogo} alt="" />
                                        </div>

                                        <h5>Create Account</h5>

                                        <div className="btn_sing d-flex">
                                            <Link>
                                                <Button variant="outline-secondary"><FcGoogle /> <span>sing up with Google</span>
                                                </Button>
                                            </Link>
                                        </div>

                                        <p className='or text-center'>- OR -</p>
                                        <form action="">
                                            <div>
                                                <label htmlFor="userName">Full Name <span>*</span></label>
                                                <input type="text" name='userName' id='userName' value={userName} onChange={(e) => setUserName(e.target.value)} placeholder='Enter Full Name ' />
                                            </div>
                                            {
                                                userName === '' && accept && (
                                                    <p className='errorMassing'><span><IoMdAlert /></span>User Name cannot be an empty field</p>
                                                )
                                            }


                                            <div>
                                                <label htmlFor="email">Email Address <span>*</span></label>
                                                <input type="email" name='email' id='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter Email Address' />
                                            </div>
                                            {
                                                email === '' && accept && (
                                                    <p className='errorMassing'><span><IoMdAlert /></span>Email cannot be an empty field</p>
                                                )
                                            }
                                            {
                                                email.length < 11 && accept && (
                                                    <p className='errorMassing'><span><IoMdAlert /></span>Enter a valid email</p>
                                                )
                                            }


                                            <div>
                                                <label htmlFor="password">Password <span>*</span></label>
                                                <input type="password" name='password' id='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter Password' />
                                            </div>
                                            {
                                                password === '' && accept && (
                                                    <p className='errorMassing'><span><IoMdAlert /></span>Password cannot be an empty field</p>
                                                )
                                            }
                                            {
                                                password.length < 8 && accept && (
                                                    <p className='errorMassing'><span><IoMdAlert /></span>The password must contain an uppercase letter, a lowercase letter, a number, and consist of 9 elements</p>
                                                )
                                            }




                                            <div className='Terms_of_Service d-flex'>
                                                <p>By joining, you agree to the <span>Terms</span> and <span>Privacy Policy</span>.</p>
                                            </div>
                                        </form>

                                        <div className="btn_login">
                                            <Button variant='danger' onClick={handleSubmit}>Signup</Button>
                                        </div>

                                        <div className="Don_have_account d-flex">
                                            <p>Don't have an account ?</p>
                                            <Link to='/Login'>Login</Link>
                                        </div>
                                    </div>
                                </Col>

                                <Col className='p-0' sm='12' md='12' lg='7' xl='7'>
                                    <div className="bg_img_account">
                                        <img src={imgForm} alt="" />
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Signup