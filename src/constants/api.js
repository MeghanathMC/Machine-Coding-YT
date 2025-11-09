// const YT_API_KEY = import.meta.env.YT_API_KEY;

const YT_API_KEY = "AIzaSyC8rDzQR0SwjZURajTt3fhbONyL4B3uY_w";
export const YT_VIDEOS_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${YT_API_KEY}`;
