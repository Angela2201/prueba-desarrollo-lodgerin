"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Welcome() {
  const router = useRouter();

  return (
    <div className="bg-black h-screen bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: "url(/images/portal-morty-smith-rick.svg)" }}>
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-1 flex flex-col items-center justify-center gap-12 px-72">
        <div>
          <Image
            width={500}
            height={176}
            src="/images/brand-logo.svg"
            alt="brand-logo"
            className="flex justify-center items-center"
          />
        </div>
        <div className="flex flex-col justify-center items-center gap-2.5">
          <div>
            <h1 className="text-4xl text-white font-bold">
              Bienvenido a Rick and Morty
            </h1>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold text-center">
              En esta prueba, evaluaremos su capacidad para construir la aplicación mediante el análisis de código y la reproducción del siguiente diseño.
            </h3>
          </div>
        </div>
        <div>
          <button
            onClick={() => router.push("/home")}
            className="px-5 py-3 bg-[#8BC547] text-[#354E18] font-bold rounded-3xl cursor-pointer"
          >
            Comenzar
          </button>
        </div>
      </div>
    </div>
  );
}
