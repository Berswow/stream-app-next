import React from "react";
import {cn} from "@/shared/lib/utils";
import {GenreCardSkeleton} from "@/shared/skeletons/GenreCardSkeleton";

type Props = {
    className?: string;
};

export const PopularMovies: React.FC<Props> = ({className}) => {
    return (
        <div className={cn("", className)}>
            <GenreCardSkeleton/>
        </div>
    );
};