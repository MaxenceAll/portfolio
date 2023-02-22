import React, { useState, useEffect } from 'react';
import { FaPlay, FaStop } from "react-icons/fa";

const RadioPlayer = ({ videoId }) => {
    
  const [player, setPlayer] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    // Create a new YouTube player instance
    const newPlayer = new window.YT.Player('youtube-player', {
      height: '0',
      width: '0',
      videoId: videoId,
      playerVars: {
        autoplay: 1,
        controls: 1,
        showinfo: 0,
        loop: 1,
        mute: 0,
      },
      events: {
        onReady: () => {
          // Set the player state when it's ready
          setPlayer(newPlayer);
        },
        onStateChange: (event) => {
          // Set the isPlaying state based on the player state
          if (event.data === window.YT.PlayerState.PLAYING) {
            setIsPlaying(true);
          } else {
            setIsPlaying(false);
          }
        },
      },
    });

    return () => {
      // Destroy the player instance when the component unmounts
      newPlayer.destroy();
    };
  }, [videoId]);

  const handlePlay = () => {
    // Play the video and set the isPlaying state to true
    player.playVideo();
    setIsPlaying(true);
  };

  const handleStop = () => {
    // Stop the video and set the isPlaying state to false
    player.stopVideo();
    setIsPlaying(false);
  };

  return (
    <div>
      <div id="youtube-player"></div>
      {isPlaying ? (
        <div onClick={handleStop}>
          <FaStop />
        </div>
      ) : (
        <div onClick={handlePlay}>
          <FaPlay />
        </div>
      )}
    </div>
  );
};

export default RadioPlayer;
