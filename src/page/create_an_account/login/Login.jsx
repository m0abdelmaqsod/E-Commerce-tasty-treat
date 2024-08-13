import React, { useState, useEffect } from 'react';
import '../styles/create_account.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { IoMdAlert } from "react-icons/io";



import imgBgAll from "../../../assets/images/e4c70a70d42588df1e33146f414c4d15 bg.jpg";
import imgLogo from "../../../assets/images/res-logo.png";
import imgForm from "../../../assets/images/bg_login.jpg";



const Login = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [accept, setAccept] = useState(false);
    const [errorMassing, setErrorMassing] = useState('');

    const navigate = useNavigate();



    const handelSubmit = async (e) => {
        e.preventDefault();
        let userData = { email, password }
        // console.log(userData);
        let checkData = true;
        setAccept(true);

        if (email === "" || password === "" || password.length < 8) {
            checkData = false;
        } else checkData = true;
        try {
            if (checkData) {
                let res = axios.post("http://localhost:8000/user", userData)
                    .then((res) => {
                        toast.success('User has been registered successfully');
                        navigate('/');
                    })
                    .catch((error) => toast.success(error))
            }
        } catch (error) {
            console.log(error)
        }
    }


    // console.log(errorMassing);




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

                                        <h5>Welcome Back</h5>
                                        <p>Sing in with your email address and password.</p>

                                        <form action="">
                                            <div>
                                                <label htmlFor="email">Email Address <span>*</span></label>
                                                <input type="email" name='email' value={email} id='email' placeholder='Enter Email Address' onChange={(e) => setEmail(e.target.value)} />
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
                                                <input type="password" name='password' value={password} id='password' placeholder='Enter Password' onChange={(e) => setPassword(e.target.value)} />
                                            </div>
                                            {
                                                password === '' && accept && (
                                                    <p className='errorMassing'><span><IoMdAlert /></span>Password cannot be an empty field</p>
                                                )}
                                            {
                                                password.length < 8 && accept && (
                                                    <p className='errorMassing'><span><IoMdAlert /></span>The password must contain an uppercase letter, a lowercase letter, a number, and consist of 9 elements</p>
                                                )}
                                        </form>

                                        <div className="forget_pass">
                                            <Link to='/Forget_pass'>Forget Password ?</Link>
                                        </div>

                                        <div className="btn_login">
                                            <Button variant='danger' onClick={handelSubmit}>Login</Button>
                                        </div>

                                        <div className="Don_have_account d-flex">
                                            <p>Don't have an account ?</p>
                                            <Link to='/Signup'>Sign Up</Link>
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

export default Login