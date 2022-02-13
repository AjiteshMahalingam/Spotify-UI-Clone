export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    currentPlaylist: null
    // token: 'BQA8jvlaFzvZ-bdJaRoP2gdtAX4dyvVVknB2sSYy5ZA_TtV7AnivsdwxjP0ap3YmMOSjD09em5odirhDqZAi-ERoRrWpPTMgP_oaVDp3kboSPht2h3zilnA4I2EqTVr86JebS9Kw0BiykRqKdLOyFSnsR24V8pikOojkIddJ5P3b60xulofE'
};

const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            };

        case 'SET_TOKEN':
            window.localStorage.setItem('spotify-token', action.token);
            return {
                ...state,
                token: action.token
            };

        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists
            };
        case 'SET_PLAYLIST_ITEMS':
            return {
                ...state,
                currentPlaylist: action.playlist
            };
        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                currentPlaylist: action.discover_weekly
            };
        default:
            return state;
    }
}

export default reducer;