import { useLoaderData } from "react-router-dom"
import CoffeeCard from "./components/CoffeeCard"
import { useState } from "react";

function App() {

  const loadedCoffees = useLoaderData();

  const [coffees, setCoffees] = useState(loadedCoffees)

  return (
    <div>
      <h1 className="text-5xl text-center font-extrabold"> Coffees:{coffees.length}</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 m-8">

        {
          coffees.map(coffee => <CoffeeCard
            key={coffee._id}
            coffee={coffee}
            coffees={coffees}
            setCoffees={setCoffees}
          ></CoffeeCard>)
        }
      </div>

    </div>
  )
}

export default App
