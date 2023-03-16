import React, { useRef, useState } from "react";
import PauseBtn from "./PauseBtn";
import PlayBtn from "./PlayBtn";
import SongList from "./SongList";

function MusicPlayer() {
  const [songs, setSongs] = useState([
    { id: 1, title: "Song1", artist: "Artist 1", url: "/Songs/Song1.mp3" },
    { id: 2, title: "Song2", artist: "Artist 2", url: "/Songs/Song2.mp3" }
  ]);

  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const audioElement = useRef(null);

  function handlePlay() {
    setIsPlaying(true);
    audioElement.current.play();
  }
  function handlePause() {
    setIsPlaying(false);
    audioElement.current.pause();
  }

  return (
    <div>
      <h1>Music Player</h1>
      <SongList
        songs={songs}
        setCurrentSong={setCurrentSong}
        setIsPlaying={setIsPlaying}
      />
      {currentSong && (
        <div>
          <audio src={currentSong.url} ref={audioElement}></audio>
          <h2>{currentSong.title}</h2>
          <h3>{currentSong.artist}</h3>
          {isPlaying ? (
            <PauseBtn handlePause={handlePause} />
          ) : (
            <PlayBtn handlePlay={handlePlay} />
          )}
        </div>
      )}
    </div>
  );
}
export default MusicPlayer;
