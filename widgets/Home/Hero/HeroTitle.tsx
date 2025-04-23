"use client"

import {Button} from "@/shared/ui/button";

export const HeroTitle = () => {
    return (
        <section className='container mx-auto p-4 flex flex-col items-center gap-12 -mt-15'>
            <div className='flex flex-col items-center gap-3.5 text-center'>
                <h1 className='font-bold text-3xl'>The Best Streaming Experience</h1>
                <p className='text-neutral-500'>CinemaStreamBox is the best streaming experience for watching your
                    favorite movies and shows on demand, anytime, anywhere.</p>
            </div>
            <Button variant='default' className='h-[64px] rounded-xl'>
                <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd"
                          d="M0.75 2.59479C0.75 0.930971 2.53383 -0.123757 3.9917 0.678068L17.4557 8.08328C18.9668 8.91436 18.9668 11.0856 17.4557 11.9167L3.9917 19.3219C2.53383 20.1238 0.75 19.069 0.75 17.4052V2.59479Z"
                          fill="white"/>
                </svg>
                Start Watching Now</Button>
        </section>
    );
};