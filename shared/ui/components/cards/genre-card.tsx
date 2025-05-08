"use client";

import React, { FC } from "react";
import { cn } from "@/shared/lib/utils";
import { ArrowRight } from "lucide-react";
import { Genre } from "@/shared/types/GenreInterface";
import {useGetPopularInGenre} from "@/shared/hooks/apiHooks/usePopularInGenre";
import { Skeleton } from "@/shared/ui/skeleton";
import Image from "next/image";

type Props = {
    className?: string;
    genre: Genre;
    type: "movie" | "tv";
};

export const GenreCard: FC<Props> = ({ className, genre, type }) => {
    const { data, isLoading } = useGetPopularInGenre(type, {with_genres: String(genre.id)});
    const movies = data ?? [];


    return (
        <div className={cn("", className)}>
            <div className="w-[181px] h-[201px] lg:w-[224px] lg:h-[259px] 2xl:w-[275px] 2xl:h-[342px] flex flex-col items-center justify-center bg-neutral-800 rounded-xl border-neutral-700 border">
                <div>
                    <div className="grid grid-cols-2 grid-rows-2 gap-1.25 shrink-0 grow-0">
                        {isLoading
                            ? Array.from({ length: 4 }).map((_, index) => (
                                <Skeleton
                                    key={index}
                                    className="w-[68px] h-[68px] rounded-xl bg-neutral-500 lg:w-[85px] lg:h-[91px] 2xl:w-[105px] 2xl:h-[123px]"
                                />
                            ))
                            : movies.map((movie) => (
                                <div
                                    key={movie.id}
                                    className="relative w-[68px] h-[68px] lg:w-[85px] lg:h-[91px] 2xl:w-[105px] 2xl:h-[123px] rounded-xl overflow-hidden"
                                >
                                    <Image
                                        src={`https://image.tmdb.org/t/p/w154${movie.poster_path}`}
                                        alt={"Movie poster"}
                                        fill
                                        className="object-cover"
                                        sizes="(min-width: 1536px) 1920px, (min-width: 1280px) 1536px, (min-width: 1024px) 1280px, (min-width: 768px) 1024px, (min-width: 640px) 768px, 100vw"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10" />
                                </div>
                            ))}
                    </div>
                    <div className="flex justify-between items-center mt-2">
                        <h5 className="font-semibold text-sm lg:text-base 2xl:text-lg">{genre?.name}</h5>
                        <ArrowRight className="h-5 w-5 lg:h-6 lg:w-6 2xl:h-7.5 2xl:w-7.5" />
                    </div>
                </div>
            </div>
        </div>
    );
};
