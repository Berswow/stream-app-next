"use client"

import {cn} from "@/shared/lib/utils";
import useEmblaCarousel from "embla-carousel-react";
import {XlCard} from "@/shared/ui/components/cards/xl-card";
import {MoviesShowsTitle} from "@/shared/ui/components/movies-shows-title";
import {useGetAiringToday} from "@/shared/hooks/apiHooks/tvShows/useAiringToday";
import {MdCardSkeleton} from "@/shared/skeletons/MdCardSkeleton";
import {FC} from "react";
import Autoplay from "embla-carousel-autoplay";

type Props = {
    className?: string;
};

export const AiringToday: FC<Props> = ({className}) => {
    const [emblaRef] = useEmblaCarousel({ align: "start", dragFree: true, loop: true}, [
        Autoplay({
            delay: 3300,
            stopOnInteraction: false,
            stopOnMouseEnter: true,
        })
    ]);

    const {data, isLoading} = useGetAiringToday()
    const tvShowList = data?.results || []

    return (
        <div className={cn("my-container", className)}>
            <MoviesShowsTitle title='Airing Today'/>
            <div className="overflow-hidden p-10" ref={emblaRef}>
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
                                className="basis-1/3 md:basis-1/4 lg:basis-1/5 inline-flex p-0 rounded-xl transition-all duration-300
             hover:scale-105 hover:shadow-[0px_5px_15px_5px_#000000] active:scale-95"
                            >
                                <XlCard item={tvShow}/>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};
