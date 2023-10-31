"use client"

import { useState } from "react";

const Page = () => {
  
  //let count = 0;
  const [count, setCount] = useState<number>(0)  //o primeiro item é o nome do state, o segundo é o método de definição de novo state. As vezes preciso tipar e as vezes não. 

  const handleClick = () => {
    setCount(count + 1)
  }

  
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center text-3xl">
      <p>{count}</p>
      <button onClick={handleClick} className="bg-blue-400 p-3">+1</button>

    </div>
  )
}

export default Page
