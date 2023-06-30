import React, { useEffect, useState } from "react";
import Login from "./Pages/Login";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Pages/Player";
import { useDataLayerValue } from "./DataLayer";

const spotify = new SpotifyWebApi();

function App() {
  const [{ user, token }, dispatch] = useDataLayerValue();

  // Run code based on a given condition
  useEffect(() => {
    const hash = getTokenFromUrl();
    //remove access token from being visible in URL once authenticated 
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {

      dispatch({
        type: "SET_TOKEN",
        token: _token
      })
      // connect spotify to React 
      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: 'SET_PLAYLISTS',
          playlists: playlists,
        })
       });
    }
  }, []);

  // dependency array: empty, will only run once, if there is a variable inside it will run when the ////variable changes as well


  return (
    <div className="App">
      {token ? <Player spotify={spotify} /> : <Login />}

    </div>
  );
}

export default App;
