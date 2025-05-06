"use client"

import React, {useCallback, useEffect, useState} from "react";
import {cn} from "@/shared/lib/utils";
import useEmblaCarousel from "embla-carousel-react";
import {Progress} from "@/shared/ui/progress";
import {XlCard} from "@/shared/ui/components/cards/xl-card";
import {MoviesShowsTitle} from "@/shared/ui/components/movies-shows-title";
import {MdCardSkeleton} from "@/shared/skeletons/MdCardSkeleton";
import {useGetOnTheAir} from "@/shared/hooks/apiHooks/tvShows/useOnTheAir";

type Props = {
    className?: string;
};

export const OnTheAir: React.FC<Props> = ({className}) => {
    const [progress, setProgress] = useState(0);
    const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start" });

    const {data, isLoading} = useGetOnTheAir()
    const tvShowList = data?.results || []

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
            <MoviesShowsTitle title='On The Air'/>
            <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex gap-4">
                    {isLoading ? (
                        [...new Array(5)].map((_, index) => (
                            <div key={index} className="basis-1/3 md:basis-1/4 lg:basis-1/5 inline-flex p-0">
                                <MdCardSkeleton/>
                            </div>
                        ))
                    ) : (
                        tvShowList.map((tvShow) => (
                            <div
                                key={tvShow.id}
                                className="basis-1/3 md:basis-1/4 lg:basis-1/5 inline-flex p-0"
                            >
                                <XlCard item={tvShow}/>
                            </div>
                        ))
                    )}
                </div>
            </div>

            <Progress value={progress} className="mx-auto max-w-1/5 h-2 mt-4" />
        </div>
    );
};
