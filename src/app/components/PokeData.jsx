"use client"

import React, {useState, useEffect} from 'react'
import Link from 'next/link'
import Image from 'next/image'

function Pokedata() {

    const [poke, setPoke] = useState([]);
    const [loading, setLoading] = useState(false);

    console.log("Data from state", poke);

    useEffect(() => {
        setLoading(true);
        const fetchPokeData = async () => {
            try {
                const res = await fetch("https://pokeapi.co/api/v2/pokemon");
                const PokeData = await res.json();
                
                setPoke(PokeData.results)
            } catch(error) {
                console.log(error)
            }
            setLoading(false);
        }
        fetchPokeData();
    }, [])
    
  return (
    <div className="container text-center mx-auto px-4 py-8">
        {loading ? (
            <p>Loading...</p>
        ) : (
            <div className="grid grid-cols-5 gap-4">
                {poke.map((val, index) => (
                    <Link key={val.name} href={`/pokeinfo/[id]`} as={`/pokeinfo/${index + 1}`} >
                      <div key={index} className="flex justify-center items-center shadow-md transition cursor-pointer hover:shadow-lg m-3 rounded-md">
                        <div className="p-4">
                            <h3>{val.name}</h3>
                            <Image src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index + 1}.png`} width={100} height={100} alt={val.name} />
                        </div>
                      </div>
                    </Link>
                ))}
            </div>      
        )}
    </div>
  )
}

export default Pokedata