"use client"

import {SheetFilter} from "@/shared/ui/components/sheet-filter";
import {DefaultCard} from "@/shared/ui/components/cards/default-card";
import {useSelector} from "react-redux";
import {selectGenres, selectYear} from "@/store/slices/filterSlice";
import Link from "next/link";
import {Skeleton} from "@/shared/ui/skeleton";
import {useEffect, useMemo, useRef} from "react";
import {useInfiniteDiscoverTvShow} from "@/shared/hooks/apiHooks/tvShows/useDiscoverTvShow";

export default function TvShowGenrePage() {
    const genres = useSelector(selectGenres);
    const year = useSelector(selectYear);

    const {
        data,
        isLoading,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
    } = useInfiniteDiscoverTvShow({
        with_genres: genres.join(','),
        first_air_date_year: year,
    });

    const tvShowList = useMemo(() => {
        if (!data) return [];

        const allTvShows = data.pages.flatMap((page) => page.results);

        return allTvShows.filter(
            (tvShow, index, self) =>
                index === self.findIndex((m) => m.id === tvShow.id)
        );
    }, [data]);
    const loadMoreRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!hasNextPage || isFetchingNextPage) return;

        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    fetchNextPage();
                }
            },
            { threshold: 1 }
        );

        const el = loadMoreRef.current;
        if (el) observer.observe(el);

        return () => {
            if (el) observer.unobserve(el);
        };
    }, [hasNextPage, isFetchingNextPage, fetchNextPage]);

    return (
        <div className='my-container flex flex-col gap-5 mt-30 sm:mt-35 md:mt-40 lg:mt-45 2xl:mt-50'>
            <SheetFilter itemType='tv'/>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-6">
                {isLoading
                    ? [...Array(10)].map((_, i) => (
                        <Skeleton
                            key={i}
                            className='bg-neutral-800 rounded-xl border-neutral-700 border aspect-2/3 p-3 lg:p-4 2xl:p-5'
                        />
                    ))
                    : tvShowList?.map((tvShow) => (
                        <Link
                            href={`/tvShows/${tvShow.id}`}
                            passHref
                            key={tvShow.id}
                            prefetch={false}
                        >
                            <DefaultCard
                                item={tvShow}
                                className='transition-transform duration-300 active:scale-95'
                            />
                        </Link>
                    ))}
            </div>


            {hasNextPage && !isLoading && (
                <div ref={loadMoreRef} className="h-10" />
            )}
        </div>
    );
}