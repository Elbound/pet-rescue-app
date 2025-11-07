import { createRoot } from "react-dom/client"

const App = () => {
  return (
    <div>
      <h1>Pizza Hut Ristorante</h1>
      {/* component pizza here */}
      {/* component pizza here */}
      {/* component pizza here */}
    </div>
  )
}

const container = document.getElementById("root")
const root = createRoot(container)
root.render(<App />)
