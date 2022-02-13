import { useEffect, useState } from 'react';
import './App.css';
import Login from './components/Login';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './components/Player';
import { useStateValue } from './components/StateProvider';

const spotify = new SpotifyWebApi();

function App() {
  const [{ user, token }, dispatch] = useStateValue();

  useEffect(() => {
    let _token = window.localStorage.getItem('spotify-token');
    console.log(_token);
    if (!_token) {
      const hash = getTokenFromUrl();
      window.location.hash = "";
      _token = hash.access_token;
    }

    if (_token) {
      dispatch({
        type: 'SET_TOKEN',
        token: _token
      })
      spotify.setAccessToken(_token);
      spotify.getMe().then(_user => {
        dispatch({
          type: 'SET_USER',
          user: _user
        });
      });
      spotify.getUserPlaylists().then(playlists => {
        console.log(playlists);
        dispatch({
          type: 'SET_PLAYLISTS',
          playlists: playlists.items
        });
      });
      spotify.getPlaylist("0x0xLmU65jUMZx321WHKCg").then(response => {
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response
        })
      })
    }
  }, []);

  return (
    <div className="app">
      {token ? (
        <Player spotify={spotify} />
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
