import React from "react";
import {cn} from "@/shared/lib/utils";

type Props = {
    className?: string;
};

export const TrendingMovies: React.FC<Props> = ({className}) => {
    return (
        <div className={cn("", className)}>
            {/* content */}
        </div>
    );
};