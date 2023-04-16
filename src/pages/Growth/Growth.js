import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import './Growth.css';

export default function Growth() {
  
  const [diary, setDiary] = useState([])
  const [curDate, setDate] = useState(new Date())

  useEffect(() => {
    setDate(new Date())
  }, [])

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
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="card" style={{marginBottom: '20px'}}>
              <div class="card-body">
                <h6 class="card-title">Timeline</h6>
                <div id="content">
                  <ul class="timeline">
                    <li class="event" data-date="12:30 - 1:00pm">
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
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="msger-inputarea-container">
        <div className="msger-inputarea">
          <input type="text" className="msger-input" placeholder="Enter your notes..."/>
          <button type="button" className="msger-send-btn">Add</button>
        </div>
      </div>
    </>
  )
}