import React from "react"

function ChordSelector({chord, onSelectorChord}) {
    return (
        <select onChange={(e) => onSelectorChord}>
            {Object.keys(chord).map((chord) => (
                <option key={chord} value={chord}>
                    {chord}
                </option>
            ))}
        </select>
    )
}
export default ChordSelector