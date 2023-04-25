import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import './Chat.css';

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0M2QwMzIyNDExYjgwN2ZmMjc3YzY1NCIsImlhdCI6MTY4MjM1NDY3OSwiZXhwIjoxNjgyNjEzODc5fQ.E5dbIzY5tXQmaq2EwI8KIEgLgXtYaeqTjqLq-1sxvs0"

export default function Chat() {
  const handleAddLed = async () => {
    var res = {
      gardenId: "6446b3ba45be18977fc3ede1"
    }
    console.log("res: ", res)
    let temp = await fetch('http://localhost:5000/devices/led', {
      method: 'POST',
      headers: {
        'Content-Type': "application/json",
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(res)
    })
    let resjson = await temp.json()
    console.log("Response: ", resjson)
  }

  return(
    <>
      <div>111</div>
      <button onClick={() => handleAddLed()}>cccccccccc</button>
    </>
  )
}