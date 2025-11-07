import { useEffect, useState } from "react"
import Pet from "./Pet"
import useBreedList from "./UseBreedList"


const ANIMALS = ["cat", "dog", "bird", "rabbit", "raptile"]

const SearchParams = () => {
  // const location = "Kupang, NTT";
  const [location, setLocation] = useState("Kupang, NTT")
  const [animal, setAnimal] = useState("")
  const [breed, setBreed] = useState("")
  const [breeds,stat] = useBreedList(animal);

//   const [,stat] = useBreedList(animal);
  console.log(breeds)
  console.log(stat)

  const [pets, setPets] = useState([]);

  useEffect(()=>{
    requestPets();
  },[])

  useEffect(()=>{

  },[animal])

  async function requestPets(){
    const response = await fetch(`https://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`);
    const json = await response.json();
    console.log(json);
    setPets(json.pets);
  }

  //   console.log(ANIMALS);
  //   ANIMALS.map((ani)=>{
  //     console.log("ini ani: ", ani)
  //   })

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location:
          <input
            value={location}
            onChange={(e) => {
              setLocation(e.target.value)
            }}
            placeholder="Location"
            id="location"
          />
        </label>
        <label htmlFor="animal">
          Animal:
          <select
            id="animal"
            value={animal}
            onChange={(e) => {
              setAnimal(e.target.value)
              setBreed("")
            }}
            onBlur={(e) => {
              setAnimal(e.target.value)
              setBreed("")
            }}
          >
            <option />
            {ANIMALS.map((animal) => (
              <option key={animal} value={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="breed">
          Breed:
          <select
            disabled={!breeds.length}
            id="breed"
            value={breed}
            onChange={(e) => {setBreed(e.target.value)}}
            onBlur={(e) => {setBreed(e.target.value)}}
          >
            <option />
            {breeds.map((breed) => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>
        <button>Submit</button>
      </form>
      {pets.map((pet)=>(
        <Pet 
            name={pet.name}
            animal ={pet.animal}
            breed={pet.breed}
            key={pet.id}
        />
      ))}
    </div>
  )
}

export default SearchParams
