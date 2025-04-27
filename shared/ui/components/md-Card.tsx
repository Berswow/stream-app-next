import {FC, useState} from "react";
import {cn} from "@/shared/lib/utils";
import {MdCardSkeleton} from "@/shared/skeletons/MdCardSkeleton";
import {Clock3, Eye} from "lucide-react";

type Props = {
    className?: string;
};

export const MdCard: FC<Props> = ({className}) => {
    const [isCard, setIsCard] = useState(true);

    return (
        <div className={cn("", className)}>
            {!isCard ? <MdCardSkeleton/> :

                <div
                    className='w-[181] h-[259] lg:w-[224px] lg:h-[308px] 2xl:w-[283px] 2xl:h-[377px] flex flex-col items-center justify-between p-3 bg-neutral-800 rounded-xl border-neutral-700 border-1'>
                    <div className='flex flex-col justify-between gap-3'>
                        <div>
                            <div className='w-[157px] h-[195px] rounded-xl bg-neutral-500 lg:w-[192px] lg:h-[232px] 2xl:w-[243px] 2xl:h-[281px]'/>
                        </div>
                        <div className='flex justify-between items-center'>
                            <div className='flex items-center gap-1 px-1.5 py-1 bg-neutral-900 rounded-full border-neutral-700 border-1'>
                                <Clock3 className='h-5 w-5 lg:h-6 lg:w-6 2xl:h-7.5 2xl:w-7.5'/><p className=' font-semibold text-xs lg:text-base 2xl:text-lg'>1h 30min</p>
                            </div>
                            <div className='flex items-center gap-1 bg-neutral-900 rounded-full px-1.5 py-1 border-neutral-700 border-1'>
                                <Eye className='h-5 w-5 lg:h-6 lg:w-6 2xl:h-7.5 2xl:w-7.5'/><p className='text-xs'>2K</p>
                            </div>

                        </div>
                    </div>

                </div>
            }
        </div>
    );
};