"use client"

import {DescriptionInfo} from "@/widgets/CardDetails/DescriptionInfo";
import {DetailsInfo} from "@/widgets/CardDetails/DetailsInfo";
import {CastInfo} from "@/widgets/CardDetails/CastInfo";
import {ReviewsInfo} from "@/widgets/CardDetails/ReviewsInfo";
import {useParams} from "next/navigation";
import {HeroInfo} from "@/widgets/CardDetails/HeroInfo";
import {useGetTvShowDetailed} from "@/shared/hooks/apiHooks/tvShows/useTvShowDetailed";
import {useGetTvShowCast} from "@/shared/hooks/apiHooks/tvShows/useTvShowCast";
import {SeasonsEpisodesInfo} from "@/widgets/CardDetails/SeasonsEpisodesInfo";

export default function TvShowsDetailed() {
    const {id} = useParams();
    const tvShowId = Number(id);

    const {data: tvShow} = useGetTvShowDetailed(tvShowId);
    const {data: cast} = useGetTvShowCast(tvShowId)


    if (!tvShow) return <div>TvShow not found</div>;

    return (
        <div className='flex flex-col gap-15 lg:gap-20 2xl:gap-25'>
            <HeroInfo item={tvShow} itemId={tvShowId} type={'tv'}/>
            <div>
                {/* Mobile */}
                <div className="my-container flex flex-col gap-5 md:hidden">
                    <SeasonsEpisodesInfo tvShowId={tvShow.id} seasons={tvShow.seasons}/>
                    <DescriptionInfo item={tvShow}/>
                    <DetailsInfo item={tvShow} cast={cast}/>
                    <CastInfo cast={cast}/>
                    <ReviewsInfo itemId={tvShowId} type={'tv'}/>
                </div>

                {/* Desktop */}
                <div className="my-container hidden md:flex flex-row justify-between gap-5">
                    <div className='flex flex-col gap-5 w-2/3'>
                        <SeasonsEpisodesInfo tvShowId={tvShow.id} seasons={tvShow.seasons}/>
                        <DescriptionInfo item={tvShow}/>
                        <CastInfo cast={cast}/>
                        <ReviewsInfo itemId={tvShowId} type={'tv'}/>
                    </div>
                    <div className='w-1/3'>
                        <DetailsInfo item={tvShow} cast={cast}/>
                    </div>
                </div>
            </div>
        </div>
    );
};