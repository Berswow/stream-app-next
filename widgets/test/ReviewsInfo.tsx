import {FC} from "react";
import {cn} from "@/shared/lib/utils";

type Props = {
    className?: string;
};

export const ReviewsInfo: FC<Props> = ({className}) => {
    return (
        <div
            className={cn("flex flex-col gap-2 p-6 rounded-2xl border-neutral-700 border-1 bg-neutral-800 lg:p-10 lg:gap-2.5 2xl:p-12.5 2xl:gap-3.5", className)}>
            <h4 className='font-medium text-sm text-neutral-500 lg:text-base 2xl:text-lg'>Reviews</h4>

            <div className='flex flex-col gap-4 lg:flex-row 2xl:gap-5'>

                <div className='flex flex-col gap-4 p-6 rounded-2xl border-neutral-700 border-1 bg-neutral-900 lg:p-7.5 2xl:p-10 2xl:gap-5'>
                    <div className='flex justify-between items-center'>
                        <p className='font-medium lg:text-lg 2xl:text-xl'>Aniket Roy</p>
                        <p className='text-yellow-300 font-medium text-sm lg:text-base 2xl:text-lg'>4.5</p>
                    </div>
                    <div>
                        <p className='text-sm text-neutral-500 lg:text-base 2xl:text-lg'>This movie was recommended to me by a very dear friend who went for the movie by herself. I
                            went to the cinemas to watch but had a houseful board so couldn’t watch it.</p>
                    </div>
                </div>

                <div className='flex flex-col gap-4 p-6 rounded-2xl border-neutral-700 border-1 bg-neutral-900 lg:p-7.5 2xl:p-10 2xl:gap-5'>
                    <div className='flex justify-between items-center'>
                        <p className='font-medium lg:text-lg 2xl:text-xl'>Aniket Roy</p>
                        <p className='text-yellow-300 font-medium text-sm lg:text-base 2xl:text-lg'>4.5</p>
                    </div>
                    <div>
                        <p className='text-sm text-neutral-500 lg:text-base 2xl:text-lg'>This movie was recommended to me by a very dear friend who went for the movie by herself. I
                            went to the cinemas to watch but had a houseful board so couldn’t watch it.</p>
                    </div>
                </div>

            </div>


        </div>
    );
};