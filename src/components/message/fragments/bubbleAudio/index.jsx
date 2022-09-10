import React, { useState, useRef, useEffect } from "react";

import { convertCurrentTime } from "utils/helpers";
import AudioWaveSVG from "img/svg/AudioWave.svg";
import PauseSvg from "img/svg/Pause.svg";
import PlaySvg from "img/svg/Play.svg";

const BubbleAudio = ({ audio }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioProgress, setAudioProgress] = useState(0);
  const audioRef = useRef(null);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);

    if (audioRef.current.paused) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  };

  const audioEnded = () => {
    setIsPlaying(false);
    setAudioProgress(0);
  };

  const audioPlaying = () => {
    const progress =
      (audioRef.current.currentTime / audioRef.current.duration) * 100;
    setAudioProgress(progress);
  };

  useEffect(() => {
    if (audio) {
      audioRef.current.volume = "0.7";
      audioRef.current.addEventListener("ended", audioEnded);
      audioRef.current.addEventListener("timeupdate", audioPlaying);
    }
  }, []);

  return audio ? (
    <div className="message--audio">
      <audio ref={audioRef} src={audio} preload="auto"></audio>
      <div
        className="message--audio--progress"
        style={{ width: `${audioProgress}%` }}
      ></div>
      <div className="message--audio--info">
        <div className="message--audio--btn">
          <button onClick={(e) => togglePlay()}>
            {isPlaying ? (
              <img src={PauseSvg} alt="Pause Svg" />
            ) : (
              <img src={PlaySvg} alt="Play Svg" />
            )}
          </button>
        </div>

        <div className="message--audio--wave">
          <img src={AudioWaveSVG} alt="Audio wave" />
        </div>

        <div className="message--audio--time">
          {audioRef.current?.currentTime
            ? convertCurrentTime(audioRef.current.currentTime)
            : "00:00"}
        </div>
      </div>
    </div>
  ) : null;
};

export default BubbleAudio;
