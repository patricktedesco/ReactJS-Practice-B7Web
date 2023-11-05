"use client"

import { useState } from "react";

const Page = () => {
  
  const [count, setCount] = useState(0)

  const handleBtnClick = () => {
    setCount(10)
    setCount(20) //o valor que vai permanecer é o último
  }

  
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center text-3xl">
        <p>{count}</p>
        <button onClick={handleBtnClick} className="">+2</button>

    </div>
  )
}

export default Page