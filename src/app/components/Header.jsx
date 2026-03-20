"use client"

import React, {useState, useEffect} from 'react'
import { useRouter } from 'next/navigation'

function Header() {

    const router = useRouter();

    const [pokeName, setPokeName] = useState("");

    console.log("Poke Name", pokeName);

    const handleInput = (e) => {
        setPokeName(e.target.value);
    }

    const handleForm = (e) => {
        e.preventDefault();

        // console.log("Search String", pokeName)
        router.push(`/pokesearch/${pokeName}`)
    }

  return (
    <header className="bg-gradient-to-r from-red-500 via-yellow-500 to-pink-500 h-[300px] flex justify-center items-center">
        <div className="text-center">
            <h1 className="text-white text-5xl">NextJS Pokemon Finder App</h1>
            <p className="text-white text-2xl">Find your favorite pokemon</p>
            <form action="" className="flex mt-2" onSubmit={handleForm}>
                <input type="text" className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-700 shadow-md" placeholder="Pokemon Name..." onChange={handleInput} />
                <button className="inline-flex items-center mx-2 px-4 py-2 rounded-md bg-green-500 text-white shadow-md hover:bg-green-600 transition-colors" type="submit">Search</button>
            </form>
        </div>
    </header>
  )
}

export default Header