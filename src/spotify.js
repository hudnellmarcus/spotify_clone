//https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#

// This link will direct user to Spotify login
export const authEndpoint = "https://accounts.spotify.com/authorize"; 
// This link will redirect to homepage once logged in 
const redirectUri = "http://localhost:3000";
const clientId = "8b74499ba9074d93a5499d170996ecc8";

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];

// pulling the access token from the URL 
export const getTokenFromUrl = () => {
    //navigates to hashtag in URL
    return window.location.hash
    .substring(1)
    .split('&') //don't want anything after &
    .reduce((initial, item) => {
        // #accessToken=mysupersecretkey&name=marcus
        let parts = item.split('=')
        initial[parts[0]] = decodeURIComponent(parts[1])

        return initial;
    }, {});

}


export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;
//ASCII sign for space %20