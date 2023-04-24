import React, { useEffect, useState } from 'react';
import { Route, Routes } from "react-router-dom"
import { NavLink } from 'react-router-dom';
import NotifyToday  from './NotifyToday.js';

export default function Notify() {
  return(
    <>
      <NotifyToday></NotifyToday>
      <Routes>
        <Route path="/notify/today" element={<NotifyToday />} />
      </Routes>
    </>
  )
}