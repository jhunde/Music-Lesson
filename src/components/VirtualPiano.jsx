import React from "react";
import "./virtualPiano.css"

const allKeys = [
    "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B",
    "C2", "C#2", "D2", "D#2", "E2", "F2", "F#2", "G2", "G#2", "A2", "A#2", "B2",
    "C3", "C#3", "D3", "D#3", "E3", "F3", "F#3", "G3", "G#3", "A3", "A#3", "B3",
    "C4", "C#4", "D4", "D#4", "E4", "F4", "F#4", "G4", "G#4", "A4", "A#4", "B4"
  ];

  function VirtualPiano({ activeNotes = [] }) {
    return (
      <div className="piano">
        {allKeys.map((note) => {
          const isActive = activeNotes.includes(note);
          return (
            <div
              key={note}
              className={`key ${note.includes("#") ? "black-key" : "white-key"} ${
                isActive ? "active-key" : ""
              }`}
            >
              {note}
            </div>
          );
        })}
      </div>
    );
  }

  export default VirtualPiano;
