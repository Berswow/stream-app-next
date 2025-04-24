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
        <div className={cn("flex flex-col gap-5 p-6 rounded-2xl border-solid border-2 border-border bg-gradient-to-tr from-stone-900 to-red-900/20", className)}>
            <div className='flex items-center gap-2.5'>
                {icon}<p className='font-semibold text-[18px]'>{title}</p>
            </div>
            <div>
                <p className='text-neutral-500 text-sm'>{description}</p>
            </div>
        </div>
    );
};