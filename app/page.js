'use client';
import React from 'react';
import Dashboard from './dashboard/page.js';
import Flashcard from './components/Flashcard.js';
import Login from'./routes/auth.jsx';

export default function Home() {
  return (
    <div>
      <Login />
  </div>

  )
  }