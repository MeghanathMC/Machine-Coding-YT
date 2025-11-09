import React from "react";

const VideoCard = () => {
  return (
    <div className="w-90 h-fit shadow-lg border border-gray-200 rounded-xl hover:bg-gray-200">
      <img
        src="https://i.ytimg.com/vi/TJWLLrnH5gA/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAutjpco_cD7twTmdHn830NLF2qqw"
        alt="thubnail"
        className="rounded-xl"
      />
      <div className="flex justify-between">
        <div className=" m-2">
          <img
            src="https://yt3.ggpht.com/63BY-qOZNyAd-Tssfm0AfMEngVlRp16j4-4D95Qkjdtw90DxqVVaNiY5m2cFDqYj6xb7meUBVA=s68-c-k-c0x00ffffff-no-rj"
            alt="channel-name"
            className="rounded-full h-10 w-14 object-cover"
          />
        </div>
        <div className="m-2">
          <h2>Magadheera Action scene | 4K |Ram Charan Fight Scene</h2>
          <p>Geetha Arts</p>
          <p className="text-sm"> 10M views • 1 Year Ago</p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
