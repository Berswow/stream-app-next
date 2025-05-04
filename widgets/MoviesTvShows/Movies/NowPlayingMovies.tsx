"use client"

import React, {useRef} from "react";
import {cn} from "@/shared/lib/utils";
import useEmblaCarousel from "embla-carousel-react";
import {XlCard} from "@/shared/ui/components/xl-card";
import {MoviesShowsTitle} from "@/shared/ui/components/movies-shows-title";
import {useGetNowPlayingMovies} from "@/shared/hooks/movies/useNowPlayingMovies";
import {XlCardSkeleton} from "@/shared/skeletons/XlCardSkeleton";
import Link from "next/link";
import Autoplay from "embla-carousel-autoplay";

type Props = {
    className?: string;
};

export const NowPlayingMovies: React.FC<Props> = ({className}) => {
    const autoplay = useRef(Autoplay({ delay: 3000, stopOnInteraction: true }));
    const [emblaRef] = useEmblaCarousel({ align: "start", startIndex: 1, loop: true, }, [autoplay.current]);

    const {data, isLoading} = useGetNowPlayingMovies()
    const moviesList = data?.results || []

    const handleMouseEnter = () => {
        autoplay.current.stop();
    };

    const handleMouseLeave = () => {
        autoplay.current.play();
    };

    return (
        <div className={cn("my-container", className)}>
            <MoviesShowsTitle title='Now Playing'/>
            <div className="overflow-hidden p-10" ref={emblaRef} onMouseEnter={handleMouseEnter}
                 onMouseLeave={handleMouseLeave}>
                <div className="flex gap-4">
                    {isLoading ? (
                        [...new Array(5)].map((_, index) => (
                            <div key={index} className="basis-1/3 md:basis-1/4 lg:basis-1/5 inline-flex p-0">
                                <XlCardSkeleton/>
                            </div>
                        ))
                    ) : (
                        moviesList.map((movie) => (
                            <Link href={`/movies/${movie.id}`} passHref key={movie.id} prefetch={false}>
                                <div
                                    key={movie.id}
                                    className="basis-1/3 md:basis-1/4 lg:basis-1/5 inline-flex rounded-xl
             transition-all duration-300
             hover:scale-105 hover:shadow-[0px_5px_15px_5px_#000000] active:scale-95"
                                >
                                    <XlCard item={movie}/>
                                </div>
                            </Link>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};
