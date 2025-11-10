import { useContext, useEffect, useState } from "react"
import Pizza from "../src/Pizza"
import Cart from "../src/Cart"
import { CartContext } from "../src/context"
import { createLazyFileRoute } from "@tanstack/react-router"

export const Route = createLazyFileRoute("/order")({
  component: Order,
})

const kurs = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
})

function Order() {
  const [cart, setCart] = useContext(CartContext)

  const [pizzaType, setPizzaType] = useState("pepperoni")
  const [pizzaSize, setPizzaSize] = useState("M")
  const [pizzaTypes, setPizzaTypes] = useState([])
  const [loading, setLoading] = useState(true)
  //   const [cart, setCart] = useState([])

  let price, selectedPizza
  if (!loading) {
    selectedPizza = pizzaTypes.find((pizza) => pizzaType === pizza.id)
    price = kurs.format(
      selectedPizza.sizes ? selectedPizza.sizes[pizzaSize] : "",
    )
  }

  useEffect(() => {
    fetchPizzaTypes()
  }, [])

  async function fetchPizzaTypes() {
    // for testing purposes only.
    await new Promise((resolve) => setTimeout(resolve, 3000))

    const response = await fetch("/api/pizzas")
    const json = await response.json()
    setPizzaTypes(json)
    console.log(pizzaTypes)
    setLoading(false)
  }

  async function checkout() {
    setLoading(true)

    await fetch("/api/order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        cart,
      }),
    })

    setCart([])
    setLoading(false)
  }

  return (
    <div className="order">
      <h2>Create ORder</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          setCart([
            ...cart,
            { pizza: selectedPizza, size: pizzaSize, price: price },
          ])
        }}
      >
        <div>
          <div>
            <label htmlFor="pizza-type">Pizza Type</label>
            <select
              onChange={(e) => {
                setPizzaType(e.target.value)
              }}
              onBlur={(e) => {
                setPizzaType(e.target.value)
              }}
              name="pizza-type"
              value={pizzaType}
            >
              {pizzaTypes.map((pizza) => (
                <option value={pizza.id} key={pizza.id}>
                  {pizza.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="pizza-size">Pizza Size</label>
            <div>
              <span>
                <input
                  onChange={(e) => {
                    setPizzaSize(e.target.value)
                  }}
                  type="radio"
                  name="pizza-size"
                  id="pizza-s"
                  checked={pizzaSize === "S"}
                  value="S"
                />
                <label htmlFor="pizza-s">Small</label>
              </span>
              <span>
                <input
                  onChange={(e) => {
                    setPizzaSize(e.target.value)
                  }}
                  type="radio"
                  name="pizza-size"
                  id="pizza-m"
                  checked={pizzaSize === "M"}
                  value="M"
                />
                <label htmlFor="pizza-m">Medium</label>
              </span>
              <span>
                <input
                  onChange={(e) => {
                    setPizzaSize(e.target.value)
                  }}
                  type="radio"
                  name="pizza-size"
                  id="pizza-l"
                  checked={pizzaSize === "L"}
                  value="L"
                />
                <label htmlFor="pizza-l">Large</label>
              </span>
            </div>
          </div>
          <button type="submit">Tambahkan ke keranjang</button>
        </div>

        {loading ? (
          <h3>Loading ...</h3>
        ) : (
          <div className="order-pizza">
            <Pizza
              name={selectedPizza.name}
              description={selectedPizza.description}
              image={selectedPizza.image}
            />
            <p>{price}</p>
          </div>
        )}
      </form>

      {loading ? (
        <h2>Loading ...</h2>
      ) : (
        <Cart cart={cart} checkout={checkout} />
      )}
    </div>
  )
}
