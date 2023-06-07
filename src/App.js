import React, { useEffect, useState } from "react";
import Login from "./Pages/Login";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Pages/Player";

const spotify = new SpotifyWebApi();

function App() {
  const [token, setToken] = useState(null);

  // Run code based on a given condition
  useEffect(() => {
    const hash = getTokenFromUrl();
    //remove access token from being visible in URL once authenticated 
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      setToken(_token);
      // connect spotify to React 
      spotify.setAccessToken(_token);

      spotify.getMe()
      .then((user => {
        console.log('🤗', user);
      }))
    }
    console.log('I HAVE A TOKEN >>>"', token);
  }, [])
  // dependency array: empty, will only run once, if there is a variable inside it will run when the ////variable changes as well
  
  
  return (
    <div className="App">
      {token ? <Player /> : <Login />}

    </div>
  );
}

export default App;
