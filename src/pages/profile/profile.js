import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './profile.css';

const Profile = () => {

  // const [fullname, setFullname] = useState("confused");
  // const [address, setAddress] = useState("Binh Duong");
  // const [email, setEmail] = useState("abcxyz@gmail.com");
  // const [bdate, setBdate] = useState("2002-06-19");
  // const [username, setUsername] = useState("Koduck123");
  const [data, setData] = useState([]);
  const [token, setToken] = useState('');
  
  useEffect(() => {
    // Get the token from your authentication system
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0M2QwMzIyNDExYjgwN2ZmMjc3YzY1NCIsImlhdCI6MTY4MjM1NzU3MywiZXhwIjoxNjgyNjE2NzczfQ.tenpKuH4IBTMeEBrfFmNhibiYovlkTev-IHDtlr-Cwo';
    setToken(token);

    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/user', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  
  const handleSubmit = (e) => {
    // e.preventDefault();
    // setUser({...user, username, email, firstName: fname, lastName: lname, birthDate: bdate});
    // navigate("/profile");
  }

  return (
    <>
    <main className="containerr">
      <div className="image-name-container">
        <img className='image-container'src="avatar.jpg" alt="Back officer avatar" />
        <div>
          <h3>{data.name}</h3>
        </div>
      </div>
      <form onSubmit={(e) => handleSubmit(e)} className="form-container">
        <div className='form-grid-container'>

          <label className='form-grid-item' htmlFor="fullNameInput">Full name</label>
          <input className='form-grid-item' type="text" id="fullNameInput" required value={data.name}/>
          {/* <input className='form-grid-item' type="text" id="fullNameInput" required value={fullname} onChange={(e) => setFullname(e.target.value)} /> */}

          <label className='form-grid-item' htmlFor="emailInput">Email</label>
          <input className='form-grid-item' type="email" id="emailInput" required value={data.email}/> 

          <label className='form-grid-item' htmlFor="addressInput">Gardens</label>
          <input className='form-grid-item' type="text" id="addressInput" required value={data.gardens} /> 

          <label className='form-grid-item' htmlFor="usernameInput">Username</label>
          <input className='form-grid-item' type="text" id="usernameInput" required value={data.username}  />

          <label className='form-grid-item' htmlFor="bdateInput">Password</label>
          <input className='form-grid-item' type="text" id="passwordInput" required value={data.password} /> 

          {/* <label className='form-grid-item' htmlFor="memberSinceInput">Member since</label>
          <input className='form-grid-item' type="date" id="memberSinceInput" required disabled value={memberSince} /> */}

          <div className='form-grid-item'></div>
          <div className='form-grid-item'>
            <div className='form-button-container'>
              <button className='form-button' type="submit" >Update information</button>
            </div>
          </div>
        </div>
        {/* <ChangePassword /> */}
      </form>
    </main>
    </>
  )
}

export default Profile