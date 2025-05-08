"use client"

import {cn} from "@/shared/lib/utils";
import useEmblaCarousel from "embla-carousel-react";
import {XlCard} from "@/shared/ui/components/cards/xl-card";
import {MoviesShowsTitle} from "@/shared/ui/components/movies-shows-title";
import {useGetAiringToday} from "@/shared/hooks/apiHooks/tvShows/useAiringToday";
import {MdCardSkeleton} from "@/shared/skeletons/MdCardSkeleton";
import {FC} from "react";

type Props = {
    className?: string;
};

export const AiringToday: FC<Props> = ({className}) => {
    const [emblaRef] = useEmblaCarousel({ align: "start", dragFree: true });

    const {data, isLoading} = useGetAiringToday()
    const tvShowList = data?.results || []

    return (
        <div className={cn("my-container", className)}>
            <MoviesShowsTitle title='Airing Today'/>
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
        </div>
    );
};
