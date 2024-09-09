import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { GoogleLogin } from '@react-oauth/google';
import { Link, useNavigate } from 'react-router-dom';
import { jwtDecode } from "jwt-decode";
import { MangaState } from '../context/MangaContext';

const LoginPage = () => {
    const navigate = useNavigate()
    const {setUser} = MangaState()

    return (
        <div>
            <div className='containers'>
                <div className=' white-board'>
                    <Form className='login-form'>
                        <h1>LOGIN</h1>
                        <Form.Group className='mb-3'>
                            <Form.Label>User Name</Form.Label>
                            <Form.Control type='text' placeholder='Enter your username' />
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type='Password' placeholder='Enter your password' />
                        </Form.Group>
                        <p style={{fontSize:'13px'}}><Link>Forgot password</Link></p>
                        
                        <Button>Login</Button>
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
                        <p>Don't have account? <Link to={'/regis'}>Register</Link> here</p>
                    </Form>
                </div>
            </div>
        </div>      
    )
}

export default LoginPage