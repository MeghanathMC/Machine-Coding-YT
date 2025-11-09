import React from "react";

const VideoCard = ({ snippet, statistics, contentDetails }) => {
  //   //   const { url } = thumbnails;
  const { title, channelTitle, thumbnails, publishedAt } = snippet || {};

  const { url, height, width } = thumbnails?.standard || {};
  const { viewCount } = statistics || {};
  const { duration } = contentDetails || {};
  return (
    <div className="w-90 shadow-lg border border-gray-200 rounded-xl hover:bg-gray-200">
      <img src={url} alt="thubnail" className="rounded-xl" />
      <div className="flex">
        <div className=" m-2">
          <img
            src="https://yt3.ggpht.com/63BY-qOZNyAd-Tssfm0AfMEngVlRp16j4-4D95Qkjdtw90DxqVVaNiY5m2cFDqYj6xb7meUBVA=s68-c-k-c0x00ffffff-no-rj"
            alt={channelTitle}
            className="rounded-full h-10 w-12 object-cover"
          />
        </div>
        <div className="m-2">
          <h2>{title}</h2>
          <p>{channelTitle}</p>
          <p className="text-sm">
            {" "}
            {Number(viewCount).toLocaleString()} views •{publishedAt}
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
