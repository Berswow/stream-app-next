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
                    <>
                        <PopularMovies />
                        <TrendingMovies />
                        <UpcomingMovies />
                        <NowPlayingMovies />
                    </>
                ) : (
                    <>
                        <PopularShows />
                        <TrendingShows />
                        <AiringToday />
                        <OnTheAir />
                    </>
                )}
            </div>

            {/* Desktop */}
            <div className="hidden lg:block">
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