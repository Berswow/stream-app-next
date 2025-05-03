"use client"

import React, {useCallback, useEffect, useState} from "react";
import {cn} from "@/shared/lib/utils";
import {SmCard} from "@/shared/ui/components/sm-Card";
import useEmblaCarousel from "embla-carousel-react";
import {Progress} from "@/shared/ui/progress";
import {MoviesShowsTitle} from "@/shared/ui/components/movies-shows-title";
import {useGetTrendingMovies} from "@/shared/hooks/movies/useTrendingMovies";
import {MdCardSkeleton} from "@/shared/skeletons/MdCardSkeleton";

type Props = {
    className?: string;
};

export const TrendingMovies: React.FC<Props> = ({className}) => {
    const [progress, setProgress] = useState(0);
    const [emblaRef, emblaApi] = useEmblaCarousel({align: "start"});

    const {data, isLoading} = useGetTrendingMovies();
    const moviesList = data?.results || []


    const onScroll = useCallback(() => {
        if (!emblaApi) return;
        const scrollProgress = emblaApi.scrollProgress();
        setProgress(scrollProgress * 100);
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        emblaApi.on("scroll", onScroll);
        onScroll();

        return () => {
            emblaApi.off("scroll", onScroll);
        };
    }, [emblaApi, onScroll]);

    return (
        <div className={cn("my-container", className)}>
            <MoviesShowsTitle title='Trending Now'/>
            <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex gap-4">
                    {isLoading ? (
                        [...new Array(5)].map((_, index) => (
                            <div key={index} className="basis-1/3 md:basis-1/4 lg:basis-1/5 inline-flex p-0">
                                <MdCardSkeleton/>
                            </div>
                        ))
                    ) : (
                        moviesList.map((movie) => (
                            <div
                                key={movie.id}
                                className="basis-1/3 md:basis-1/4 lg:basis-1/5 inline-flex p-0"
                            >
                                <SmCard movie={movie}/>
                            </div>
                        ))
                    )}
                </div>
            </div>

            <Progress value={progress} className="mx-auto max-w-1/5 h-2 mt-4"/>
        </div>
    );
};
