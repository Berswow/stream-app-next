"use client";

import useEmblaCarousel from "embla-carousel-react";
import { cn } from "@/shared/lib/utils";
import { GenreCard } from "@/shared/ui/components/cards/genre-card";
import { MoviesShowsTitle } from "@/shared/ui/components/movies-shows-title";
import { FC } from "react";
import { useGetGenre } from "@/shared/hooks/apiHooks/useGenre";
import {GenreCardSkeleton} from "@/shared/skeletons/GenreCardSkeleton";
import Link from "next/link";
import {setAddGenres, setClearAll} from "@/store/slices/filterSlice";
import {useAppDispatch} from "@/store/store";
import Autoplay from "embla-carousel-autoplay";
import {ROUTES} from "@/shared/constants/routes";

type Props = {
    className?: string;
};

export const PopularShows: FC<Props> = ({ className }) => {
    const dispatch = useAppDispatch()
    const [emblaRef] = useEmblaCarousel(
        { align: "start", dragFree: true, startIndex: 1 },
        [
            Autoplay({
                delay: 9000,
                stopOnInteraction: false,
                stopOnMouseEnter: true,
            }),
        ]
    );
    const { data, isLoading } = useGetGenre("tv");

    const genres = data?.genres ?? [];

    return (
        <div className={cn("my-container", className)}>
            <MoviesShowsTitle title="Our TvShows Genres" />
            <div className="overflow-hidden p-10" ref={emblaRef}>
                <div className="flex gap-4">
                    {isLoading
                        ? Array.from({ length: 6 }).map((_, index) => (
                            <div
                                key={index}
                                className="basis-1/3 md:basis-1/4 lg:basis-1/5 inline-flex p-0"
                            >
                                <GenreCardSkeleton/>
                            </div>
                        ))
                        : genres.map((genre) => (
                            <Link href={ROUTES.TVSHOW_GENRE_SLUG(genre.name.toLowerCase())}
                                  passHref
                                  key={genre.id}
                                  prefetch={false}
                                  onClick={() => {
                                      dispatch(setClearAll())
                                      dispatch(setAddGenres(genre.id))}}
                            >
                                <div
                                    className="basis-1/3 md:basis-1/4 lg:basis-1/5 inline-flex p-0 rounded-xl transition-all duration-300
             hover:scale-105 hover:shadow-[0px_5px_15px_5px_#000000] active:scale-95"
                                >
                                    <GenreCard genre={genre} type='tv' className='cursor-pointer select-none'/>
                                </div>
                            </Link>

                        ))}
                </div>
            </div>
        </div>
    );
};
