
import querystring from 'querystring';
 
const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;
 
const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');

const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

const TOP_TRACKS_ENDPOINT = `https://api.spotify.com/v1/me/top/tracks`;
const CURRENT_TRACK_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
const RECENT_TRACKS_ENDPOINT = `https://api.spotify.com/v1/me/player/recently-played`;
 
const getAccessToken = async () => {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: querystring.stringify({
      grant_type: 'refresh_token',
      refresh_token,
    }),
  });
 
  return response.json();
};
 
export const getRecentTracks = async () => {

  const { access_token } = await getAccessToken();
  // const url = `${RECENT_TRACKS_ENDPOINT}?limit=50&after=1690495200000`
  const url = `${RECENT_TRACKS_ENDPOINT}?limit=1`
  
  try {
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    if (!response.ok) {
      throw new Error(`Error! status: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (err) {
    console.log(err);
  }

}

export const getCurrentTrack = async () => {

  const { access_token } = await getAccessToken();
  const url = `${CURRENT_TRACK_ENDPOINT}`
  
  try {
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    if (!response.ok) {
      throw new Error(`Error! status: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (err) {
    console.log(err);
  }

}

export const getTopTracks = async () => {
  const { access_token } = await getAccessToken();
 
  return fetch(TOP_TRACKS_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};
