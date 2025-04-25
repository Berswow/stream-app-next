import React from "react";
import {cn} from "@/shared/lib/utils";
import {Button} from "@/shared/ui/button";

type Props = {
    className?: string;
    plan?: string;
    description?: string;
    monthlyPrice?: number;
    annualPrice?: number;
};

export const PlanCard: React.FC<Props> = ({className, plan, annualPrice, monthlyPrice, description}) => {
    return (
        <div className={cn("flex flex-col gap-7.5 p-6 bg-neutral-800 rounded-2xl md:p-10 md:gap-10 2xl:p-12.5 2xl:gap-12.5", className)}>
            <div className='flex flex-col gap-2.5 md:gap-3 2xl:gap-4'>
                <h3 className='text-lg font-bold md:text-xl 2xl:text-2xl'>{plan}</h3>
                <p className='text-sm text-neutral-400 md:text-base 2xl:text-lg'>{description}</p>
            </div>
            <div>
                <p className='text-2xl font-semibold md:text-3xl 2xl:text-4xl'>${monthlyPrice}<span className='text-neutral-400 text-sm font-medium md:text-base 2xl:text-lg'>/month</span></p>
            </div>
            <div className='flex gap-3 items-center justify-between 2xl:gap-5'>
                <Button variant='outline' className='h-[49px] 2xl:h-[63px]'>Start Free Trial</Button>
                <Button className='h-[49px] 2xl:h-[63px]'>Choose Plan</Button>
            </div>
        </div>
    );
};