import {FC} from "react";
import {cn} from "@/shared/lib/utils";

type Props = {
    className?: string;
};

export const CastInfo: FC<Props> = ({className}) => {
    return (
        <div className={cn("flex flex-col gap-2 p-6 rounded-2xl border-neutral-700 border-1 bg-neutral-800 lg:p-10 lg:gap-2.5 2xl:p-12.5 2xl:gap-3.5", className)}>
            <h4 className='font-medium text-sm text-neutral-500 lg:text-base 2xl:text-lg'>Cast</h4>

            <div className='flex gap-2.5'>

                <div className='flex flex-col items-center gap-0.5'>
                    <div className='w-[70px] h-[75px] bg-neutral-500 rounded-lg lg:w-[88px] lg:h-[89px] 2xl:w-[102px] 2xl:h-[109px]'>img</div>
                    <div className='flex flex-col items-center'>
                        <p className='font-medium text-sm lg:text-base 2xl:text-lg'>Name</p>
                        <p className='hidden md:block text-neutral-400 text-xs lg:text-sm 2xl:text-base'>Character</p>
                    </div>
                </div>

                <div className='flex flex-col items-center gap-0.5'>
                    <div className='w-[70px] h-[75px] bg-neutral-500 rounded-lg lg:w-[88px] lg:h-[89px] 2xl:w-[102px] 2xl:h-[109px]'>img</div>
                    <div className='flex flex-col items-center'>
                        <p className='font-medium text-sm lg:text-base 2xl:text-lg'>Name</p>
                        <p className='hidden md:block text-neutral-400 text-xs lg:text-sm 2xl:text-base'>Character</p>
                    </div>
                </div>

                <div className='flex flex-col items-center gap-0.5'>
                    <div className='w-[70px] h-[75px] bg-neutral-500 rounded-lg lg:w-[88px] lg:h-[89px] 2xl:w-[102px] 2xl:h-[109px]'>img</div>
                    <div className='flex flex-col items-center'>
                        <p className='font-medium text-sm lg:text-base 2xl:text-lg'>Name</p>
                        <p className='hidden md:block text-neutral-400 text-xs lg:text-sm 2xl:text-base'>Character</p>
                    </div>
                </div>

                <div className='flex flex-col items-center gap-0.5'>
                    <div className='w-[70px] h-[75px] bg-neutral-500 rounded-lg lg:w-[88px] lg:h-[89px] 2xl:w-[102px] 2xl:h-[109px]'>img</div>
                    <div className='flex flex-col items-center'>
                        <p className='font-medium text-sm lg:text-base 2xl:text-lg'>Name</p>
                        <p className='hidden md:block text-neutral-400 text-xs lg:text-sm 2xl:text-base'>Character</p>
                    </div>
                </div>

            </div>
        </div>
    );
};