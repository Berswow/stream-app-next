import React from "react";
import {cn} from "@/shared/lib/utils";
import {HomeTitle} from "@/shared/ui/components/home-title";
import {DeviceCard} from "@/shared/ui/components/device-card";
import {Smartphone} from "lucide-react";

type Props = {
    className?: string;
};

export const DevicesList: React.FC<Props> = ({className}) => {
    return (
        <div className={cn("my-container", className)}>
            <HomeTitle title='Explore our wide variety of categories' description="Whether you' re looking for a comedy
                       to make you laugh, a drama to make you think, or a documentary to learn something new"/>
            <DeviceCard title='Smartphones'
                        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                        icon={<Smartphone className="text-primary"/>}/>
        </div>
    );
};