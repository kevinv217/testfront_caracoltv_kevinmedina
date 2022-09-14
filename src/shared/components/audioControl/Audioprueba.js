import React, { useState, useEffect } from "react";
// a custom hook to handle audio

import dataTracks from "../../data/test.json";

const audioUrl = dataTracks.audioPlayer[0].audioUrl;
const audioTitle = dataTracks.audioPlayer[0].audioTitle;
const audioDuration = dataTracks.audioPlayer[0].audioDuration;

const AudioPlayer = () => {
  //   const [playing, togglePlayback] = useAudio(audioUrl);
  const [audio] = useState(new Audio(audioUrl));
  const [playing, setPlaying] = useState(false);
  const [duracion, setDuracion] = useState("00");
  const [currentTime, setCurrentTime] = useState("00");

  const togglePlayback = () => setPlaying(!playing);

  //   let minutes = Math.floor(audio.duration / 60);
  //   let seconds = Math.floor(audio.currentTime - minutes * 60);

  useEffect(() => {
    if (playing) {
      audio.play();
      setDuracion(audio.duration.toFixed());
      setCurrentTime(audio.currentTime.toFixed());
    } else {
      audio.pause();
    }
  }, [playing]);

  useEffect(() => {
    audio.addEventListener("ended", () => setPlaying(false));
    return () => {
      audio.removeEventListener("ended", () => setPlaying(false));
    };
  }, []);

  const iconPlay = "ri-play-fill";
  const iconPause = "ri-pause-fill";

  console.log(audio.duration);

  return (
    <>
      <div className="audio d-flex">
        <button onClick={togglePlayback} className="me-2">
          <i className={playing ? iconPause : iconPlay} />
        </button>
        <div className="">
          <h3 className="m-0">Escuchar audio</h3>
          <section className="">
            <span>{`${audioTitle} - ${duracion} : ${currentTime}`}</span>
          </section>
        </div>
      </div>
    </>
  );
};

export default AudioPlayer;
