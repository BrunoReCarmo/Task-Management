import React from 'react';
import Image from 'next/image';

export const Illustration = () => {
    return (
        <div className="hidden lg:flex items-center justify-center flex-1 bg-white text-black">
            <div className="max-w-md text-center">
                <Image
                    src="/richie.png"
                    alt="Character"
                    width={450}
                    height={450}
                />
            </div>
        </div>
    )
}

