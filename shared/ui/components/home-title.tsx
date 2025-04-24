import React from "react";
import {cn} from "@/shared/lib/utils";

type Props = {
    className?: string;
    title?: string;
    description?: string;
};

export const HomeTitle: React.FC<Props> = ({className, description, title}) => {
    return (
        <div className={cn("flex flex-col gap-2 lg:gap-2.5 2xl:gap-3.5", className)}>
            <h2 className='font-bold text-2xl lg:text-3xl 2xl:text-[38px]'>{title}</h2>
            <div>
                <p className='text-neutral-500 text-sm lg:text-base 2xl:text-xl'>{description}</p>
            </div>
        </div>
    );
};