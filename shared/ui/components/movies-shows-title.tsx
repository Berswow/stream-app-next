import {FC} from "react";
import {cn} from "@/shared/lib/utils";

type Props = {
    className?: string;
    title?: string;
};

export const MoviesShowsTitle: FC<Props> = ({className, title}) => {
    return (
        <div className={cn("mb-5 lg:mb-10 2xl:mb-12.5", className)}>
            <h2 className='font-bold text-2xl lg:text-3xl 2xl:text-4xl'>{title}</h2>
        </div>
    );
};