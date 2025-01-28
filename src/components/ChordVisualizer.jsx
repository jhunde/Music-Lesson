import React from "react";
import styles from "./chordVisualizer.module.css"
import * as Tone from "tone"

const playNote = (note) => {
    console.log(`Playing ${note}`);
    //create a synth and connect it to the main output (your speakers)
    const synth = new Tone.Synth().toDestination();
    //play a middle 'C' for the duration of an 8th note
    synth.triggerAttackRelease(note, "8n");
  };

function ChordVisualizer({chord}){
    return (
        <div>
            <h2> Chord: {chord.join(', ')}</h2>
            {chord.map((note, index) => ( 
                <div 
                    key={index} 
                    className={styles.chord}
                >
                    {note}
                    {playNote(note)}
                </div>
                ))
            }
        </div>
    );
};
export default ChordVisualizer;