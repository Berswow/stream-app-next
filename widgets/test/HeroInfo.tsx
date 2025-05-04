import React, {FC} from "react";
import {cn} from "@/shared/lib/utils";
import {Skeleton} from "@/shared/ui/skeleton";
import Image from "next/image";
import {Button} from "@/shared/ui/button";
import {Play, Plus, ThumbsUp, Volume2} from "lucide-react";
import {IMAGE_BASE_URL} from "@/shared/constants/images";
import {MovieDetailed} from "@/shared/types/Movie/MovieDetailInterface";
import {TvShowDetailed} from "@/shared/types/Show/TvShowDetailInterface";
import {getDisplayTitle} from "@/shared/lib/getDisplayTitle";

type Props = {
    className?: string;
    item?:MovieDetailed | TvShowDetailed
};

export const HeroInfo: FC<Props> = ({className, item}) => {

    const imageUrl = item?.backdrop_path
        ? `${IMAGE_BASE_URL}${item.backdrop_path}`
        : null;

    const title = getDisplayTitle(item)

    return (
        <div className={cn("relative mx-auto w-screen 2xl:max-w-[1920px] h-[468px] sm:h-[509px] md:h-[609px] lg:h-[709px] 2xl:h-[835px]", className)}>
            {/* Background Image */}
            {imageUrl ? (
                <>
                    <Image
                        src={imageUrl}
                        alt={title || "Movie backdrop"}
                        fill
                        className="object-cover"
                        sizes="(min-width: 1536px) 1920px, (min-width: 1280px) 1536px, (min-width: 1024px) 1280px, (min-width: 768px) 1024px, (min-width: 640px) 768px, 100vw"

                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10" />
                </>
            ) : (
                <Skeleton className="absolute inset-0 w-full h-full" />
            )}

            {/* Overlay Content */}
            {imageUrl &&
                <div className="absolute inset-0 z-20 flex items-end pb-10">
                    <div className="my-container w-full flex flex-col items-center gap-5 lg:gap-6 2xl:gap-7.5 text-center">
                        <h1 className="font-bold text-2xl lg:text-3xl 2xl:text-4xl">{title}</h1>
                        <p className="hidden text-neutral-400 text-sm md:block lg:text-base font-medium 2xl:text-lg max-w-2xl mx-auto">{item?.overview}</p>

                        <div className="flex flex-col gap-5 md:flex-row justify-center">
                            <Button variant="default" className="h-[52px] w-[310px] md:w-[128px] 2xl:w-[157px] 2xl:h-[56px]">
                                <Play fill="white" />
                                Play Now
                            </Button>
                            <div className="flex justify-center items-center gap-2.5">
                                <div className="bg-neutral-950 flex items-center justify-center w-12 h-12 p-3 border border-neutral-800 rounded-md 2xl:w-14 2xl:h-14">
                                    <Plus />
                                </div>
                                <div className="bg-neutral-950 flex items-center justify-center w-12 h-12 p-3 border border-neutral-800 rounded-md 2xl:w-14 2xl:h-14">
                                    <ThumbsUp />
                                </div>
                                <div className="bg-neutral-950 flex items-center justify-center w-12 h-12 p-3 border border-neutral-800 rounded-md 2xl:w-14 2xl:h-14">
                                    <Volume2 />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }

        </div>
    );
};