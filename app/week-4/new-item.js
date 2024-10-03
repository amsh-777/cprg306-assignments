'use client'

import { useState } from "react"

export default function NewItem(){
    const [count, setCount] = useState(1);

    const increment = () =>{
        if (count <20){
        setCount(count + 1);
        }
    }

    const decrement = () =>{
        if (count > 1){
            setCount(count - 1);
        }
    }
    let btnstyle = "bg-orange-500 text-white text-2xl w-12 h-12 rounded-full flex items-center justify-center disabled:bg-gray-300";
    return(
        <div className="bg-white p-4 rounded-lg shadow-lg flex items-center justify-center space-x-4">
            <h2 className="text-3xl text-gray-800">{count}</h2>
            <button  className={btnstyle}
            onClick={increment}
             disabled={count ==20}>+</button>
            <button className={btnstyle}
             onClick={decrement} 
             disabled={count ==1}>-</button>
        </div>

    );
}