"use client"

import React, {useRef} from "react";
import {cn} from "@/shared/lib/utils";
import useEmblaCarousel from "embla-carousel-react";
import {XlCard} from "@/shared/ui/components/cards/xl-card";
import {MoviesShowsTitle} from "@/shared/ui/components/movies-shows-title";
import {useGetTrendingTv} from "@/shared/hooks/apiHooks/tvShows/useTrendingTv";
import {MdCardSkeleton} from "@/shared/skeletons/MdCardSkeleton";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";

type Props = {
    className?: string;
};

export const TrendingShows: React.FC<Props> = ({className}) => {
    const autoplay = useRef(Autoplay({ delay: 5700, stopOnInteraction: true }));
    const [emblaRef] = useEmblaCarousel({ align: "start", startIndex: 1, loop: true, }, [autoplay.current]);

    const {data, isLoading} = useGetTrendingTv()
    const tvShowList = data?.results || []

    const handleMouseEnter = () => {
        autoplay.current.stop();
    };

    const handleMouseLeave = () => {
        autoplay.current.play();
    };

    return (
        <div className={cn("my-container", className)}>
            <MoviesShowsTitle title='Trending Shows Now'/>
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
                        tvShowList.map((tvShow) => (
                            <Link href={`/tvshows/${tvShow.id}`} passHref key={tvShow.id} prefetch={false}>
                                <div
                                    key={tvShow.id}
                                    className="basis-1/3 md:basis-1/4 lg:basis-1/5 inline-flex rounded-xl
             transition-all duration-300
             hover:scale-105 hover:shadow-[0px_5px_15px_5px_#000000] active:scale-95"
                                >
                                    <XlCard item={tvShow}/>
                                </div>
                            </Link>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};
