import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import axios from "axios";
const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  const getVideos = async () => {
    const res = await axios.get(
      "https://www.googleapis.com/youtube/v3/videos",
      {
        params: {
          part: "snippet,statistics",
          chart: "mostPopular",
          maxResults: 30,
          regionCode: "US",
          key: import.meta.env.YT_API_KEY,
        },
      }
    );
    console.log(res);

    // const data = await res.json();
    // setVideos(data);
  };

  useEffect(() => {
    getVideos();
  }, []);
  return (
    <div className="min-h-screen p-4 gap-4 flex flex-wrap">
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      {/* {videos.map((video) => (
        <div key={video.id} className="w-full sm:w-1/2 lg:w-1/3">
          <VideoCard />
        </div>
      ))} */}
    </div>
  );
};

export default VideoContainer;
