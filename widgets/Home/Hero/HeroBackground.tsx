"use client"

import Image from 'next/image'
import mobileBg from '@/shared/assets/bgHomeHeroMobile.png'
import laptopBg from '@/shared/assets/bgHomeHeroLaptop.png'
import desktopBg from '@/shared/assets/bgHomeHeroDesktop.png'

export const HeroBackground = () => {
    return (
        <div className='mx-auto max-w-[1440px] 2xl:max-w-[1920px]'>
            <picture>
                <source
                    media="(min-width: 1280px)"
                    srcSet={desktopBg.src}
                />
                <source
                    media="(min-width: 768px)"
                    srcSet={laptopBg.src}
                />
                <Image
                    src={mobileBg}
                    alt="heroimg"
                    placeholder="blur"
                    quality={90}
                    priority
                    className="w-full object-cover"
                />
            </picture>
        </div>

    )
}