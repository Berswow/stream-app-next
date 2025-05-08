"use client"

import React from "react";
import {cn} from "@/shared/lib/utils";
import {Skeleton} from "@/shared/ui/skeleton";
import {Button} from "@/shared/ui/button";
import {Play, Plus, ThumbsUp, Volume2} from "lucide-react";
import {useGetPopularMovies} from "@/shared/hooks/apiHooks/movies/usePopularMovies";
import Image from "next/image";
import {IMAGE_BASE_URL} from "@/shared/constants/images";

type Props = {
    className?: string;
};

export const Hero: React.FC<Props> = ({className}) => {

    const {data, isLoading} = useGetPopularMovies();
    const movie = data?.results?.[0] || null;
    const imageUrl = movie?.backdrop_path
        ? `${IMAGE_BASE_URL}${movie.backdrop_path}`
        : null;


    return (
        <div className={cn("mx-auto w-screen 2xl:max-w-[1920px]", className)}>
            <div
                className="relative w-full h-[468px] sm:h-[509px] md:h-[609px] lg:h-[709px] 2xl:h-[835px] rounded-xl overflow-hidden">
                {isLoading || !imageUrl ? (
                    <Skeleton className="w-full h-full"/>
                ) : (
                    <>
                        <Image
                            src={imageUrl}
                            alt={movie?.title || "Movie backdrop"}
                            fill
                            sizes="(min-width: 1536px) 1920px,(min-width: 1024px) 1440px,100vw"
                            className="object-cover"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"/>
                    </>
                )}
            </div>
            <div className='my-container relative z-20'>
                <div className='flex flex-col items-center gap-5 -mt-55 lg:gap-6 2xl:gap-7.5'>
                    <div className='flex flex-col items-center gap-3.5 text-center'>
                        <h1 className='font-bold text-2xl lg:text-3xl 2xl:text-4xl'>{movie?.title}</h1>
                        <p className='hidden text-neutral-400 text-sm md:block lg:text-base font-medium 2xl:text-lg'>{movie?.overview}</p>
                    </div>

                    <div className='flex flex-col gap-5 md:flex-row'>
                        <Button variant='default'
                                className='h-[52px] w-[310px] rounded-md md:w-[128px] 2xl:w-[157px] 2xl:h-[56px]'>
                            <Play fill='white'/>Play Now</Button>
                        <div className='flex justify-center items-center gap-2.5'>
                            <div
                                className='bg-neutral-950 flex items-center justify-center w-12 h-12 p-3 border-1 border-neutral-800 rounded-md 2xl:w-14 2xl:h-14'>
                                <Plus/></div>
                            <div
                                className='bg-neutral-950 flex items-center justify-center  w-12 h-12 p-3 border-1 border-neutral-800 rounded-md 2xl:w-14 2xl:h-14'>
                                <ThumbsUp/></div>
                            <div
                                className='bg-neutral-950 flex items-center justify-center  w-12 h-12 p-3 border-1 border-neutral-800 rounded-md 2xl:w-14 2xl:h-14'>
                                <Volume2/></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};