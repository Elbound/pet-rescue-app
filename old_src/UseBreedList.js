import { useEffect, useState } from "react"

const localChache = {}

export default function useBreedList(animal) {
  const [breedList, setBreedList] = useState([])
  const [status, setStatus] = useState("kosong")

  useEffect(() => {

    if(!animal){
        setBreedList([]);
    }else if(localChache[animal]){
        setBreedList(localChache[animal]);
    }else{
        requestBreedList();
    }
    
    async function requestBreedList() {
      setBreedList([])
      setStatus("Loading")

      const response = await fetch(
        `https://pets-v2.dev-apis.com/breeds?animal=${animal}`
      )

      const json = await response.json()

      localChache[animal] = json.breeds || []
      setBreedList(localChache[animal])
      setStatus("Loaded Successfully")
    }
  }, [animal])

  return [breedList, status]
}
