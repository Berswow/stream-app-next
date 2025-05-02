import {FC} from "react";
import {cn} from "@/shared/lib/utils";
import {Clock3, Star} from "lucide-react";
import {MovieInterface} from "@/shared/types/Movie/MovieBaseInterface";
import Image from "next/image";

type Props = {
    className?: string;
    movie?: MovieInterface;
};

export const XlCard: FC<Props> = ({className, movie}) => {

    return (
        <div className={cn("", className)}>
                <div
                    className='w-[231px] h-[303px] lg:w-[285px] lg:h-[404px] 2xl:w-[359px] 2xl:h-[500px] flex flex-col items-center justify-between p-3 lg:p-4 2xl:p-5 bg-neutral-800 rounded-xl border-neutral-700 border-1'>
                    <div className='flex flex-col justify-between gap-3 lg:gap-4 2xl:gap-5'>
                        <div className='relative w-[207px] h-[235px] rounded-xl bg-neutral-500 lg:w-[253px] lg:h-[324px] 2xl:w-[319px] 2xl:h-[404px]'>
                            <Image
                                src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
                                alt={movie?.title || "Movie poster"}
                                sizes="(max-width: 768px) 207px, (max-width: 1024px) 253px, 319px"
                                className='object-cover rounded-xl'
                                fill
                            />
                        </div>
                        <div className='flex justify-between items-center'>
                            <div className='flex items-center gap-1 px-1.5 py-1 bg-neutral-900 rounded-full border-neutral-700 border-1'>
                                <Clock3 className='text-neutral-400 h-5 w-5 lg:h-6 lg:w-6 2xl:h-7.5 2xl:w-7.5'/><p className='font-medium text-neutral-400 text-xs 2xl:text-base'>1h 30min</p>
                            </div>
                            <div className='flex items-center gap-1 bg-neutral-900 rounded-full px-1.5 py-1 border-neutral-700 border-1'>
                                <div className='flex items-center'>
                                    <Star className='fill-orange-600 stroke-0 h-3.5 w-3.5 lg:h-4 lg:w-4 2xl:h-7.5 2xl:w-7.5'/>
                                    <Star className='fill-orange-600 stroke-0 h-3.5 w-3.5 lg:h-4 lg:w-4 2xl:h-7.5 2xl:w-7.5'/>
                                    <Star className='fill-orange-600 stroke-0 h-3.5 w-3.5 lg:h-4 lg:w-4 2xl:h-7.5 2xl:w-7.5'/>
                                    <Star className='fill-orange-600 stroke-0 h-3.5 w-3.5 lg:h-4 lg:w-4 2xl:h-7.5 2xl:w-7.5'/>
                                    <Star className='fill-orange-600 stroke-0 h-3.5 w-3.5 lg:h-4 lg:w-4 2xl:h-7.5 2xl:w-7.5'/>
                                </div>
                                <p className='text-xs text-neutral-400 font-medium 2xl:text-base'>2K</p>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
};