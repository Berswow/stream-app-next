import {Button} from "@/shared/ui/button";
import {Play, Plus, ThumbsUp, Volume2} from "lucide-react";


export const HeroBody = () => {
    return (
        <div className='my-container relative z-20'>
            <div className='flex flex-col items-center gap-5 -mt-55 lg:gap-6 2xl:gap-7.5'>
                <div className='flex flex-col items-center gap-3.5 text-center'>
                    <h1 className='font-bold text-2xl lg:text-3xl 2xl:text-4xl'>Avengers : Endgame</h1>
                    <p className='hidden text-neutral-500 text-sm md:block lg:text-base font-medium 2xl:text-lg'>CinemaStreamBox is the best streaming experience for watching your
                        favorite movies and shows on demand, anytime, anywhere.</p>
                </div>

                <div className='flex flex-col gap-5 md:flex-row'>
                    <Button variant='default' className='h-[52px] w-[310px] rounded-md md:w-[128px] 2xl:w-[157px] 2xl:h-[56px]'>
                        <Play fill='white'/>Play Now</Button>
                    <div className='flex justify-center items-center gap-2.5'>
                        <div className='bg-neutral-950 flex items-center justify-center w-12 h-12 p-3 rounded-md 2xl:w-14 2xl:h-14'><Plus /></div>
                        <div className='bg-neutral-950 flex items-center justify-center  w-12 h-12 p-3 rounded-md 2xl:w-14 2xl:h-14'><ThumbsUp /></div>
                        <div className='bg-neutral-950 flex items-center justify-center  w-12 h-12 p-3 rounded-md 2xl:w-14 2xl:h-14'><Volume2 /></div>
                    </div>
                </div>
            </div>
        </div>
    );
};