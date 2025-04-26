import React from "react";
import {HeroBackground, HeroBody} from "@/widgets/MoviesTvShows/Hero";
import {TypeToggle} from "@/shared/ui/components/type-toggle";


export default function MoviesTvShows()  {
    return (
        <>
            <HeroBackground/>
            <HeroBody/>
            <TypeToggle className='lg:hidden'/>
        </>
    );
};