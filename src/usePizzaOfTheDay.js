//custom hooks ny
import { useEffect, useState } from "react"

export const usePizzaOfTheDay = ()=>{
    const [pizzaOfTheDay, setPizzaOfTheDay] = useState(null);

    useEffect(()=>{
        async function fetchPizzaOfTheDay(){
            const res = await fetch("/api/pizza-of-the-day");
            const pizza = await res.json();
            setPizzaOfTheDay(pizza)
        }
        
        fetchPizzaOfTheDay();
    },[])

    return pizzaOfTheDay;
}

