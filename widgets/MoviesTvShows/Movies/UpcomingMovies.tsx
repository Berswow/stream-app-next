"use client"

import React, {useRef} from "react";
import {cn} from "@/shared/lib/utils";
import {SmCard} from "@/shared/ui/components/cards/sm-Card";
import useEmblaCarousel from "embla-carousel-react";
import {MoviesShowsTitle} from "@/shared/ui/components/movies-shows-title";
import {useGetUpcomingMovies} from "@/shared/hooks/apiHooks/movies/useUpcomingMovies";
import {MdCardSkeleton} from "@/shared/skeletons/MdCardSkeleton";
import Link from "next/link";
import Autoplay from "embla-carousel-autoplay";
import {ROUTES} from "@/shared/constants/routes";

type Props = {
    className?: string;
};

export const UpcomingMovies: React.FC<Props> = ({className}) => {
    const autoplay = useRef(Autoplay({ delay: 3100, stopOnInteraction: true }));
    const [emblaRef] = useEmblaCarousel({ align: "start", startIndex: 1, dragFree: true }, [autoplay.current]);

    const {data, isLoading} = useGetUpcomingMovies()

    const moviesList = data?.results || []

    const handleMouseEnter = () => {
        autoplay.current.stop();
    };

    const handleMouseLeave = () => {
        autoplay.current.play();
    };

    return (
        <div className={cn("my-container space-y-4", className)}>
            <MoviesShowsTitle title='Upcoming'/>
            <div className="overflow-hidden p-10" ref={emblaRef} onMouseEnter={handleMouseEnter}
                 onMouseLeave={handleMouseLeave}>
                <div className="flex gap-4">
                    {isLoading ? (
                        [...new Array(5)].map((_, index) => (
                            <div key={index} className="basis-1/3 md:basis-1/4 lg:basis-1/5 inline-flex p-0">
                                <MdCardSkeleton/>
                            </div>
                        ))
                    ) : (
                        moviesList.map((movie) => (
                            <Link href={ROUTES.MOVIE_DETAILED_SLUG(movie.id)} passHref key={movie.id} prefetch={false}>
                                <div
                                    key={movie.id}
                                    className="basis-1/3 md:basis-1/4 lg:basis-1/5 inline-flex rounded-xl
             transition-all duration-300
             hover:scale-105 hover:shadow-[0px_5px_15px_5px_#000000] active:scale-95"
                                >
                                    <SmCard movie={movie}/>
                                </div>
                            </Link>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};
