"use client"

import {cn} from "@/shared/lib/utils";
import useEmblaCarousel from "embla-carousel-react";
import {XlCard} from "@/shared/ui/components/cards/xl-card";
import {MoviesShowsTitle} from "@/shared/ui/components/movies-shows-title";
import {MdCardSkeleton} from "@/shared/skeletons/MdCardSkeleton";
import {useGetOnTheAir} from "@/shared/hooks/apiHooks/tvShows/useOnTheAir";
import {FC} from "react";
import Autoplay from "embla-carousel-autoplay";
import {ROUTES} from "@/shared/constants/routes";
import Link from "next/link";

type Props = {
    className?: string;
};

export const OnTheAir: FC<Props> = ({className}) => {
    const [emblaRef] = useEmblaCarousel({align: "start", dragFree: true}, [Autoplay({
        delay: 4200,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
    })]);

    const {data, isLoading} = useGetOnTheAir()
    const tvShowList = data?.results || []

    return (
        <div className={cn("my-container", className)}>
            <MoviesShowsTitle title='On The Air'/>
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
                            <Link href={ROUTES.TVSHOW_DETAILED_SLUG(tvShow.id)} key={tvShow.id} passHref
                                  prefetch={false}>
                                <div
                                    key={tvShow.id}
                                    className="basis-1/3 md:basis-1/4 lg:basis-1/5 inline-flex p-0 rounded-xl transition-all duration-300
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
