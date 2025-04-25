import React from "react";
import {cn} from "@/shared/lib/utils";
import {Button} from "@/shared/ui/button";

type Props = {
    className?: string;
};

export const CtaBody: React.FC<Props> = ({className}) => {
    return (
        <div className={cn("flex flex-col gap-12.5 p-12.5 items-center lg:flex-row lg:gap-25 py-20 px-15 2xl:py-25 2xl:px-20", className)}>
            <div className='flex flex-col gap-2.5 items-center lg:items-start 2xl:gap-3.5'>
                <h2 className='font-bold text-2xl text-center md:text-3xl lg:text-start 2xl:text-5xl'>Start your free trial today!</h2>
                <p className='text-neutral-500 text-sm text-center md:text-lg lg:text-start'>This is a clear and concise call to action that encourages users to sign up for a free trial of CinemaStreamBox</p>
            </div>
            <Button className='h-[49px] md:h-[63px]'>Start a Free Trail</Button>
        </div>
    );
};