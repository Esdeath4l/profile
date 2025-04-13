import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import './index.css';
import React from 'react';
import ProfileCard from './ProfileCard';

function App() {
  return (
    <div>
      <ProfileCard />
    </div>
  );
}

export default App;


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
