import { createRoot } from "react-dom/client"

import Pizza from "./Pizza"
// import order from "./routes/order.lazy"
import PizzaOfTheDay from "./PizzaOfTheDay"
import Header from "./Header"
// import { useState } from "react"
import { CartContext } from "./context"

import { RouterProvider, createRouter } from "@tanstack/react-router"
import { routeTree } from "./routeTree.gen"
import { StrictMode } from "react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

const router = createRouter({ routeTree })

//kyk useContext
//bikin instance queryClient supaya bisa pake dalam provider
const queryClient = new QueryClient()

const App = () => {
  return (
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </StrictMode>
  )
}

const container = document.getElementById("root")
const root = createRoot(container)
root.render(<App />)
