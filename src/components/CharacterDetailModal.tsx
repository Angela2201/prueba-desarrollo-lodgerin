"use client";

import { Dialog, DialogPanel, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import Image from "next/image";
import RelatedCharacters from "./RelatedCharacters";

interface Episode {
    id: number;
    name: string;
    air_date: string;
    episode: string;
    characters: string[];
    url: string;
    created: string;
}

interface ModalCharacterProps {
    image: string;
    name: string;
    species: string;
    gender: string;
    origin: string;
    state: string;
    location: string;
    episodesId: string;
    showCharacterDetailModal: boolean;
    setShowCharacterDetailModal: (value: boolean) => void;
}

export default function CharacterDetailModal(
    { image, name, species, gender, origin, state, location, episodesId, showCharacterDetailModal, setShowCharacterDetailModal }: ModalCharacterProps
) {

    const [episodes, setEpisodes] = useState<Episode[]>([])

    useEffect(() => {
        if (!episodesId) return

        fetch(`https://rickandmortyapi.com/api/episode/${episodesId}`)
            .then((res) => res.json())
            .then((data) => setEpisodes(Array.isArray(data) ? data : [data]))
            .catch((error) => console.error("Error fetching episodes:", error))
    }, [episodesId])

    return (
        <>
            <Transition appear show={showCharacterDetailModal} as={Fragment}>
                <Dialog as="div" className="relative z-50" onClose={() => setShowCharacterDetailModal(false)}>
                    <div className="fixed inset-0 bg-black/60 bg-opacity-60" />

                    <div className="fixed inset-0 flex items-center justify-center p-4">
                        <DialogPanel className="bg-[#E6E7E3] rounded-lg shadow-xl w-[600px] pb-6 max-h-full overflow-y-auto">
                            <div className="bg-cover bg-top h-32 rounded-t-lg relative" style={{ backgroundImage: "url(/images/banner-modal.jpeg)" }}>
                                <button
                                    onClick={() => setShowCharacterDetailModal(false)}
                                    className="bg-[#FAFAFA] p-3 rounded-full absolute z-10 right-2.5 top-2 cursor-pointer">
                                    <Image
                                        src="/icons/ic-times.svg"
                                        alt="Close"
                                        width={20}
                                        height={20} />
                                </button>
                            </div>
                            <div className="px-6">
                                <div className="flex flex-row items-center gap-6">
                                    <div className="relative z-10 bottom-12">
                                        <Image
                                            src={image}
                                            alt={"character"}
                                            width={128}
                                            height={128}
                                            className="rounded-full border-4 border-[#FAFAFA]"
                                        />
                                    </div>
                                    <div className="w-full flex flex-row justify-between items-center bottom-6">
                                        <div className="flex flex-col items-start relative">
                                            <div className="flex flex-row gap-2 items-center">
                                                <div>
                                                    <h3 className="text-[#333630] font-semibold text-lg">
                                                        {name}
                                                    </h3>
                                                </div>
                                                <div>
                                                    <Image
                                                        src={"/icons/ic-star.svg"}
                                                        alt={"ic-star"}
                                                        width={20}
                                                        height={20}
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <p className="text-[#575B52] font-medium text-sm">
                                                    {species}
                                                </p>
                                            </div>
                                        </div>
                                        <div>
                                            <Image
                                                src={"/icons/ic-ellipsis-v.svg"}
                                                alt={"ic-ellipsis"}
                                                width={40}
                                                height={40}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-row gap-4">
                                    <div className="w-1/4 bg-[#FAFAFA] p-4 rounded-xl flex flex-col">
                                        <p className="text-[#333630] text-base font-semibold">
                                            Información
                                        </p>
                                        <div className="flex flex-col gap-6 mt-6">
                                            <div className="flex flex-col gap-1">
                                                <div>
                                                    <p className="text-[#828282] font-bold text-xs">
                                                        Género
                                                    </p>
                                                </div>
                                                <div>
                                                    <p className="text-[#575B52] font-medium text-base">
                                                        {gender}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex flex-col gap-1">
                                                <div>
                                                    <p className="text-[#828282] font-bold text-xs">
                                                        Origen
                                                    </p>
                                                </div>
                                                <div>
                                                    <p className="text-[#575B52] font-medium text-base">
                                                        {origin}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex flex-col gap-1">
                                                <div>
                                                    <p className="text-[#828282] font-bold text-xs">
                                                        Estado
                                                    </p>
                                                </div>
                                                <div className='bg-[#E7F3D8] w-20 py-1.5 px-2 rounded-4xl flex flex-rows justify-center items-center gap-1'>
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
                                        </div>
                                    </div>
                                    <div className="w-3/4 bg-[#FAFAFA] p-4 rounded-xl flex flex-col">
                                        <div>
                                            <p className="text-[#333630] text-base font-semibold">
                                                Episodios
                                            </p>
                                        </div>
                                        {
                                            episodes.map((item) => (
                                                <div key={item.id} className="flex flex-row gap-3 mt-4">
                                                    <div className="w-1/4">
                                                        <p className="text-[#808C73] font-medium text-sm">
                                                            {item.episode}
                                                        </p>
                                                    </div>
                                                    <div className="w-3/4">
                                                        <p className="text-[#575B52] font-medium text-sm">
                                                            {item.name}
                                                        </p>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                                <div className="mt-6 flex flex-row gap-4">
                                    <div className="flex flex-col gap-1 w-1/3">
                                        <div>
                                            <p className="text-[#808C73] font-bold text-xs">
                                                First seen
                                            </p>
                                        </div>
                                        <div>
                                            <p className="text-[#575B52] font-medium text-base">
                                                Never Ricking
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-1 w-2/3">
                                        <div>
                                            <p className="text-[#808C73] font-bold text-xs">
                                                Last known location
                                            </p>
                                        </div>
                                        <div>
                                            <p className="text-[#575B52] font-medium text-base">
                                                {location}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-6 flex flex-col gap-4">
                                    <div>
                                        <p className="text-[#333630] font-semibold text-base">
                                            Personajes relacionados
                                        </p>
                                    </div>
                                    <div className="grid grid-cols-3 gap-4">
                                        <RelatedCharacters />
                                        <RelatedCharacters />
                                        <RelatedCharacters />
                                    </div>
                                </div>
                            </div>
                        </DialogPanel>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
}
