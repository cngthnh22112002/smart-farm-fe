import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:5000');

function App() {
  const [light_sensor, setLightSensor] = useState('');
  const [soilmoisture_sensor, setSoilmoistureSensor] = useState('');
  const [humidity_sensor, setHumiditySensor] = useState('');
  const [temperature_sensor, setTemperatureSensor] = useState('');

  useEffect(() => {
    socket.on('light-sensor', (data) => {
      setLightSensor(data);
    });
    socket.on('soilmoisture-sensor', (data) => {
      setSoilmoistureSensor(data);
    });
    socket.on('humidity-sensor', (data) => {
      setHumiditySensor(data);
    });
    socket.on('temperature-sensor', (data) => {
      setTemperatureSensor(data);
    });
  }, []);

  return (
    <div>
      <p>Message from light_sensor: {light_sensor}</p>
      <p>Message from soilmoisture_sensor: {soilmoisture_sensor}</p>
      <p>Message from humidity_sensor: {humidity_sensor}</p>
      <p>Message from temperature_sensor: {temperature_sensor}</p>
    </div>
  );
}

export default App;