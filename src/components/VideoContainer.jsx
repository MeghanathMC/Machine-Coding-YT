import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { YT_VIDEOS_API } from "../constants/api";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setVideoDetails } from "../store/videoSlice";
const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const [videoInfo, setVideoInfo] = useState({});

  const dispatch = useDispatch();
  const handleWatchVideo = (videoDetial) => {
    setVideoInfo(videoDetial);
    dispatch(setVideoDetails(videoDetial));
  };

  const getVideos = async () => {
    const res = await fetch(YT_VIDEOS_API);
    // console.log(res);
    const data = await res.json();
    // console.log(data.items);
    setVideos(data.items);
  };

  useEffect(() => {
    getVideos();
  }, []);
  return (
    <div className="min-h-screen p-4 gap-2 flex flex-wrap">
      {videos.map((video) => (
        <Link
          to={`/watch/?v=${video.id}`}
          onClick={() => handleWatchVideo(video)}
        >
          {" "}
          <VideoCard key={video.id} {...video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
