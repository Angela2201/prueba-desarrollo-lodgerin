import React from 'react';

interface PageNotFoundProps {
    showAllCharcters: () => void;
}

function PageNotFound({ showAllCharcters }: PageNotFoundProps) {
    return (
        <div className='flex flex-col justify-center items-center my-8 py-11'>
            <div className='flex flex-col items-center gap-4'>
                <div>
                    <h1 className='text-[#333630] text-4xl font-bold'>
                        Oh no!
                    </h1>
                </div>
                <div>
                    <p className='text-[#575B52] text-base font-semibold'>
                        ¡Pareces perdido en tu viaje!
                    </p>
                </div>
            </div>
            <div className='mt-12'>
                <button
                    className='bg-[#FAFAFA] rounded-3xl py-3 px-5 text-[#354E18] text-sm font-bold cursor-pointer'
                    onClick={() => showAllCharcters()}
                >
                    Limpiar filtros
                </button>
            </div>
        </div>
    );
}

export default PageNotFound;
