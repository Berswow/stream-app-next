import {FC} from "react";
import {cn} from "@/shared/lib/utils";
import {useGetTvShowSeasonDetails} from "@/shared/hooks/apiHooks/tvShows/useTvShowSeasonDetails";
import Image from "next/image";
import {Clock} from "lucide-react";

type Props = {
    className?: string;
    tvShowId: number;
    seasonId: number;
};

export const EpisodeInfoDesktop: FC<Props> = ({className, seasonId, tvShowId}) => {
    const {data} = useGetTvShowSeasonDetails(tvShowId, seasonId)

    const episodes = data?.episodes || [];

    // if (error) return <div>Error</div>;
    //
    // if (isLoading) {
    //     return (
    //         <>
    //             {Array.from({ length: 3 }).map((_, i) => (
    //                 <EpisodeSkeleton key={i} />
    //             ))}
    //         </>
    //     );
    // }

    return (
        <div className={cn("flex flex-col gap-5 divide-y-1", className)}>
            {episodes.map((episode) => (
                <div key={episode.id} className='flex gap-4.5 p-5 items-center 2xl:gap-6.5 2xl:p-10'>

                    <h4 className='text-2xl font-semibold text-neutral-500 2xl:text-3xl'>{episode.episode_number}</h4>

                    <div
                        className="w-[182px] h-[118px] bg-neutral-800 rounded-2xl overflow-hidden shrink-0 flex items-center justify-center relative lg:w-[172px]">
                        {episode.still_path ? (
                            <Image
                                src={`https://image.tmdb.org/t/p/w300${episode.still_path}`}
                                alt={episode.name}
                                sizes="(max-width: 768px) 182px, (max-width: 1024px) 172px"
                                className='object-cover rounded-xl'
                                fill
                            />
                        ) : (
                            <div className="flex items-center justify-center w-full h-full text-xs text-white">
                                No Image
                            </div>
                        )}
                    </div>

                    {/* Episode info */}
                    <div className='flex flex-col w-full gap-2.5 2xl:gap-3.5'>
                        <div className='flex justify-between items-center gap-2'>
                            <p className='font-semibold text-lg 2xl:text-xl'>{episode.name}</p>
                            <div className='flex w-max items-center gap-1 p-1.5 border-1 border-neutral-700 rounded-md shrink-0 2xl:p-2'>
                                <Clock className='w-4 h-4 text-neutral-700 2xl:w-5 2xl:h-5'/>
                                <p className='text-neutral-500 text-sm font-medium 2xl:text-base'>{episode.runtime} min</p>
                            </div>
                        </div>

                        <div>
                            <p className='text-base text-neutral-500 line-clamp-3 2xl:text-lg'>{episode.overview}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};