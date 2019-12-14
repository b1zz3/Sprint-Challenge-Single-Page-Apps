import React from "react";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList";
import CharacaterCard from "./components/CharacterCard";
import LocationsList from "./components/LocationsList";
import { Route } from "react-router-dom";
export default function App() {
  return (
    <main>
      <Header />
      <div>
        <Route
          path="/character"
          render={CharacaterCard}
        />
        <CharacterList />
        {/* < LocationsList /> */}
      </div>
    </main>
  );
}
