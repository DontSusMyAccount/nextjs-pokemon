"use client"

import React, {useState, useEffect} from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'

function PokeInfo() {

    const params = useParams();
    console.log(params);

    const [poke, setPoke] = useState([]);
    const [loading, setLoading] = useState(false);

    console.log("Data from state", poke);

    useEffect(() => {
        setLoading(true);
        const fetchPokeDetails = async () => {
            try {
                const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`);
                const PokeData = await res.json();

                setPoke(PokeData);
            } catch(error) {
                console.log(error)
            }
            setLoading(false);
        }
        fetchPokeDetails();
    }, [])

  return (
    <div className="p-24">
        <Link href="/" className="bg-blue-500 text-white p-3 rounded-md">Back to Home</Link>
        <div className="flex justify-center items-center mt-10 text-center">
            <div className="shadow-md p-10 rounded-md">
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    <>
                        <h3 className="text-3xl">{poke.name}</h3>
                        <Image src={poke.sprites?.other.home.front_default} width={300} height={300} alt={poke.name} />
                        <p className="my-3">Weight: {poke.weight}</p>
                        <p className="my-3">
                            type: {" "}
                            {poke.types?.map(val => (
                                <span key={val.type.name} className="bg-gray-500 text-white px-3 py-1 rounded-md">{val.type.name}</span>
                            ))}
                        </p>
                        <p className="my-3">
                            Abilities: {" "}
                            {poke.abilities?.map(val => (
                                <span key={val.ability.name} className="bg-gray-500 text-white px-3 py-1 rounded-md">{val.ability.name}</span>
                            ))}
                        </p>
                    </>
                )}
            </div>
        </div>
    </div>
  )
}

export default PokeInfo
