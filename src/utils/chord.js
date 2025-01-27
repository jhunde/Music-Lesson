// import { resolveConfig } from 'vite';
import chords from '../data/chords.json'

/*
export const fetchChords = async () => {
    const response = await fetch(chords)
    
    if(!response.ok){
        throw new Error(`HTRP error! status: ${response.status}`);
    }


    return await response.json();
};
*/

export const fetchChords = async () => {
    return chords
}