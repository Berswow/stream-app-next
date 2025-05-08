"use client"

import {SupportForm, SupportHero} from "@/widgets/Support";

export default function Support() {
    return (
        <div className='my-container flex flex-col gap-12.5 lg:flex-row items-center 2xl:gap-20 mt-30 sm:mt-35 md:mt-40 lg:mt-45 2xl:mt-50'>
            <SupportHero/>
            <SupportForm className='flex-3/4'/>
        </div>
    );
};