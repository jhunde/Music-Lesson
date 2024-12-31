import { useState } from 'react'
import React from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import styles from './pianoKeyboard.module.css'

const playNote = (note) => {
  console.log(`Playing ${note}`);
};

function PianoKeyboard() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className={styles.buttons}>
        <button onClick= {() => {playNote('C')}}> C </button>
        <button onClick={() => {playNote('D')}}> D </button>
        <button onClick={() => {playNote('E')}}> E </button>
      </div>
    </>
  )
}

export default PianoKeyboard
