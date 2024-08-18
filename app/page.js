'use client';
import React from 'react';
import Homepage from './homepage/page.js';
//import Home from './routes/homepage.js';
import Flashcard from './dashboard/Flashcard.js';
import Login from'./routes/auth.jsx';

export default function Home() {
  return (
    <div>
      <Login />
  </div>

  )
  }