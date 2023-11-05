"use client"

import { useState } from "react"
import { Person } from "./Person"

const Page = () => {

  const [fullName, setFullName] = useState<Person>({name: " ", lastName: " "})

  const handleBtnClear = () => {
    setFullName({...fullName, name: " "})
  }



  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center text-3xl">
        <input
        type="text"
        placeholder="Nome"
        className="border border-black p-3 text-2xl text-black rounded-md mb-3"
        value={fullName.name}
        // onChange={e => setFullName({ name: e.target.value, lastName: fullName.lastName })}
        onChange={e => setFullName({...fullName, name: e.target.value})} // ... é clone
        />
        <input
        type="text"
        placeholder="Sobrenome"
        className="border border-black p-3 text-2xl text-black rounded-md mb-3"
        value={fullName.lastName}
        // onChange={e => setFullName({ name: fullName.name, lastName: e.target.value })}
        onChange={e => setFullName({...fullName, lastName: e.target.value})}
        />

        <p>Meu nome completo é: {fullName.name} {fullName.lastName}</p>
        <button onClick={handleBtnClear} className="bg-blue-400 rounded-md">Limpar o nome</button>
    </div>
  )

}

export default Page