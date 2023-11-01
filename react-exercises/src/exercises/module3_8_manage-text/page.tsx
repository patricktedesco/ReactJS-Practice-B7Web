"use client"

import { useState } from "react";

const Page = () => {
  
 const [nameInput, setNameInput] = useState('')

 const handleInputChange = (event: any) => {
 setNameInput(event.target.value);
 }

 const handleButtonClick = () => {
  alert(nameInput);
 }
  
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center text-3xl">
      <input type="text" className="border border-black p-3 text-xl text-black rounded" placeholder="Digite o seu nome" value={nameInput} onChange={handleInputChange}/>
      <p>Seu nome é: {nameInput} </p>
      <button onClick={handleButtonClick}>Mostrar valor do campo</button>
      

    </div>
  )
}

export default Page