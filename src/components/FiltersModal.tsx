"use client";

import { Dialog, DialogPanel, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import Image from "next/image";

interface ModalFilterProps {
    setAppliedFilters: React.Dispatch<React.SetStateAction<{
        species: string;
        gender: string;
        status: string;
    }>>;
    setApiData: React.Dispatch<React.SetStateAction<{
        url: string;
    }>>;
}

export default function FiltersModal({ setAppliedFilters, setApiData }: ModalFilterProps) {

    const [isOpen, setIsOpen] = useState(false);
    const [selectedFilters, setSelectedFilters] = useState({
        species: { key: "", value: "" },
        gender: { key: "", value: "" },
        status: { key: "", value: "" },
    })
    const getCharactersByFiltersUrl = () => {
        const queryParams = Object.entries(selectedFilters).filter(
            ([, objectValue]) => objectValue.key
        ).map(([objectKey, objectValue]) => {
            return `${objectKey}=${objectValue.key}`
        }).join("&")

        const url = `https://rickandmortyapi.com/api/character/?${queryParams}`

        return url
    }

    const applyFilters = () => {
        setAppliedFilters({
            species: selectedFilters.species.value,
            gender: selectedFilters.gender.value,
            status: selectedFilters.status.value,
        })
        setIsOpen(false)
        setSelectedFilters({
            species: { key: "", value: "" },
            gender: { key: "", value: "" },
            status: { key: "", value: "" },
        })
        setApiData({ url: getCharactersByFiltersUrl() })
    }

    const speciesFilter = [
        { key: "human", value: "Humano" },
        { key: "cronenberg", value: "Cronenbergs" },
        { key: "humanoid", value: "Humanoide" },
        { key: "alien", value: "Alien" },
    ]

    const genderFilter = [
        { key: "male", value: "Masculino" },
        { key: "female", value: "Femenino" },
        { key: "unknown", value: "Desconocido" },
    ]

    const statusFilter = [
        { key: "alive", value: "Vivo" },
        { key: "dead", value: "Muerto" },
    ]

    return (
        <>
            <div className='flex flex-row justify-end'>
                <button
                    onClick={() => setIsOpen(true)}
                    className='bg-white p-3.5 rounded-full cursor-pointer'>
                    <Image
                        src="/icons/ic-sttings.svg"
                        alt="ic-sttings"
                        width={20}
                        height={20}
                    />
                </button>
            </div>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-50" onClose={() => setIsOpen(false)}>
                    <div className="fixed inset-0 bg-black/60 bg-opacity-60" />

                    <div className="fixed inset-0 flex items-center justify-center p-4">
                        <DialogPanel className="bg-[#FAFAFA] p-6 rounded-lg shadow-xl w-auto">
                            <div className="flex flex-row justify-between items-center">
                                <div>
                                    <h3 className="text-[#2E333D] text-lg font-semibold">
                                        Filtros avanzados
                                    </h3>
                                </div>
                                <div>
                                    <button
                                        onClick={() => setIsOpen(false)}
                                        className="cursor-pointer">
                                        <Image
                                            src="/icons/ic-times.svg"
                                            alt="Close"
                                            width={20}
                                            height={20}
                                        />
                                    </button>
                                </div>
                            </div>
                            <div className="flex flex-col gap-6 mt-6 pb-6">
                                <div className="flex flex-col gap-3">
                                    <div>
                                        <p className="text-black text-sm font-medium">
                                            Especie
                                        </p>
                                    </div>
                                    <div className="flex flex-row gap-3">
                                        {
                                            speciesFilter.map((item) => (
                                                <button
                                                    key={item.key}
                                                    className={`border border-[#C7CBC2] rounded-2xl text-sm font-medium py-1.5 px-3 cursor-pointer ${selectedFilters.species.key === item.key ? "bg-[#C7CBC2]" : "text-black"}`}
                                                    onClick={() => setSelectedFilters((prev) => ({
                                                        ...prev, species: item
                                                    }))}
                                                >
                                                    {item.value}
                                                </button>
                                            ))
                                        }
                                    </div>
                                </div>
                                <div className="flex flex-col gap-3">
                                    <div>
                                        <p className="text-black text-sm font-medium">
                                            Género
                                        </p>
                                    </div>
                                    <div className="flex flex-row gap-3">
                                        {
                                            genderFilter.map((item) => (
                                                <button
                                                    key={item.key}
                                                    className={`border border-[#C7CBC2] rounded-2xl text-sm font-medium py-1.5 px-3 cursor-pointer ${selectedFilters.gender.key === item.key ? "bg-[#C7CBC2]" : "text-black"}`}
                                                    onClick={() => setSelectedFilters((prev) => ({
                                                        ...prev, gender: item
                                                    }))}
                                                >
                                                    {item.value}
                                                </button>
                                            ))
                                        }
                                    </div>
                                </div>
                                <div className="flex flex-col gap-3">
                                    <div>
                                        <p className="text-black text-sm font-medium">
                                            Estado
                                        </p>
                                    </div>
                                    <div className="flex flex-row gap-3">
                                        {
                                            statusFilter.map((item) => (
                                                <button
                                                    key={item.key}
                                                    className={`border border-[#C7CBC2] rounded-2xl text-sm font-medium py-1.5 px-3 cursor-pointer ${selectedFilters.status.key === item.key ? "bg-[#C7CBC2]" : "text-black"}`}
                                                    onClick={() => setSelectedFilters((prev) => ({
                                                        ...prev, status: item
                                                    }))}
                                                >
                                                    {item.value}
                                                </button>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-end  border-[#C7CBC2] border-t-[1px]">
                                <button
                                    className="mt-4 px-5 py-4 bg-[#8BC547] text-[#354E18] font-bold text-sm rounded-4xl cursor-pointer"
                                    onClick={applyFilters}
                                >
                                    Aplicar filtros
                                </button>
                            </div>
                        </DialogPanel>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
}
