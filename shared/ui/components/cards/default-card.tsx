import {FC} from "react";
import {cn} from "@/shared/lib/utils";
import Image from "next/image";
import {MovieInterface} from "@/shared/types/Movie/MovieBaseInterface";
import {TvShowInterface} from "@/shared/types/Show/TvShowBaseInterface";
import {getDisplayTitleDefault} from "@/shared/lib/getDisplayTitle";

type Props = {
    className?: string;
    item?: MovieInterface | TvShowInterface
};

export const DefaultCard: FC<Props> = ({className, item}) => {

    const title = getDisplayTitleDefault(item)

    return (
        <div className={cn("", className)}>
            <div key={item?.id}
                 className="flex flex-col items-center bg-neutral-800 rounded-xl border-neutral-700 border aspect-2/3 p-3 lg:p-4 2xl:p-5">
                <div className="relative w-full aspect-2/3 rounded-xl bg-neutral-500">
                    <Image
                        src={`https://image.tmdb.org/t/p/w500${item?.poster_path}`}
                        alt={title || "Movie poster"}
                        sizes="(max-width: 768px) 207px, (max-width: 1024px) 253px, 319px"
                        className="object-cover rounded-xl"
                        fill
                    />
                </div>
                <div className="mt-4 h-5 w-full flex items-center justify-center text-center">
                    <p className="text-sm font-semibold leading-snug line-clamp-2">
                        {title}
                    </p>
                </div>
            </div>
        </div>
    );
};
