"use client";

import Image from "next/image";

function RelatedCharacters() {
    return (
        <div className="flex flex-col">
            <div>
                <Image
                    src={"/images/character.svg"}
                    alt={"character"}
                    width={192}
                    height={144}
                    className="rounded-t-lg"
                />
            </div>
            <div className="flex flex-col pt-2 px-4 pb-4 bg-[#FAFAFA] rounded-b-lg">
                <div>
                    <p className="text-[#333630] text-lg font-semibold">
                        Morty
                    </p>
                </div>
                <div>
                    <p className="text-[#575B52] text-sm font-medium">
                        Humano
                    </p>
                </div>
            </div>
        </div>
    );
}

export default RelatedCharacters;
