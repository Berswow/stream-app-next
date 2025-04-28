import {FC} from "react";
import {cn} from "@/shared/lib/utils";
import Image from "next/image";
import supportImgMobile from '@/shared/assets/Support/supportImgMobile.png'
import supportImgLaptop from '@/shared/assets/Support/supportImgLaptop.png'
import supportImgDesktop from '@/shared/assets/Support/supportImgDesktop.png'

type Props = {
    className?: string;
};

export const SupportHero: FC<Props> = ({className}) => {
    return (
        <div className={cn("flex flex-col gap-7.5 lg:gap-10 2xl:gap-12.5", className)}>
            <div className='flex flex-col gap-2.5 2xl:gap-3.5'>
                <h1 className='font-bold text-3xl lg:text-4xl 2xl:text-5xl'>Welcome to our support page!</h1>
                <div>
                    <p className='text-sm text-neutral-500 lg:text-base 2xl:text-lg'>We're here to help you with any problems you may be having with our product.</p>
                </div>
            </div>


            <div className='mx-auto w-full max-w-[1440px] 2xl:max-w-[1920px]'>
                <picture>
                    <source
                        media="(min-width: 1536px)"
                        srcSet={supportImgDesktop.src}
                    />
                    <source
                        media="(min-width: 1024px)"
                        srcSet={supportImgLaptop.src}
                    />
                    <Image
                        src={supportImgMobile}
                        alt="heroimg"
                        placeholder="blur"
                        quality={90}
                        priority
                        className="w-full object-cover"
                    />
                </picture>
            </div>
        </div>
    );
};