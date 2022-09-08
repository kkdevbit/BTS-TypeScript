import React, { useState } from "react";

import "./App.css";
import List from "./components/list/List";
export type Singer = {
  id: number;
  name: string;
  band: string;
  born: number;
};

function App() {
  const singers: Singer[] = [
    { id: 1, name: "Steven Tyler", band: "Aerosmith", born: 1948 },
    { id: 2, name: "Karen Carpenter", band: "The Carpenters", born: 1950 },
    { id: 3, name: "Kurt Cobain", band: "Nirvana", born: 1967 },
    { id: 4, name: "Stevie Nicks", band: "Fleetwood Mac", born: 1948 },
    { id: 5, name: "Krishna", band: "Guitarist", born: 1993 },
  ];
  const [singerList, setSingerList] = useState<Singer[]>(singers);
  const [selectedSinger, setSelectedSinger] = useState<Singer>(singers[0]);

  return (
    <List
      singerList={singerList}
      selectedSinger={selectedSinger}
      setSelectedSinger={setSelectedSinger}
    />
  );
}

export default App;
