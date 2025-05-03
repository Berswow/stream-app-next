import {FC} from "react";
import {cn} from "@/shared/lib/utils";

type Props = {
    className?: string;
};

export const DescriptionInfo: FC<Props> = ({className}) => {
    return (
        <div className={cn("flex flex-col gap-2 p-6 rounded-2xl border-neutral-700 border-1 bg-neutral-800 lg:p-10 lg:gap-2.5 2xl:p-12.5 2xl:gap-3.5", className)}>
            <h4 className='font-medium text-sm text-neutral-500 lg:text-base 2xl:text-lg'>Description</h4>
            <div>
                <p className='font-medium text-sm lg:text-base 2xl:text-lg'>A fiery young man clashes with an unflinching forest officer in a south Indian village where
                    spirituality, fate and folklore rule the lands.</p>
            </div>
        </div>
    );
};