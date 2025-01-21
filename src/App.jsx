import { useEffect, useState } from 'react'
import './index.css'
import PianoKeyboard from './components/PianoKeyboard'
import ChordVisualizer from './components/ChordVisualizer'
import { fetchCords } from './utils/chord'

function App() {
    const [chord, setChord] = useState(["C4", "E4", "G4"])
    const [currentChord, setCurrentChord] = useState([]);
    const [chordName, setChordName] = useState("");

    useEffect = (() => {
        const loadChord = async () => {
            const chord = await fetchCords(); 
            setChord(chord)
        };
        loadChord();
    },[])

    const handleFetchChord = () => {
        const notes = chord[chordName] || [];
        setChordName(notes);
    }

    return (
        <div>
            <h2>Piano Tutor</h2>
            <input
                type="text"
                placeholder='Enter chord'
                value={chordName}
                onClick={(e) => setChordName(e.target.value)}
            />

            <button onClick={handleFetchChord}>Get Chord</button>

            <ChordVisualizer chord={chord}/>
            <PianoKeyboard/>
        </div>
    );
};
export default App