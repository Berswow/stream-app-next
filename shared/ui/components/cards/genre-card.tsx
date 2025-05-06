"use client"

import {FC, useState} from "react";
import {cn} from "@/shared/lib/utils";
import {GenreCardSkeleton} from "@/shared/skeletons/GenreCardSkeleton";
import {ArrowRight} from "lucide-react";

type Props = {
    className?: string;
};

export const GenreCard: FC<Props> = ({className}) => {
    const [isCard, setIsCard] = useState(true);

    return (
        <div className={cn("", className)}>
            {!isCard ? <GenreCardSkeleton/> :

                <div className='w-[181px] h-[201px] lg:w-[224px] lg:h-[259px] 2xl:w-[275px] 2xl:h-[342px] flex flex-col items-center justify-center bg-neutral-800 rounded-xl border-neutral-700 border-1'>
                    <div>
                        <div className='grid grid-cols-2 grid-rows-2 gap-1.25 shrink-0 grow-0'>
                            {[...new Array(4)].map((_, index) => (
                                <div key={index} className='w-[68px] h-[68px] rounded-xl bg-neutral-500 lg:w-[85px] lg:h-[91px] 2xl:w-[105px] 2xl:h-[123px]'/>
                            ))}
                        </div>
                        <div className='flex justify-between items-center'>
                            <h5 className='font-semibold text-sm lg:text-base 2xl:text-lg'>Action</h5>
                            <ArrowRight className='h-5 w-5 lg:h-6 lg:w-6 2xl:h-7.5 2xl:w-7.5'/>
                        </div>
                    </div>

                </div>
            }
        </div>
    );
};