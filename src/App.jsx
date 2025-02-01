import React, { useEffect, useState } from 'react'
import './index.css'
import PianoKeyboard from './components/PianoKeyboard'
import ChordVisualizer from './components/ChordVisualizer'
import ChordSelector from './components/ChordSelector'
import { fetchChords } from './utils/chord'
const App = () => {
    const [chords, setChords] = useState({});
    const [currentChord, setCurrentChord] = useState([]);
    const [chordName, setChordName] = useState("");
  
    useEffect(() => {
      const loadChords = async () => {
        const data = await fetchChords();
        setChords(data);
      };
      loadChords();
    }, []); // The dependency array is necessary here
  
    const handleFetchChord = () => {
      const notes = chords[chordName] || [];
      setCurrentChord(notes);
    };
  
    return (
      <div className="App">
        <h1>Piano Tutor</h1>
        <div className="chord-input">
          <input
            type="text"
            placeholder="Enter chord (e.g., C Major)"
            value={chordName}
            onChange={(e) => setChordName(e.target.value)}
          />
          <button onClick={handleFetchChord}>Get Chord</button>
        </div>
        <ChordVisualizer chord={currentChord} />
        <ChordSelector chord={chords} onSelectorChord={setChordName}/>
        <PianoKeyboard />
      </div>
    );
  };
  
  export default App;