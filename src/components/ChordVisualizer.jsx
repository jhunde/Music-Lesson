import React from "react";
import styles from "./chordVisualizer.module.css"

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
                </div>
                ))
            }
        </div>
    );
};
export default ChordVisualizer;