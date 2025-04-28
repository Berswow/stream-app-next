import React, {FC} from "react";
import {cn} from "@/shared/lib/utils";
import {Skeleton} from "@/shared/ui/skeleton";

type Props = {
    className?: string;
};

export const XlCardSkeleton: FC<Props> = ({className}) => {
    return (
        <div className={cn("w-[231] h-[303] lg:w-[285px] lg:h-[404px] 2xl:w-[359px] 2xl:h-[500px]", className)}>
            <Skeleton className='h-full w-full rounded-xl'/>
        </div>
    );
};