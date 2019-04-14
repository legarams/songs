import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        {title: 'Please Me', duration: '4:05'},
        {title: 'Touch it', duration: '2:59'},
        {title: 'Pleasure', duration: '3:45'},
        {title: 'Make Me', duration: '5:55'}  
    ]
};

const selectedSongReducer = (selectedSong=null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }
    
    return selectedSong;
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});