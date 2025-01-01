import React from 'react'
import styles from './pianoKeyboard.module.css'
import * as Tone from "tone"

const playNote = (note) => {
  console.log(`Playing ${note}`);

  //create a synth and connect it to the main output (your speakers)
  const synth = new Tone.Synth().toDestination();

  //play a middle 'C' for the duration of an 8th note
  synth.triggerAttackRelease(note, "8n");

};

function PianoKeyboard() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className={styles.buttons}>
        <button onClick= {() => {playNote('C4')}}> C </button>
        <button onClick={() => {playNote('D4')}}> D </button>
        <button onClick={() => {playNote('E4')}}> E </button>
      </div>
    </>
  )
}

export default PianoKeyboard
