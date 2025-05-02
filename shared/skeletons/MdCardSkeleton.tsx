import React, {FC} from "react";
import {cn} from "@/shared/lib/utils";
import {Skeleton} from "@/shared/ui/skeleton";

type Props = {
    className?: string;
};

export const MdCardSkeleton: FC<Props> = ({className}) => {
    return (
        <div className={cn("w-[181px] h-[259px] lg:w-[224px] lg:h-[308px] 2xl:w-[283px] 2xl:h-[377px]", className)}>
            <Skeleton className='h-full w-full rounded-xl'/>
        </div>
    );
};