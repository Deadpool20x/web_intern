import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from './components/Header'
import SkillList from './components/SkillList';
import StaminaManager from './components/StaminaManager';
function App() {
  // 1. Create the array of skill objects
  const skills = [
    { name: "JS", level: 95 },
    { name: "React", level: 80 },
    { name: "Vite", level: 92 },
    { name: "CSS", level: 75 }
  ];
  return (
    <>
      <div>
        <Header />
        <main style={{ padding: '20px' }}>
          <h1>Intern: {import.meta.env.VITE_INTERN_NAME}</h1>
          {/* 2. Pass the array as a prop */}
          <SkillList skills={skills} />
          <StaminaManager />
        </main>
      </div>
    </>
  )
}

export default App
