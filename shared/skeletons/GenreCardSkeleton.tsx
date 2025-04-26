import React from "react";
import {cn} from "@/shared/lib/utils";
import {Skeleton} from "@/shared/ui/skeleton";

type Props = {
    className?: string;
};

export const GenreCardSkeleton: React.FC<Props> = ({className}) => {
    return (
        <div className={cn("w-[181] h-[201]", className)}>
            <Skeleton className='h-full w-full rounded-xl'/>
        </div>
    )
}