import React, { useState } from 'react';
import Image from 'next/image';

interface ModalFilterProps {
  setApiData: React.Dispatch<React.SetStateAction<{
    url: string;
  }>>;
}

function Header({ setApiData }: ModalFilterProps) {

  const [characterName, setCharacterName] = useState("")

  const getCharacterByNameUrl = () => {
    const url = `https://rickandmortyapi.com/api/character/?name=${characterName}`

    return url
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value
    setCharacterName(newValue)

    if (newValue.length >= 3) {
      setApiData({ url: getCharacterByNameUrl() })
    } else if (newValue.length === 0) {
      setApiData({ url: "https://rickandmortyapi.com/api/character" })
    }
  }

  return (
    <div className="bg-black h-80 bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: "url(/images/portal-morty-smith-rick.svg)" }}>
      <div className="absolute inset-0 bg-black/60 h-80" />
      <div className="w-full relative z-1 flex flex-col items-center justify-center gap-12 px-52">
        <div>
          <Image
            width={273}
            height={96}
            src="/images/brand-logo.svg"
            alt="brand-logo"
            className="flex justify-center items-center text-[]"
          />
        </div>
        <div className='w-full border-[1px] border-white rounded-lg bg-black/70 py-4 px-3 flex flex-row items-center gap-2'>
          <div>
            <Image
              width={30}
              height={30}
              src={'/icons/ic-search.svg'}
              alt={'ic-search'}
              className='text-[#8BC547]'
            />
          </div>
          <div className='w-full'>
            <input
              type="text"
              placeholder='Buscar personaje por nombre'
              className='w-full text-white font-medium'
              value={characterName}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
