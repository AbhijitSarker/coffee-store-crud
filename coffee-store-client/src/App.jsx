import { useLoaderData } from "react-router-dom"
import CoffeeCard from "./components/CoffeeCard"

function App() {

  const coffees = useLoaderData()

  return (
    <div>
      <h1 className="text-5xl text-center font-extrabold"> Coffees:{coffees.length}</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 m-8">

        {
          coffees.map(coffee => <CoffeeCard
            key={coffee._id}
            coffee={coffee}
          ></CoffeeCard>)
        }
      </div>

    </div>
  )
}

export default App
