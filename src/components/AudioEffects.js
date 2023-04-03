import React from "react";

const AudioEffects = () => {
  return (
    <>
      <h1 className="text-3xl text-white font-bold">Audio - Effects</h1>
      <ul className="flex gap-24 justify-center">
        <li>
          <button className="audio-effects-1 hover:-translate-y-1 hover:scale-105 w-36 h-36 rounded-xl shadow-2xl">
            <p className="text-white text-lg ">Fire</p>
          </button>
        </li>
        <li>
          <button className="audio-effects-2 hover:-translate-y-1 hover:scale-105 w-36 h-36 rounded-xl shadow-2xl">
            <p className="text-white text-lg ">Forest</p>
          </button>
        </li>
        <li>
          <button className="audio-effects-3 hover:-translate-y-1 hover:scale-105 w-36 h-36 rounded-xl shadow-2xl">
            <p className="text-white text-lg ">Ocean</p>
          </button>
        </li>
        <li>
          <button className="audio-effects-4 hover:-translate-y-1 hover:scale-105 w-36 h-36 rounded-xl shadow-2xl">
            <p className="text-white text-lg ">Rain</p>
          </button>
        </li>
        <li>
          <button className="audio-effects-5 hover:-translate-y-1 hover:scale-105 w-36 h-36 rounded-xl shadow-2xl">
            <p className="text-white text-lg ">Cafe</p>
          </button>
        </li>
      </ul>
    </>
  );
};

export default AudioEffects;
