import { FC } from "react";
import { cn } from "@/shared/lib/utils";
import { MovieDetailed } from "@/shared/types/Movie/MovieDetailInterface";
import { Skeleton } from "@/shared/ui/skeleton";

type Props = {
    className?: string;
    movie?: MovieDetailed;
};

export const DescriptionInfo: FC<Props> = ({ className, movie }) => {
    const isLoading = !movie?.overview;

    return (
        <div
            className={cn(
                "flex flex-col gap-2 p-6 rounded-2xl border-neutral-700 border-1 bg-neutral-800 lg:p-10 lg:gap-2.5 2xl:p-12.5 2xl:gap-3.5",
                className
            )}
        >
            <h4 className="font-medium text-sm text-neutral-500 lg:text-base 2xl:text-lg">
                Description
            </h4>
            <div className="space-y-2">
                {isLoading ? (
                    <>
                        <Skeleton className="h-4 w-full bg-neutral-700" />
                        <Skeleton className="h-4 w-11/12 bg-neutral-700" />
                        <Skeleton className="h-4 w-10/12 bg-neutral-700" />
                        <Skeleton className="h-4 w-9/12 bg-neutral-700" />
                    </>
                ) : (
                    <p className="font-medium text-sm lg:text-base 2xl:text-lg">
                        {movie.overview}
                    </p>
                )}
            </div>
        </div>
    );
};