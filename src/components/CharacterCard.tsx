"use client";

import Image from 'next/image';
import CharacterDetailModal from './CharacterDetailModal';
import { useState } from 'react';

interface CharacterCardProps {
    image: string;
    name: string;
    state: string;
    species: string;
    location: string;
    gender: string;
    origin: {
        name: string;
        url: string;
    };
    episodes: string[];
}

function CharacterCard({ image, name, state, species, location, gender, origin, episodes }: CharacterCardProps) {

    const [showCharacterDetailModal, setShowCharacterDetailModal] = useState(false);

    const episodesId = Array.isArray(episodes) ? episodes.slice(0, 5).map((url) => url.split("/").pop()).join(",") : ""

    return (
        <div className='flex flex-row w-full cursor-pointer' onClick={() => setShowCharacterDetailModal(true)}>
            <div className='h-full relative'>
                <div className='absolute z-10 bg-[#FAFAFA] p-3 rounded-full w-11 h-11 top-2 left-2'>
                    <Image
                        src="/icons/ic-star.svg"
                        alt="ic-star"
                        width={20}
                        height={20}
                    />
                </div>
                <div className='h-full'>
                    <Image
                        src={image}
                        alt="character"
                        width={140}
                        height={137}
                        className='rounded-l-2xl w-full h-full'
                    />
                </div>
            </div>
            <div className='flex flex-col pt-3 px-4 pb-4 bg-white rounded-r-2xl w-full'>
                <div className='flex flex-row justify-between'>
                    <div>
                        <h3 className='text-[#333630] font-semibold text-lg'>
                            {name}
                        </h3>
                    </div>
                    <div className='bg-[#E7F3D8] py-1.5 px-2 rounded-4xl flex flex-rows justify-center items-center gap-1'>
                        <div>
                            <Image
                                src="/icons/ic_tick-circle.svg"
                                alt="ic_tick-circle"
                                width={16}
                                height={16}
                            />
                        </div>
                        <div>
                            <p className='text-[#354E18] font-medium text-sm'>
                                {state}
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <p className='text-[#575B52] font-medium text-sm'>
                        {species}
                    </p>
                </div>
                <div className='flex flex-row gap-10 mt-4'>
                    <div>
                        <div>
                            <p className='text-[#808C73] font-bold text-xs'>
                                Last known location
                            </p>
                        </div>
                        <div>
                            <p className='text-[#575B52] font-medium text-sm w-40 overflow-hidden text-ellipsis whitespace-nowrap'>
                                {location}
                            </p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p className='text-[#808C73] font-bold text-xs'>
                                First seen in
                            </p>
                        </div>
                        <div>
                            <p className='text-[#575B52] font-medium text-sm'>
                                Never Ricking Morty
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <CharacterDetailModal
                        image={image}
                        name={name}
                        species={species}
                        gender={gender}
                        origin={origin.name}
                        state={state}
                        location={location}
                        episodesId={episodesId}
                        showCharacterDetailModal={showCharacterDetailModal}
                        setShowCharacterDetailModal={setShowCharacterDetailModal}
                    />
                </div>
            </div>
        </div>
    );
}

export default CharacterCard;
