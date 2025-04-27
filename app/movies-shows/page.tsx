import React from "react";
import {HeroBackground, HeroBody} from "@/widgets/MoviesTvShows/Hero";
import {TypeToggle} from "@/shared/ui/components/type-toggle";
import {NowPlayingMovies, PopularMovies, TrendingMovies, UpcomingMovies} from "@/widgets/MoviesTvShows/Movies";


export default function MoviesTvShows()  {
    return (
        <>
            <HeroBackground/>
            <HeroBody/>
            <TypeToggle className='lg:hidden'/>
            <PopularMovies/>
            <TrendingMovies/>
            <UpcomingMovies/>
            <NowPlayingMovies/>
        </>
    );
};