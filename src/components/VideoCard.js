import React from "react";

const VideoCard = ({ video }) => {
  if (!video) return null;

  return (
    <div className="flex flex-col w-full cursor-pointer hover:scale-105 transition-all duration-200 shadow-md hover:shadow-xl rounded-lg overflow-hidden">
      <div className="relative w-full pb-[56.25%] overflow-hidden rounded-lg bg-gray-200">
        <img
          src={video.snippet.thumbnails.medium?.url || video.snippet.thumbnails.default.url}
          alt={video.snippet.title}
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      </div>
      <div className="flex gap-2 mt-2">
        <div className="flex-1 min-w-0">
          <h3 className="text-xs font-medium text-gray-900 line-clamp-2 mb-1">
            {video.snippet.title}
          </h3>
          <p className="text-[10px] text-gray-600 mb-0.5">
            {video.snippet.channelTitle}
          </p>
          <div className="text-[10px] text-gray-500">
            {video.statistics?.viewCount 
              ? `${(parseInt(video.statistics.viewCount) / 1000000).toFixed(1)}M views` 
              : ''} • {new Date(video.snippet.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
