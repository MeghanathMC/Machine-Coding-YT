import React from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { formatLikes } from "../utils/util";

const WatchContainer = () => {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");
  //   console.log(videoId);

  const videoDetails = useSelector((store) => store.video.videoDetails);
  console.log(videoDetails);

  const { snippet, statistics } = videoDetails || {};

  const {
    channelTitle,
    description,
    publishedAt,
    thumbnails,
    tags,
    title,
    localized,
  } = snippet || {} || "";

  const { viewCount, commentCount, favoriteCount, likeCount } =
    statistics || null || "";
  return (
    <div className="bg-amber-300 w-full p-4 border-gray-200 flex flex-col">
      <iframe
        width="720"
        height="420"
        className="rounded-lg shadow-md p-4"
        src={`https://www.youtube.com/embed/${videoId}?si=VxVHgjgOh_PRlN2c`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>

      <div className="bg-red-400 w-[720px] p-4">
        <h1 className="font-bold text-xl">{localized?.title}</h1>
        <div className="flex items-center py-4 mr-4">
          <div>
            <img
              src="./logo.svg"
              alt="channel-name"
              className="rounded-full h-8 w-12"
            />
          </div>
          <div>{channelTitle}</div>
          <div>
            <button className="rounded-full px-4 py-2 bg-white">
              Subscribe
            </button>
          </div>
          <div className="flex gap-4 items-center">
            <div>
              <button className="rounded-full bg-white px-4 py-2 flex">
                <img src="../like.svg" />
                <p className="text-md">
                  {Number(likeCount / 1000).toLocaleString()}
                  {"K"}
                </p>
              </button>
            </div>
            <div>
              <button className="rounded-full bg-white px-4 py-2">
                <img src="../dislike.svg" alt="" />
              </button>
            </div>
            <div>
              <button className="rounded-full bg-white px-4 py-2 flex">
                <img src="../comment.svg" />
                <p> {commentCount} </p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WatchContainer;
