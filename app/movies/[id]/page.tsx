"use client"

import {DescriptionInfo} from "@/widgets/test/DescriptionInfo";
import {DetailsInfo} from "@/widgets/test/DetailsInfo";
import {CastInfo} from "@/widgets/test/CastInfo";
import {ReviewsInfo} from "@/widgets/test/ReviewsInfo";
import {useParams} from "next/navigation";
import {useGetMovieDetailed} from "@/shared/hooks/movies/useMovieDetailed";
import {useGetMovieCast} from "@/shared/hooks/movies/useMovieCast";
import {HeroInfo} from "@/widgets/test/HeroInfo";

export default function MovieDetailed(){
    const { id } = useParams();
    const movieId = Number(id);

    const {data: movie} = useGetMovieDetailed(movieId);

    const {data: cast} = useGetMovieCast(movieId)

    return (
        <div className='flex flex-col gap-15 lg:gap-20 2xl:gap-25'>
            <HeroInfo movie={movie}/>

            <div className="my-container flex flex-col gap-5 md:hidden">
                <DescriptionInfo movie={movie} />
                <DetailsInfo movie={movie} cast={cast} />
                <CastInfo cast={cast} />
                <ReviewsInfo movieId={movieId} />
            </div>

            <div className="my-container hidden md:flex flex-row justify-between gap-5">
                <div className='flex flex-col gap-5 w-2/3'>
                    <DescriptionInfo movie={movie} />
                    <CastInfo cast={cast} />
                    <ReviewsInfo movieId={movieId} />
                </div>
                <div className='w-1/3'>
                    <DetailsInfo movie={movie} cast={cast} />
                </div>
            </div>
        </div>
    );
};