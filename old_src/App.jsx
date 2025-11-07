// import React from "react"
import { createRoot } from "react-dom/client"
import Pet from "./Pet"
import SearchParams from "./SearchParams"


const App = () => {



  return(
    <div>
      <h1>Pet Rescue App</h1>
      <SearchParams />
      {/* <Pet name="Ica" animal="Pig" breed="Boar" />
      <Pet name="Bob" animal="Dog" breed="Border Collie" />
      <Pet name="Carla" animal="cat" breed="Jalanan" /> */}
    </div>
  )
}

const container = document.getElementById("root")
const root = createRoot(container)
root.render(<App />)
