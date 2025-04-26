import { Skeleton } from "@/shared/ui/skeleton"
import {cn} from "@/shared/lib/utils";

type Props = {
    width?: number;
    height?: number;
    className?: string;
}

export function MoviesTvShowsHeroSkeleton({height, width, className}: Props) {
    return (
        <div className="flex flex-col space-y-3">
            <Skeleton
                className={cn(
                    "rounded-xl",
                    `h-[${height}px]`,
                    `w-[${width}px]`, className
                )}
            />
        </div>
    )
}
