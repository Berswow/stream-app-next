"use client"

import {FC} from "react";
import {cn} from "@/shared/lib/utils";
import {Calendar, ImageOff, LayoutGrid, Music, Video} from "lucide-react";
import {MovieDetailed} from "@/shared/types/Movie/MovieDetailInterface";
import {formatDate} from "@/shared/lib/formatDate";
import Image from "next/image";
import {ParsedCreditsResponse} from "@/shared/hooks/apiHooks/movies/useMovieCast";
import {Skeleton} from "@/shared/ui/skeleton";
import {TvShowDetailed} from "@/shared/types/Show/TvShowDetailInterface";
import {getReleaseDate} from "@/shared/lib/getReleaseDate";

type Props = {
    className?: string;
    item?: MovieDetailed | TvShowDetailed;
    cast?: ParsedCreditsResponse;
};

export const DetailsInfo: FC<Props> = ({className, item, cast}) => {

    const directors = cast?.crew.directors ?? []
    const producers = cast?.crew.producers ?? []

    return (
        <div className={cn("flex flex-col gap-5 p-6 rounded-2xl border-neutral-700 border-1 bg-neutral-800 lg:p-10 lg:gap-6 2xl:p-12.5 2xl:gap-7.5", className)}>
        {/*  Released Date  */}
            {!item ?
            <Skeleton className='w-full h-[382px] lg:h-[422px] 2xl:h-[512px] rounded-2xl bg-neutral-700'/>
                : (
                    <>
                        <div className='flex flex-col gap-2.5 2xl:gap-3.5'>
                            <div className='flex gap-0.5 text-neutral-500 items-center 2xl:gap-1'>
                                <Calendar className='h-[15px] w-[15px] 2xl:w-[18px] 2xl:h-[18px]'/><h4 className='font-medium text-sm lg:text-base 2xl:text-lg'>Released Date</h4>
                            </div>
                            <div>
                                <p className='font-semibold text-base lg:text-lg 2xl:text-xl'>
                                    {item ? formatDate(getReleaseDate(item) || "") : ""}
                                </p>
                            </div>
                        </div>

                        {/*  Genres  */}

                        <div className='flex flex-col gap-2.5 2xl:gap-3.5'>
                            <div className='flex gap-0.5 text-neutral-500 items-center 2xl:gap-1'>
                                <LayoutGrid className='h-[15px] w-[15px] 2xl:w-[18px] 2xl:h-[18px]'/><h4 className='font-medium text-sm lg:text-base 2xl:text-lg'>Genres</h4>
                            </div>
                            <div className='flex gap-2.5 flex-wrap'>
                                {item?.genres.map(genre => (
                                    <div key={genre.id} className='flex items-center py-1.5 px-3 border-neutral-700 border-1 bg-neutral-900 rounded-md 2xl:py-2 2xl:px-3.5'>
                                        <p className='font-medium text-sm 2xl:text-lg'>{genre.name}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/*  Director  */}

                        <div className='flex flex-col gap-2.5 2xl:gap-3.5'>
                            <div className='flex gap-0.5 text-neutral-500 items-center 2xl:gap-1'>
                                <Video className='h-[15px] w-[15px] 2xl:w-[18px] 2xl:h-[18px]'/><h4 className='font-medium text-sm lg:text-base 2xl:text-lg'>Director</h4>
                            </div>
                            <div className='flex flex-col max-w-max gap-2 p-2.5 border-neutral-700 border-1 bg-neutral-900 rounded-xl lg:p-3 2xl:p-3.5'>
                                {directors.map(director => (
                                    <div key={director.id} className='flex gap-2 items-center 2xl:gap-2.5'>
                                        <div className='relative flex justify-center items-center w-12.5 h-12.5 rounded-lg 2xl:w-[56px] 2xl:h-[60px]'>
                                            {director.profile_path ? (
                                                <Image
                                                    src={`https://image.tmdb.org/t/p/w185${director.profile_path}`}
                                                    alt={director.name}
                                                    sizes="(max-width: 768px) 50px, (max-width: 1024px) 56px, 60px"
                                                    className='object-cover rounded-xl'
                                                    fill
                                                />
                                            ) : (
                                                <div className='flex items-center justify-center'>
                                                    <ImageOff />
                                                </div>

                                            )}
                                        </div>
                                        <p className='font-medium text-base 2xl:text-lg'>{director.name}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/*  Producer  */}

                        <div className='flex flex-col gap-2.5 2xl:gap-3.5'>
                            <div className='flex gap-0.5 text-neutral-500 items-center 2xl:gap-1'>
                                <Music className='h-[15px] w-[15px] 2xl:w-[18px] 2xl:h-[18px]'/><h4 className='font-medium text-sm lg:text-base 2xl:text-lg'>Producer</h4>
                            </div>
                            <div className='flex flex-col max-w-max gap-2 p-2.5 border-neutral-700 border-1 bg-neutral-900 rounded-xl lg:p-3 2xl:p-3.5'>
                                {producers.map(producer => (
                                    <div key={producer.id} className='flex gap-2 items-center 2xl:gap-2.5'>
                                        <div className='relative flex justify-center items-center w-12.5 h-12.5 rounded-lg 2xl:w-[56px] 2xl:h-[60px]'>
                                            {producer.profile_path ? (
                                                <Image
                                                    src={`https://image.tmdb.org/t/p/w185${producer.profile_path}`}
                                                    alt={producer.name}
                                                    sizes="(max-width: 768px) 50px, (max-width: 1024px) 56px, 60px"
                                                    className='object-cover rounded-xl'
                                                    fill
                                                />
                                            ) : (
                                                <div className='flex items-center justify-center'>
                                                    <ImageOff />
                                                </div>

                                            )}
                                        </div>
                                        <p className='font-medium text-base 2xl:text-lg'>{producer.name}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </>
                )
            }















        </div>
    );
};