import React from "react";
import {cn} from "@/shared/lib/utils";
import {HomeTitle} from "@/shared/ui/components/home-title";
import {DeviceCard} from "@/shared/ui/components/cards/device-card";
import {Gamepad2, Laptop, RectangleGoggles, Smartphone, Tablet, Tv} from "lucide-react";

type Props = {
    className?: string;
};

const devices = [
    {
        title: 'Smartphones',
        description: 'StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store',
        icon: <Smartphone className="text-primary"/>,
    },
    {
        title: 'Tablets',
        description: 'StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store',
        icon: <Tablet className="text-primary"/>,
    },
    {
        title: 'Smart TV',
        description: 'StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store',
        icon: <Tv className="text-primary"/>,
    },
    {
        title: 'Laptops',
        description: 'StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store',
        icon: <Laptop className="text-primary"/>,
    },
    {
        title: 'Gaming Consoles',
        description: 'StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store',
        icon: <Gamepad2 className="text-primary"/>,
    },
    {
        title: 'VR Headsets ',
        description: 'StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store',
        icon: <RectangleGoggles className="text-primary"/>,
    }
]

export const DevicesList: React.FC<Props> = ({className}) => {
    return (
        <div className={cn("my-container", className)}>
            <HomeTitle title='Explore our wide variety of categories' description="Whether you' re looking for a comedy
                       to make you laugh, a drama to make you think, or a documentary to learn something new"/>

            <div className='flex flex-col gap-5 sm:grid grid-cols-2 sm:gap-4 xl:grid-cols-3 xl:gap-4 2xl:gap-7.5'>
                {devices.map((device, index) => (
                    <DeviceCard title={device.title}
                                description={device.description}
                                icon={device.icon}
                                key={index}/>

                ))}
            </div>
        </div>
    );
};