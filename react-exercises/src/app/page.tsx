"use client"

import { useState } from "react";

type ToDoList = {
  label: string;
  checked: boolean;
}

const Page = () => {
  const [inputItem, setInputItem] = useState('');
  const [list, setList] = useState<ToDoList[]>([{ label: 'Fazer dever de casa', checked: false }]);

  const handleAddButton = () => {
    if (inputItem.trim() === '') return;

    setList([...list, { label: inputItem, checked: false }]);
    setInputItem('');
  }

  const deleteItem = (index: number) => {
    setList(list.filter((item, key) => key !== index));
  }

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center text-2xl">
      <h1 className="text-4xl mt-5">Lista de Tarefas</h1>

      <div className="flex w-full max-w-lg my-3 p-4 rounded-md bg-gray-700 border-2 border-gray-500">
        <input
          type="text"
          placeholder="O que deseja fazer?"
          className="flex-1 border border-black p-3 text-2xl text-black rounded-md mr-3"
          value={inputItem}
          onChange={(e) => setInputItem(e.target.value)}
        />
        <button onClick={handleAddButton} className="bg-gray-200 rounded-md p-2">Adicionar</button>
      </div>

      <ul className="w-full max-w-lg list-disc pl-5">
        <p className="my-4">{list.length} itens na lista</p>
        {list.map((item, index) => (
          <li key={index}>
            {item.label}
            <button onClick={() => deleteItem(index)} className="hover:underline">[ deletar ]</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Page;


// 1) Criei useState de Lista
// 2) Utilizei o método map pra exibir os itens do array de lista
// 3) Criei o useState para input. onChange atualiza setInputItem
// 4) No botão de adicioanr, onClick lida com a adição do item na lista. setList é atualizada com o valor de inputItem.
// 5) setInputItem é zerado para apagar value após adicionar item na lista.
// 6) Adicionar função de deletar item, o qual recebe o parâmetro index;
// 7) Utilizei o método filter para filtrar todos que são diferentes de index e criar novo array para o setList. 



