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

export const EpisodeInfoMobile: FC<Props> = ({className, seasonId, tvShowId}) => {
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
        <div className={cn("flex flex-col gap-5", className)}>
            {episodes.map((episode) => (
                <div key={episode.id} className='flex flex-col gap-4.5 p-5 items-center rounded-xl bg-neutral-900'>
                    <div className='flex items-center justify-between w-full'>
                        <div className="w-[182px] h-[118px] bg-neutral-800 rounded-2xl overflow-hidden shrink-0 flex items-center justify-center relative lg:w-[172px]">
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
                        <h4 className='text-2xl font-semibold text-neutral-500'>{episode.episode_number}</h4>
                    </div>



                    <div className='flex flex-col w-full gap-2.5'>
                        <div>
                            <div className='flex w-max items-center gap-1 p-1.5 border-1 border-neutral-700 rounded-md'>
                                <Clock className='w-4 h-4 text-neutral-700'/>
                                <p className='text-neutral-500 text-xs font-medium'>{episode.runtime} min</p>
                            </div>
                        </div>

                        <div>
                            <p className='font-semibold text-base'>{episode.name}</p>
                            <p className='hidden lg:block'>{episode.overview}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};