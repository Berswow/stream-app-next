"use client"

import {FC, useState} from "react";
import {cn} from "@/shared/lib/utils";
import {Button} from "@/shared/ui/button";
import {table} from "@/shared/lib/subscription-data";

type Props = {
    className?: string;
};

const buttons = ['Basic', 'Standard', 'Premium'] as const
type PlanType = (typeof buttons)[number];

export const SubscriptionsMobile: FC<Props> = ({className}) => {
    const [selectedPlan, setSelectedPlan] = useState<PlanType>("Standard")

    const getValue = (feature: string) => {
        const item = table.find((el) => el.name === feature);
        if (!item) return "-";
        return item[selectedPlan.toLowerCase() as "basic" | "standard" | "premium"];
    };


    return (
        <div className={cn("flex flex-col gap-10", className)}>
            <div className='flex flex-col gap-2'>
                <h2 className='font-bold text-2xl'>Compare our plans and find the right one for you</h2>
                <div>
                    <p className='text-sm text-neutral-500'>StreamVibe offers three different plans to fit your needs:
                        Basic, Standard, and Premium. Compare
                        the features of each plan and choose the one that&#39;s right for you.</p>
                </div>
            </div>

            <div className='flex flex-col gap-5'>
                <div className="flex items-center p-2 bg-black border-border border-1 rounded-xl 2xl:gap-3.5">
                    {buttons.map((plan, index) => {
                        return (
                            <Button key={index}
                                    className={cn(selectedPlan === plan ? 'bg-neutral-800' : 'bg-transparent', 'w-full flex-1 h-[45px]')}
                                    onClick={() => setSelectedPlan(plan)}>
                                {plan}
                            </Button>
                        )
                    })}
                </div>

                <div className='flex flex-col gap-6 p-6 bg-black border-border border-1 rounded-xl'>
                    <div className='flex gap-5'>
                        <div className='flex flex-col gap-1 flex-1/2'>
                            <p className='text-sm font-medium text-neutral-500'>Price</p>
                            <p className='text-sm font-medium'>{getValue("Price")}</p>
                        </div>
                        <div className='flex flex-col gap-1 flex-1/2'>
                            <p className='text-sm font-medium text-neutral-500'>Free Trail</p>
                            <p className='text-sm font-medium'>{getValue("Free Trial")}</p>
                        </div>
                    </div>

                    <div className='flex flex-col gap-1'>
                        <p className='text-sm font-medium text-neutral-500'>Content</p>
                        <p className='text-sm font-medium'>{getValue("Content")}</p>
                    </div>

                    <div className='flex flex-col gap-1'>
                        <p className='text-sm font-medium text-neutral-500'>Devices</p>
                        <p className='text-sm font-medium'>{getValue("Devices")}</p>
                    </div>

                    <div className='flex gap-5'>
                        <div className='flex flex-col gap-1 flex-1/2'>
                            <p className='text-sm font-medium text-neutral-500'>Cancel Anytime</p>
                            <p className='text-sm font-medium'>{getValue("Cancel Anytime")}</p>
                        </div>
                        <div className='flex flex-col gap-1 flex-1/2'>
                            <p className='text-sm font-medium text-neutral-500'>HDR</p>
                            <p className='text-sm font-medium'>{getValue("HDR")}</p>
                        </div>
                    </div>

                    <div className='flex gap-5'>
                        <div className='flex flex-col gap-1 flex-1/2'>
                            <p className='text-sm font-medium text-neutral-500'>Dolby Atmos</p>
                            <p className='text-sm font-medium'>{getValue("Dolby Atmos")}</p>
                        </div>
                        <div className='flex flex-col gap-1 flex-1/2'>
                            <p className='text-sm font-medium text-neutral-500'>Ad-Free</p>
                            <p className='text-sm font-medium'>{getValue("Ad-Free")}</p>
                        </div>
                    </div>

                    <div className='flex gap-5'>
                        <div className='flex flex-col gap-1 flex-1/2'>
                            <p className='text-sm font-medium text-neutral-500'>Offline Viewing</p>
                            <p className='text-sm font-medium'>{getValue("Offline Viewing")}</p>
                        </div>
                        <div className='flex flex-col gap-1 flex-1/2'>
                            <p className='text-sm font-medium text-neutral-500'>Family Sharing</p>
                            <p className='text-sm font-medium'>{getValue("Family Sharing")}</p>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};