// src/components/atoms/CustomVideoPlayer/CustomVideoPlayer.component.tsx
"use client";

import type React from "react";
import { useState, useRef } from "react";
import { Icon } from "@/src/components/atoms/Icon";
import iconsObject from "@/src/assets/icons/iconsObject";
import "./CustomVideoPlayer.style.css";
import { CustomVideoPlayerProps } from "./CustomVideoPlayer.types";
import { Button } from "../Button";

export const CustomVideoPlayer: React.FC<CustomVideoPlayerProps> = ({
  videoSrc,
  posterSrc,
  className = "",
  onPlay,
  onPause,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
        onPause?.();
      } else {
        videoRef.current.play();
        setIsPlaying(true);
        onPlay?.();
      }
    }
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
  };

  return (
    <div className={`custom-video-player ${className}`}>
      <video
        ref={videoRef}
        className="custom-video-player__video"
        poster={posterSrc}
        controls={false}
        onEnded={handleVideoEnd}
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {!isPlaying && (
        <Button
          className="custom-video-player__play-button"
          onClick={handlePlay}
          aria-label="Play video"
        >
          <Icon
            name={iconsObject.play}
            className="custom-video-player__play-icon"
          />
        </Button>
      )}

      {isPlaying && (
        <Button
          className="custom-video-player__pause-overlay"
          onClick={handlePlay}
          aria-label="Pause video"
        >
          <div className="custom-video-player__pause-button">
            <Icon
              name={iconsObject.pause}
              className="custom-video-player__pause-icon"
            />
          </div>
        </Button>
      )}
    </div>
  );
};
