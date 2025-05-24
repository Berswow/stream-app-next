'use client'

import React from "react";
import {Hero} from "@/widgets/MoviesTvShows/Hero/Hero";
import {TypeToggle} from "@/shared/ui/components/type-toggle";
import {NowPlayingMovies, PopularMovies, TrendingMovies, UpcomingMovies} from "@/widgets/MoviesTvShows/Movies";
import {AiringToday, OnTheAir, PopularShows, TrendingShows} from "@/widgets/MoviesTvShows/TvShow";
import {useSelector} from "react-redux";
import {selectType} from "@/store/slices/typeSlice";


export default function MoviesTvShows()  {
    const currentType = useSelector(selectType)

    return (
        <>
            <Hero />

            <TypeToggle className="lg:hidden" />

            {/* Mobile */}
            <div className="block lg:hidden">
                {currentType === 'movies' ? (
                    <div className='flex flex-col gap-12.5'>
                        <PopularMovies />
                        <TrendingMovies />
                        <UpcomingMovies />
                        <NowPlayingMovies />
                    </div>
                ) : (
                    <div className='flex flex-col gap-12.5'>
                        <PopularShows />
                        <TrendingShows />
                        <AiringToday />
                        <OnTheAir />
                    </div>
                )}
            </div>

            {/* Desktop */}
            <div className="hidden lg:flex flex-col gap-20 2xl:gap-25">
                <PopularMovies />
                <TrendingMovies />
                <UpcomingMovies />
                <NowPlayingMovies />
                <PopularShows />
                <TrendingShows />
                <AiringToday />
                <OnTheAir />
            </div>
        </>
    );
};