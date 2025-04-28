"use client"

import React, {useCallback, useEffect, useState} from "react";
import {cn} from "@/shared/lib/utils";
import {MdCard} from "@/shared/ui/components/md-Card";
import useEmblaCarousel from "embla-carousel-react";
import {Progress} from "@/shared/ui/progress";
import {MoviesShowsTitle} from "@/shared/ui/components/movies-shows-title";

type Props = {
    className?: string;
};

export const UpcomingMovies: React.FC<Props> = ({className}) => {
    const [progress, setProgress] = useState(0);
    const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start" });

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
        <div className={cn("my-container space-y-4", className)}>
            <MoviesShowsTitle title='Upcoming'/>
            <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex gap-4">
                    {Array.from({ length: 19 }).map((_, index) => (
                        <div
                            key={index} className="basis-1/3 md:basis-1/4 lg:basis-1/5 inline-flex p-0"
                        >
                            <MdCard />
                        </div>
                    ))}
                </div>
            </div>

            <Progress value={progress} className="mx-auto max-w-1/5 h-2" />
        </div>
    );
};
