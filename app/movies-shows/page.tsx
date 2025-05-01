import React from "react";
import {Hero} from "@/widgets/MoviesTvShows/Hero";
import {TypeToggle} from "@/shared/ui/components/type-toggle";
import {NowPlayingMovies, PopularMovies, TrendingMovies, UpcomingMovies} from "@/widgets/MoviesTvShows/Movies";
import {AiringToday, OnTheAir, PopularShows, TrendingShows} from "@/widgets/MoviesTvShows/TvShow";


export default function MoviesTvShows()  {
    return (
        <>
            <Hero/>
            <TypeToggle className='lg:hidden'/>
            <PopularMovies/>
            <TrendingMovies/>
            <UpcomingMovies/>
            <NowPlayingMovies/>

            <hr className='border-3'/>

            <PopularShows/>
            <TrendingShows/>
            <AiringToday/>
            <OnTheAir/>
        </>
    );
};