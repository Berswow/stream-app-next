'use client'

import {FC} from "react";
import {cn} from "@/shared/lib/utils";
import {ParsedCreditsResponse} from "@/shared/hooks/movies/useMovieCast";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import {ImageOff} from "lucide-react";

type Props = {
    className?: string;
    cast?: ParsedCreditsResponse;
};

export const CastInfo: FC<Props> = ({className, cast}) => {
    const [emblaRef] = useEmblaCarousel({align: "start"});


    return (
        <div
            className={cn("flex flex-col gap-2 p-6 rounded-2xl border-neutral-700 border-1 bg-neutral-800 lg:p-10 lg:gap-2.5 2xl:p-12.5 2xl:gap-3.5", className)}>
            <h4 className='font-medium text-sm text-neutral-500 lg:text-base 2xl:text-lg'>Cast</h4>
            <div className="overflow-hidden" ref={emblaRef}>
                <div className='flex gap-2.5'>

                    {cast?.cast.map(member => (
                        <div key={member.id} className='flex flex-col items-center gap-0.5'>
                            <div
                                className='flex justify-center items-center relative w-[70px] h-[75px] bg-neutral-500 rounded-lg lg:w-[88px] lg:h-[89px] 2xl:w-[102px] 2xl:h-[109px]'>
                                {member.profile_path ? (
                                    <Image
                                        src={`https://image.tmdb.org/t/p/w185${member.profile_path}`}
                                        alt={member.name}
                                        sizes="(max-width: 768px) 70px, (max-width: 1024px) 88px, 102px"
                                        className='object-cover rounded-xl'
                                        fill
                                    />
                                ) : (
                                    <div className='flex items-center justify-center'>
                                        <ImageOff size={50}/>
                                    </div>

                                )}
                            </div>
                            <div className='flex flex-col items-center text-center'>
                                <p className='font-medium text-sm'>{member.name}</p>
                                <p className='hidden md:block text-neutral-400 text-xs'>{member.character}</p>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    );
};