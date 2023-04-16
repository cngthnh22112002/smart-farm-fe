import { useState, useEffect } from 'react';
import axios from 'axios';
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "antd";

function Login() {
  const [token, setToken] = useState('');
  const navigate = useNavigate();
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const login = async () => {

    try {
        // make axios post request
        const res = await axios({
            method: "get",
            url: 'http://localhost:5000/auth/login',
            params: {
                username: username,
                password: password,
            },
            
        })
        .then((res)=>{
            console.log(res.data);
            alert('Login successfully!');
            const { token } = res.data;
            setToken(token);
            navigate('/homepage')
            console.log("OK");
        })
    } catch (error) {
        console.log(error);
    }
}
const handleSubmit = (e) => {
  e.preventDefault();
}
return (
  <div>
      <TitleContainer>
          <CenterText>LOGIN</CenterText>
      </TitleContainer>
      <FormContainer>
          <CustomForm onSubmit={handleSubmit}>
              <FormItem>
                  <span> <Text>*</Text>Username</span>
                  <FormInput
                      placeholder="Enter username"
                      type="text"
                      onChange={(e) => { setUserName(e.target.value) }}
                  />
              </FormItem>
              <FormItem>
                  <span><Text>*</Text>Password</span>
                  <FormInputPassWord
                      placeholder="Enter password"
                      type="password"
                      value={password}
                      onChange={(e) => { setPassword(e.target.value) }}
                  />
              </FormItem>

              <span>Forgot password? <FormNote to='/misspassword'>Setting password</FormNote></span>
              <FormItem style={{ marginTop: '20px' }}>
                  <FormButton type="submit" onClick={login}>Login</FormButton>
              </FormItem>
              <span>Valid account? <FormNote to='/register'>Register</FormNote></span>
          </CustomForm>

      </FormContainer>
  </div>

)
}

export default Login;

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
const CustomForm = styled.form`
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