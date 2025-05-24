import {FC} from "react";
import {cn} from "@/shared/lib/utils";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/shared/ui/accordion";
import {Season} from "@/shared/types/Show/TvShowDetailInterface";
import {EpisodeInfoDesktop} from "@/widgets/CardDetails/EpisodeInfoDesktop";
import {useMediaQuery} from "@/shared/hooks/useMediaQuery";
import {EpisodeInfoMobile} from "@/widgets/CardDetails/EpisodeInfoMobile";

type Props = {
    className?: string;
    tvShowId: number;
    seasons: Season[];
};

export const SeasonsEpisodesInfo: FC<Props> = ({className, tvShowId, seasons}) => {
    const isDesktop = useMediaQuery("(min-width: 1024px)");

    const seasonsList = seasons.filter((season) => season.season_number !== 0)


    return (
        <div
            className={cn(
                "flex flex-col gap-2 p-6 rounded-2xl border-neutral-700 border-1 bg-neutral-800 lg:p-10 lg:gap-2.5 2xl:p-12.5 2xl:gap-3.5",
                className
            )}
        >
            <h4 className="font-medium text-sm text-neutral-500 lg:text-base 2xl:text-lg">
                Seasons and Episodes
            </h4>
            <div className="space-y-2">
                    <Accordion type="single" collapsible className="flex flex-col gap-4 w-full 2xl:gap-5">
                        {seasonsList.map((season: Season, index: number) => (
                            <AccordionItem key={season.id} value={`item-${index + 1}`} className='border border-neutral-700 rounded-xl'>
                                <AccordionTrigger className='bg-neutral-950 p-6.5 rounded-xl data-[state=open]:rounded-b-none lg:px-10 2xl:px-12.5 2xl:py-8'>
                                    <div className='flex gap-2.5 items-center 2xl:gap-3.5'>
                                        <h4 className='text-base font-semibold lg:text-xl 2xl:text-2xl'>{season.name}</h4>
                                        <p className='text-sm font-medium text-neutral-600 lg:text-base 2xl:text-lg'>{season.episode_count} Episodes</p>
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent className='flex flex-col bg-neutral-950 rounded-b-xl p-5'>
                                    {isDesktop ? (
                                        <EpisodeInfoDesktop tvShowId={tvShowId} seasonId={season.season_number}/>
                                    ) : (
                                        <EpisodeInfoMobile tvShowId={tvShowId} seasonId={season.season_number}/>
                                    )}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
            </div>
        </div>
    );
};