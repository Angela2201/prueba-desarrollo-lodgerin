"use client";

import CharacterCard from '@/components/CharacterCard';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import React, { useEffect, useState } from 'react';
import FiltersModal from '@/components/FiltersModal';
import PageNotFound from '@/components/PageNotFound';

function Page() {

    interface Character {
        episode: string[];
        id: number;
        name: string;
        status: string;
        species: string;
        type: string;
        gender: string;
        origin: {
            name: string;
            url: string;
        };
        location: {
            name: string;
            url: string;
        };
        image: string;
        url: string;
        created: string;
    }

    const [apiData, setApiData] = useState({
        url: "https://rickandmortyapi.com/api/character"
    })
    const [characters, setCharacters] = useState<Character[]>([]);
    const [appliedFilters, setAppliedFilters] = useState({
        species: "",
        gender: "",
        status: "",
    })

    useEffect(() => {
        fetch(apiData.url)
            .then((res) => res.json())
            .then((data) => setCharacters(data.results))
            .catch((error) => console.error("Error fetching characters", error))
    }, [apiData])

    const charactersCounter = characters ? characters.length : 0

    const showAllCharcters = () => {
        setApiData({ url: "https://rickandmortyapi.com/api/character" })
        setAppliedFilters({
            species: "",
            gender: "",
            status: "",
        })
    }

    return (
        <div>
            <Header setApiData={setApiData} />
            <div className='flex flex-col justify-center items-center px-52 bg-[#E6E7E3] pt-6 pb-14'>
                <div className='flex flex-row justify-between w-full'>
                    <div className='flex flex-col gap-8 justify-end'>
                        <div>
                            <button className='bg-[#B6DA8B] rounded-3xl text-[#354E18] text-sm font-semibold px-4 py-2 cursor-pointer' onClick={() => showAllCharcters()}>
                                Todos
                            </button>
                        </div>
                        <div>
                            <div>
                                {(appliedFilters.species || appliedFilters.gender || appliedFilters.status) && (
                                    <p className='text-[#575B52] text-base font-semibold'>
                                        Filtros aplicados
                                    </p>
                                )}
                            </div>
                            <div className='flex flex-row gap-3 mt-3'>
                                {
                                    appliedFilters.species && (
                                        <div className='bg-[#C7CBC2] rounded-2xl py-0.5 px-3 flex flex-row gap-0.5'>
                                            <p className='text-[#333630] text-sm font-medium'>
                                                {appliedFilters.species}
                                            </p>
                                        </div>
                                    )
                                }
                                {
                                    appliedFilters.gender && (
                                        <div className='bg-[#C7CBC2] rounded-2xl py-0.5 px-3 flex flex-row gap-0.5'>
                                            <p className='text-[#333630] text-sm font-medium'>
                                                {appliedFilters.gender}
                                            </p>
                                        </div>
                                    )
                                }
                                {
                                    appliedFilters.status && (
                                        <div className='bg-[#C7CBC2] rounded-2xl py-0.5 px-3 flex flex-row gap-0.5'>
                                            <p className='text-[#333630] text-sm font-medium'>
                                                {appliedFilters.status}
                                            </p>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-8'>
                        <FiltersModal setAppliedFilters={setAppliedFilters} setApiData={setApiData} />
                        <div className='flex flex-row justify-end'>
                            <div className='flex flex-row justify-center items-center gap-2'>
                                <div>
                                    <h1 className='text-[#333630] font-semibold text-xl'>{charactersCounter}</h1>
                                </div>
                                <div>
                                    <h2 className='text-[#575B52] font-semibold text-lg'>
                                        {
                                            charactersCounter === 1 ? "personaje" : "personajes"
                                        }
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {
                    charactersCounter > 0 ? (
                        <div className='mt-8 w-full grid grid-cols-2 gap-10'>
                            {characters.map((item) => (
                                <CharacterCard
                                    key={item.id}
                                    image={item.image}
                                    name={item.name}
                                    state={item.status}
                                    species={item.species}
                                    location={item.location.name}
                                    gender={item.gender}
                                    origin={item.origin}
                                    episodes={item.episode}
                                />
                            ))}
                        </div>
                    ) : (
                        <PageNotFound showAllCharcters={showAllCharcters} />
                    )
                }
            </div>
            <Footer />
        </div>
    );
}

export default Page;
