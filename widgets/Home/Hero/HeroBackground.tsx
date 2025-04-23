"use client"

import Image from 'next/image'
import backgroundImage from '@/shared/assets/bgHomeHeroMobile.png'

export const HeroBackground = () => {
    return (
        <Image
            src={backgroundImage}
            alt="heroimg"
            placeholder="blur"
            quality={90}
            priority
            className="w-full object-cover"
        />
    );
};