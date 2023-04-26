import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import './Growth.css';

function dtos() {
  var i = new Date()
  return i.getDate() + "/" + (i.getMonth()+1) + " - " + i.getHours() + ":" + i.getMinutes()
}

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0M2QwMzIyNDExYjgwN2ZmMjc3YzY1NCIsImlhdCI6MTY4MjM1NDY3OSwiZXhwIjoxNjgyNjEzODc5fQ.E5dbIzY5tXQmaq2EwI8KIEgLgXtYaeqTjqLq-1sxvs0"

export default function Growth() {
  
  const [diary, setDiary] = useState([
    {'date': "10/04 - 8:30", 'title': "Nhật ký chăm sóc cây", 'mess': "cay phat trien binh thuong"},
    {'date': "11/04 - 8:30", 'title': "Nhật ký chăm sóc cây", 'mess': "o luong 1 thay co sau"},
    {'date': "12/04 - 8:30", 'title': "Nhật ký chăm sóc cây", 'mess': "moi phun thuoc tru sau o luong 1"},
    {'date': "13/04 - 8:30", 'title': "Nhật ký chăm sóc cây", 'mess': "luong 2 la hoi vang"},
  ])
  const [curDate, setDate] = useState(new Date())
  const [title, setTitle] = useState("Nhật ký chăm sóc cây")
  const [message, setMessage] = useState("null")

  const fetchData = async () => {
    let res = await fetch ('http://localhost:5000/dictionaries', {
      method: 'GET',
      headers: {
        "Authorization": `Bearer ${token}`
      },
    })
    let resjson = await res.json()
    console.log("dict list: ", resjson)
    
    var data = []
    for(let i = 0; i < resjson.length; i++){
      var tempdate = new Date(resjson[i].createAt)
      tempdate = dtos(tempdate)
      data.push({'date': tempdate,'title': resjson[i].title,'mess': resjson[i].content})
    }
    setDiary([...diary, ...data])
  }

  useEffect(() => {
    setDate(new Date())
    fetchData()
  }, [])

  const onSubmit = async () => {
    setDiary([...diary, {'date': dtos(curDate),'title': title,'mess': message}])
    const body = {
      'title': title,
      'content': message
    }
    let res = await fetch('http://localhost:5000/dictionaries',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      redirect: 'follow',
      body: JSON.stringify(body)
    })
    let resjson = await res.json()
    console.log("Add dictinoaries: ", resjson)
  }

  return(
    <>
      <div className="title" style={{ marginLeft: 30, height: 50, marginBottom: 30 }}>
        <div style={{ width: "80%", margin: 0, textAlign: "left"}}>
          <h1>Growth diary</h1>
        </div>
        <div className="title_2" style={{ height: 50 }}>
          <div id="current-h">{curDate.getHours()} : {curDate.getMinutes()}</div>
          <div id="current-d">{curDate.getDate()} : {curDate.getMonth() + 1} : {curDate.getFullYear()}</div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="card" style={{marginBottom: '20px'}}>
              <div className="card-body">
                <h6 className="card-title">Timeline</h6>
                <div id="content">
                  <ul className="timeline">
                    {/* <li class="event" data-date="12:30 - 1:00pm">
                      <h3>Registration</h3>
                      <p>Get here on time, it's first come first serve. Be late, get turned away.</p>
                    </li>
                    <li class="event" data-date="2:30 - 4:00pm">
                      <h3>Opening Ceremony</h3>
                      <p>Get ready for an exciting event, this will kick off in amazing fashion with MOP &amp; Busta Rhymes as an opening show.</p>
                    </li>
                    <li class="event" data-date="5:00 - 8:00pm">
                      <h3>Main Event</h3>
                      <p>This is where it all goes down. You will compete head to head with your friends and rivals. Get ready!</p>
                    </li>
                    <li class="event" data-date="8:30 - 9:30pm">
                      <h3>Closing Ceremony</h3>
                      <p>See how is the victor and who are the losers. The big stage is where the winners bask in their own glory.</p>
                    </li> */}
                    {diary.map((i, index) => 
                      <li className="event" id={index} data-date={i.date}>
                        <h3>{i.title}</h3>
                        <p>{i.mess}</p>
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="msger-inputarea-container">
        <div className="msger-inputarea" style={{height: '8em'}}>
          <div style={{display: 'flex', flexDirection: 'column', width: '80%'}}>
            <input 
              type="text"
              style={{height: '30%'}}
              placeholder="Enter title"
              onChange={(e) => {setTitle(e.target.value)}} />
            <input 
              type="text"
              className="msger-input"
              placeholder="Enter your notes..."
              onChange={(e) => {setMessage(e.target.value)}} />
          </div>
          <button type="button"
            className="msger-send-btn"
            style={{marginTop: '1.5em', marginBottom: '1.5em'}}
            onClick={() => {
              onSubmit()
            }}>Add</button>
        </div>
      </div>
    </>
  )
}