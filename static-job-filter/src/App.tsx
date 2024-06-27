import {useApp} from "./contexts/AppContext"
import data from "../data.json"
import React from "react";
import Background from "./components/Background";
import Body from "./components/Body";
import Card from "./components/Card";

const App:React.FC = () =>{
  return (
    <>
      <Background />
      <Body>
        <Card/>
      </Body>
    </>
  )
}

export default App
