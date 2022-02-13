export const authEndpoint = "https://accounts.spotify.com/authorize";
const redirectUri = "http://localhost:3000/";
const clientId = "9e14d8ff187d49d2905eb06e1630bb85";

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state"
];
// http://localhost:3000/#access_token=BQCR2Qjxkrwxd5JLkJozWuQJStA1W50C8sP4U1RbaBa9idnYjJA96ZOQXomrGuv8B96wJMF9vjVnu_ThxUiTBhH835q8J5eMg17UXNSctMLjVRNd2hmNtGiI4hPuj986SvxzvyWTIr2wy8XCiH4mXbjQE1JRBSIm4xqUYzJrgr7YvT1BIEEp&token_type=Bearer&expires_in=3600
export const getTokenFromUrl = () => {
    return window.location.hash.substring(1)
        .split('&')
        .reduce((init, item) => {
            let parts = item.split("=");
            init[parts[0]] = decodeURIComponent(parts[1]);
            return init;
        }, {})
};
export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;