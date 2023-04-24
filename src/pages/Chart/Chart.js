import React, { useEffect, useState } from 'react';
import { Route, Routes } from "react-router-dom"
import { NavLink } from 'react-router-dom';
import './Chart.css';
import { ChartDayly } from './chartdayly';

export default function Chart() {
  return(
    <>
      
      <div style={{backgroundColor: '#333'}}>
        <NavLink to ="/chart/dayly">Dayly</NavLink>
        <NavLink to ="/chart/weekly">Weekly</NavLink>
        <NavLink to ="/chart/all">All</NavLink>
      </div>
      <Routes>
        <Route path="/chart/weekly" element={<ChartDayly />} />
      </Routes>
    </>
  )
  }