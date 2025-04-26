"use client"

import {Button} from "@/shared/ui/button";
import {Play} from "lucide-react";

export const HeroTitle = () => {
    return (
        <div className='my-container'>
            <div className='flex flex-col items-center gap-7.5 -mt-15 lg:gap-10 2xl:gap-12.5'>
                <div className='flex flex-col items-center gap-3.5 text-center'>
                    <h1 className='font-bold text-3xl lg:text-5xl 2xl:text-6xl'>The Best Streaming Experience</h1>
                    <p className='text-neutral-500 text-sm 2xl:text-lg'>CinemaStreamBox is the best streaming experience for watching your
                        favorite movies and shows on demand, anytime, anywhere.</p>
                </div>

                <Button variant='default' className='h-[52px] rounded-md 2xl:h-[64px] w-[251px]'>
                    <Play fill='white'/>
                    Start Watching Now</Button>
            </div>
        </div>
    );
};