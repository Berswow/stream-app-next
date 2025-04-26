import React from "react";
import {cn} from "@/shared/lib/utils";
import {Skeleton} from "@/shared/ui/skeleton";

type Props = {
    className?: string;
};

export const HeroBackground: React.FC<Props> = ({className}) => {
    return (
        <div className={cn("my-container", className)}>
            <div className='flex items-center justify-center'>
                <Skeleton className="rounded-xl h-[468px] w-full sm:h-[509px] md:h-[609px] lg:h-[709px] 2xl:h-[835px]"/>
            </div>

        </div>
    );
};