import React, { useEffect, useState } from "react";
import axios from "axios";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [ characters, setCharacters ] = useState([]);
  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then( res => {
        setCharacters(res.data.results);
        console.log("axios", res.data.results);
      })
      .catch(err => console.log(err.response));
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);
  console.log("chars", characters);
  return (
    <section className="character-list">
      {characters.map(char => {
        return (
          <h2 key={char.id}>{char.name}</h2>
        );
      })}
    </section>
  );
}
