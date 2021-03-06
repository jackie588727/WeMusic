import {
    SONG_CHANGE_PLAYING,
    SONG_PLAYER_STATUS,
    SONG_CHANGE_PLAY_MODE,
    SONG_PLAYLIST_CHANGE,
    SONG_PLAY_MODE_LOOP
} from '../constants/song';


/* play mode:
 loop, repeat, shuffle,
 */
const initialState = {
    autoPlay: false,
    songPlaying: '',
    isPlaying: false,
    playMode: SONG_PLAY_MODE_LOOP,
    songList: [
        {
            id: 'adele_hello',
            file: 'Adele - Hello/song.mp3',
            cover: 'Adele - Hello/cover.png',
            meta: '',
        },
        {
            id: 'apink_nonono',
            file: 'MV Apink(에이핑크)NoNoNo/song.mp3',
            cover: 'MV Apink(에이핑크)NoNoNo/cover.jpg',
            meta: '',
        },
        {
            id: 'apink_mymy',
            file: 'MV Apink(에이핑크)My My/song.mp3',
            cover: 'MV Apink(에이핑크)My My/cover.jpg',
            meta: '',
        }
    ],
    playList: []
};

const song = (state = initialState, action) => {
    switch (action.type) {
        case SONG_CHANGE_PLAYING:
            return Object.assign({}, state, {
                songPlaying: action.id
            });
        case SONG_PLAYER_STATUS:
            return Object.assign({}, state, {
                isPlaying: action.status
            });
        case SONG_CHANGE_PLAY_MODE:
            return Object.assign({}, state, {
                playMode: action.mode
            });
        case SONG_PLAYLIST_CHANGE:
            return Object.assign({}, state, {
                playList: action.list
            });
        default:
            return state;
    }
};

export default song;