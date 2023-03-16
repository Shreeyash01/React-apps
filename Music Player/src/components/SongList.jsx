import React from "react";

function SongList({ songs, setCurrentSong, setIsPlaying }) {
  function handleSongClick(song) {
    setCurrentSong(song);
    setIsPlaying(false);
  }
  return (
    <ul>
      {songs.map((songs) => (
        <li key={songs.id} onClick={() => handleSongClick(songs)}>
          {songs.title} - {songs.artist}
        </li>
      ))}
    </ul>
  );
}
export default SongList;
