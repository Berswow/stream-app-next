import React from "react";
import {cn} from "@/shared/lib/utils";

type Props = {
    className?: string;
    title?: string;
    description?: string;
    icon?: React.ReactNode;
};

export const DeviceCard: React.FC<Props> = ({className, description, title, icon}) => {
    return (
        <div className={cn("flex flex-col gap-5 p-6 rounded-2xl border-solid border-2 border-border bg-gradient-to-tr from-stone-900 to-red-900/20 lg:p-10 lg:gap-6 2xl:p-12.5 2xl:gap-7.5", className)}>
            <div className='flex items-center gap-2.5 lg:gap-3 2xl:gap-4'>
                {icon}<p className='font-semibold text-[18px] lg:text-xl 2xl:text-2xl'>{title}</p>
            </div>
            <div>
                <p className='text-neutral-500 text-sm lg:text-base 2xl:text-[18px]'>{description}</p>
            </div>
        </div>
    );
};