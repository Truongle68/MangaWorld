import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { GoogleLogin } from '@react-oauth/google';
import { Link, useNavigate } from 'react-router-dom';
import { jwtDecode } from "jwt-decode";

const RegisterPage = () => {
    const navigate = useNavigate()
    return (
        <div>
            <div className='containers'>
                <div className=' white-board'>
                    <Form className='regis-form'>
                        <h1>REGISTER</h1>
                        <Form.Group className='mb-3'>
                            <Form.Label>User Name</Form.Label>
                            <Form.Control type='text' placeholder='Enter your username' />
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type='email' placeholder='Enter your email' />
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type='Password' placeholder='Enter your password' />
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label>Re-enter Password</Form.Label>
                            <Form.Control type='Password' placeholder='Re-enter your password' />
                        </Form.Group>
                        
                        
                        <Button>Register</Button>
                        <p>or</p>
                        <GoogleLogin
                            onSuccess={credentialResponse => {
                                const credentialResponseDecoded = jwtDecode(credentialResponse.credential)  
                                localStorage.setItem('userInfo', JSON.stringify(credentialResponseDecoded))
                                navigate('/')                          
                            }}
                            onError={() => {
                                console.log('Login Failed');
                            }}
                        />
                        <p>Have account? <Link to={'/login'}>Login</Link> here</p>
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default RegisterPage