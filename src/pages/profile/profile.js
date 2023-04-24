import React, { useContext, useState } from 'react'
import './profile.css';

const Profile = () => {
  
//   const {formatDateToInput, user, setUser} = useContext(GlobalContext);
  const [fname, setFname] = useState("confused");
  const [lname, setLname] = useState("Koduck");
  const [email, setEmail] = useState("abcxyz@gmail.com");
  const [bdate, setBdate] = useState("2002-06-19");
  const [id, setId] = useState("20xxxxx");
  const [username, setUsername] = useState("Koduck123");
  const [memberSince, setMemberSince] = useState("2018-08-12");

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
          <h3>{fname}</h3>
        </div>
      </div>
      <form onSubmit={(e) => handleSubmit(e)} className="form-container">
        <div className='form-grid-container'>

          <label className='form-grid-item' htmlFor="firstNameInput">First name</label>
          <input className='form-grid-item' type="text" id="firstNameInput" required value={fname} onChange={(e) => setFname(e.target.value)} />

          <label className='form-grid-item' htmlFor="lastNameInput">Last name</label>
          <input className='form-grid-item' type="text" id="lastNameInput" required value={lname} onChange={(e) => setLname(e.target.value)} />

          <label className='form-grid-item' htmlFor="emailInput">Email</label>
          <input className='form-grid-item' type="email" id="emailInput" required value={email} onChange={(e) => setEmail(e.target.value)} />

          <label className='form-grid-item' htmlFor="bdateInput">Birth date</label>
          <input className='form-grid-item' type="date" id="bdateInput" required value={bdate} onChange={(e) => setBdate(e.target.value)} />

          <label className='form-grid-item' htmlFor="idInput">ID</label>
          <input className='form-grid-item' type="text" id="idInput" required disabled value={id} />

          <label className='form-grid-item' htmlFor="usernameInput">Username</label>
          <input className='form-grid-item' type="text" id="usernameInput" required value={username} onChange={(e) => setUsername(e.target.value)} />

          <label className='form-grid-item' htmlFor="memberSinceInput">Member since</label>
          <input className='form-grid-item' type="date" id="memberSinceInput" required disabled value={memberSince} />

          <div className='form-grid-item'></div>
          <div className='form-grid-item'>
            <div className='form-button-container'>
              <button className='form-button' type="submit">Save changes</button>
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