import React, { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "antd";
import axios from "axios";
// import { Navigate } from "react-router-dom";

function Register() {

    const [username, setUserName] = useState('');
    const [password, setPassWord] = useState('');
    const navigate = useNavigate()
    const register = async () => {
        try {
            // make axios post request
            const res = await axios({
                method: "post",
                url: 'http://localhost:5000/auth/signup',
                data: {
                    username: username,
                    password: password,
                },
                // headers: { "Content-Type": "application/x-www-form-urlencoded" }
            })
            .then((res)=>{
                console.log(res.data);
                alert('Register successfully!');
                localStorage.setItem('token',res.data.token);
                navigate('/login');
            })
        } catch (error) {
            console.log(error.response);
        }
    }
    const handleSubmit = (e) => {

        e.preventDefault();
    }
    return (
        <div>
            <TitleContainer>
                <CenterText>Register</CenterText>
            </TitleContainer>
            <FormContainer>
                <CustomForm onSubmit={handleSubmit} method="POST">
                <FormItem>
                        <span><Text>*</Text>Username</span>
                        <FormInput placeholder="Enter username" onChange={(e) => { setUserName(e.target.value) }}
                            name="username"
                            value={username}
                        />
                    </FormItem>
                    
                    <FormItem>
                        <span><Text>*</Text>Password</span>
                        <FormInputPassWord placeholder="Enter password" onChange={(e) => { setPassWord(e.target.value) }}
                            name="password"
                            value={password}
                        />
                    </FormItem>
                    <FormItem>
                        <FormButton type="submit" onClick={register}>Register</FormButton>
                    </FormItem>
                    <span>Valid account? <FormNote to='/login'>Login</FormNote></span>
                </CustomForm>

            </FormContainer>
        </div>
    )
}

export default Register;
const TitleContainer = styled.div`
    margin-top: 50px;
    padding-top: 100px;
    margin-bottom: 40px;
    @media only screen and (max-width: 768px) {
        padding-top: 40px;
}
`;
const CenterText = styled.div`
    text-align: center;
    font-weight: 600;
    font-size: 32px;
    line-height: 40px;
    color: #333;
    @media only screen and (max-width: 768px) {
      font-size: 24px;
    }
`;
const FormContainer = styled.div`
    display: flex;
    justify-content: center;
    @media only screen and (max-width: 768px) {
        padding-top: 40px;
}
`;
const FormItem = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
`;
const FormInput = styled(Input)`
    height: 48px !important;
    border-radius: 12px !important;
    border: 1px solid #d3d5db;
    font-size: 14px !important;
    margin-top:10px;
    padding: 15px 10px;
`;
const FormInputPassWord = styled(Input.Password)`
    height: 48px !important;
    border-radius: 12px !important;
    border: 1px solid #d3d5db;
    font-size: 14px !important;
    margin-top:10px;
    padding: 15px 10px;
`;
const FormButton = styled.button`
    border-radius: 16px !important;
    border: none !important;
    font-size: 16px;
    font-weight: 600 !important;
    transition: 1s;
    background-color: #087F38;
    color: #fff;
    height: 48px;
    cursor: pointer;
`;
const CustomForm = styled.div`
    width: 600px;
`;
const FormNote = styled(Link)`
    color:#087F38;
    text-decoration: none;
`;
const Text = styled.span`
    color: red;
    font-size: 16px;
    margin-right: 5px;
`;