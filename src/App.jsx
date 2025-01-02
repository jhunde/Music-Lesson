import { useState } from 'react'
import './index.css'
import PianoKeyboard from './components/PianoKeyboard'
import ChordVisualizer from './components/ChordVisualizer'

function App() {
    const [chord, setChord] = useState(["C4", "E4", "G4"])
    return (
        <div>
            <h2>Piano Tutor</h2>
            <ChordVisualizer chord={chord}/>
            <PianoKeyboard/>
        </div>
    );
};
export default App