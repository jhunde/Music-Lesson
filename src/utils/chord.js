import chords from '../../public/chords.json'

export const fetchCords = async () => {
    const response = await fetch(chords)
    return await response.json();
};

