import { createRoot } from "react-dom/client"
import Pizza from "./Pizza"
import Order from "./Order"
import PizzaOfTheDay from "./PizzaOfTheDay"
import Header from "./Header"
import { useState } from "react"
import { CartContext } from "./context"


const App = () => {
    const cartHook = useState([])
  return (
    <CartContext.Provider value={cartHook}>
        <div>
        <Header/>
        {/* <h1>Pizza Hut Ristorante</h1> */}
        <Order />
        <PizzaOfTheDay/>
        </div>
    </CartContext.Provider>
  )
}

const container = document.getElementById("root")
const root = createRoot(container)
root.render(<App />)
