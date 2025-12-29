import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_LINKS } from "../utils/constant";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VidoeContainer = () => {
  const [videos, setVideos] = useState([]);
  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_LINKS);
    const json = await data.json();
    setVideos(json.items);
  };

  useEffect(() => {
    getVideos();
  }, []);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {videos.map((video) => (
        <Link to={`/watchPage?v=${video.id}`}>
          <VideoCard key={video.id} video={video} />
        </Link>
      ))}
    </div>
  );
};

export default VidoeContainer;
