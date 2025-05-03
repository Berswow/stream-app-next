import {FC} from "react";
import {cn} from "@/shared/lib/utils";
import {Calendar, LayoutGrid, Music, Video} from "lucide-react";

type Props = {
    className?: string;
};

export const DetailsInfo: FC<Props> = ({className}) => {
    return (
        <div className={cn("flex flex-col gap-5 p-6 rounded-2xl border-neutral-700 border-1 bg-neutral-800 lg:p-10 lg:gap-6 2xl:p-12.5 2xl:gap-7.5", className)}>
        {/*  Released Date  */}

            <div className='flex flex-col gap-2.5 2xl:gap-3.5'>
                <div className='flex gap-0.5 text-neutral-500 items-center 2xl:gap-1'>
                    <Calendar className='h-[15px] w-[15px] 2xl:w-[18px] 2xl:h-[18px]'/><h4 className='font-medium text-sm lg:text-base 2xl:text-lg'>Released Date</h4>
                </div>
                <div>
                    <p className='font-semibold text-base lg:text-lg 2xl:text-xl'>2022</p>
                </div>
            </div>

        {/*  Genres  */}

            <div className='flex flex-col gap-2.5 2xl:gap-3.5'>
                <div className='flex gap-0.5 text-neutral-500 items-center 2xl:gap-1'>
                   <LayoutGrid className='h-[15px] w-[15px] 2xl:w-[18px] 2xl:h-[18px]'/><h4 className='font-medium text-sm lg:text-base 2xl:text-lg'>Genres</h4>
               </div>
               <div className='flex gap-2.5 flex-wrap'>
                   <div className='flex items-center py-1.5 px-3 border-neutral-700 border-1 bg-neutral-900 rounded-md 2xl:py-2 2xl:px-3.5'>
                       <p className='font-medium text-sm 2xl:text-lg'>Action</p>
                   </div>
               </div>
           </div>

        {/*  Director  */}

            <div className='flex flex-col gap-2.5 2xl:gap-3.5'>
                <div className='flex gap-0.5 text-neutral-500 items-center 2xl:gap-1'>
                    <Video className='h-[15px] w-[15px] 2xl:w-[18px] 2xl:h-[18px]'/><h4 className='font-medium text-sm lg:text-base 2xl:text-lg'>Director</h4>
                </div>
                <div className='flex flex-col gap-2 p-2.5 border-neutral-700 border-1 bg-neutral-900 rounded-xl lg:p-3 2xl:p-3.5'>
                    <div className='flex gap-2 items-center 2xl:gap-2.5'>
                        <div className='w-12.5 h-12.5 bg-neutral-500 rounded-lg 2xl:w-[56px] 2xl:h-[60px]'>img</div>
                        <p className='font-medium text-base 2xl:text-lg'>David Ayer</p>
                    </div>
                </div>
            </div>

        {/*  Producer  */}

            <div className='flex flex-col gap-2.5 2xl:gap-3.5'>
                <div className='flex gap-0.5 text-neutral-500 items-center 2xl:gap-1'>
                    <Music className='h-[15px] w-[15px] 2xl:w-[18px] 2xl:h-[18px]'/><h4 className='font-medium text-sm lg:text-base 2xl:text-lg'>Producer</h4>
                </div>
                <div className='flex flex-col gap-2 p-2.5 border-neutral-700 border-1 bg-neutral-900 rounded-xl lg:p-3 2xl:p-3.5'>
                    <div className='flex gap-2 items-center 2xl:gap-2.5'>
                        <div className='w-12.5 h-12.5 bg-neutral-500 rounded-lg 2xl:w-[56px] 2xl:h-[60px]'>img</div>
                        <p className='font-medium text-base 2xl:text-lg'>David Ayer</p>
                    </div>
                </div>
            </div>














        </div>
    );
};