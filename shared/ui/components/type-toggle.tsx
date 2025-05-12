'use client'

import React from "react";
import {Button} from "@/shared/ui/button";
import {selectType, setType} from "@/store/slices/typeSlice";
import {useAppDispatch} from "@/store/store";
import {useSelector} from "react-redux";
import {cn} from '@/shared/lib/utils'

type Props = {
    className?: string;
};

export const TypeToggle: React.FC<Props> = ({className}) => {
    const dispatch = useAppDispatch()
    const currentType = useSelector(selectType)
    return (
        <div className={cn("my-container", className)}>
            <div className="flex items-center p-2 bg-black border-border border-1 rounded-xl 2xl:gap-3.5">
                <Button className={cn("w-full flex-1 h-[45px]", {
                    "bg-neutral-800": currentType === 'movies',
                    "bg-transparent w-full flex-1 h-[45px]": currentType === 'tvShows',
                })} onClick={() => dispatch(setType('movies'))}>
                    <span>Movies</span>
                </Button>

                <Button className={cn("w-full flex-1 h-[45px]", {
                    "bg-neutral-800": currentType === 'tvShows',
                    "bg-transparent w-full flex-1 h-[45px]": currentType === 'movies',
                })} onClick={() => dispatch(setType('tvShows'))}>
                    <span>TvShows</span>
                </Button>
            </div>
        </div>
    );
};