"use client"

import { useState } from "react";

const Page = () => {
  
  //let count = 0;
  //const [count, setCount] = useState<number>(0)  //o primeiro item é o nome do state, o segundo é o método de definição de novo state. As vezes preciso tipar e as vezes não. 
  /*const handleClick = () => {
    setCount(count + 1)
  }*/

  const [showSecret, setShowSecret] = useState(false);

  const handleClick = () => {
    setShowSecret(!showSecret);
  }

  
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center text-3xl">
      
      <button onClick={handleClick} className="bg-blue-400 p-3 rounded-md">{showSecret ? 'esconder' : 'mostrar'}</button>
      {showSecret &&
      <div className="bg-orange-400 p-3 rounded-md mt-3">Área secreta</div>
      }

    </div>
  )
}

export default Page