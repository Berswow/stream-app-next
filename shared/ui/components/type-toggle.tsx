import React from "react";
import {cn} from "@/shared/lib/utils";
import {Button} from "@/shared/ui/button";

type Props = {
    className?: string;
};

export const TypeToggle: React.FC<Props> = ({className}) => {
    return (
        <div className={cn("my-container", className)}>
            <div className="flex items-center p-2 bg-black border-border border-1 rounded-xl 2xl:gap-3.5">
                {[...new Array(2)].map((tab, index) => {
                    return (
                            <Button key={index} className='bg-neutral-800 w-full flex-1 h-[45px]'>
                                text
                            </Button>
                    )
                })}
            </div>
        </div>
    );
};