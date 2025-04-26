import React from "react";
import {cn} from "@/shared/lib/utils";
import {Separator} from "@/shared/ui/separator";
import Image from "next/image";
import facebookImg from '@/shared/assets/icons/facebook-icon.svg'
import twitterImg from '@/shared/assets/icons/twitter-icon.svg'
import linkedInImg from '@/shared/assets/icons/linkedIn-icon.svg'

type Props = {
    className?: string;
};
const footerSections = [
    { title: "Home", links: ["Categories", "Devices", "Pricing", "FAQ"] },
    { title: "Movies", links: ["Categories", "Devices", "Pricing", "FAQ"] },
    { title: "Shows", links: ["Categories", "Devices", "Pricing", "FAQ"] },
    { title: "Support", links: ["Categories", "Devices", "Pricing", "FAQ"] },
    { title: "Subscription", links: ["Categories", "Devices", "Pricing", "FAQ"] },
];

const socialIcons = [
    { src: facebookImg, alt: "facebook" },
    { src: twitterImg, alt: "twitter" },
    { src: linkedInImg, alt: "linkedIn" },
];

export const Footer: React.FC<Props> = ({ className }) => {
    return (
        <div className={cn("bg-neutral-950", className)}>
            <div className='my-container'>
                <div className="grid grid-cols-2 gap-7.5 pt-12.5 pb-6 lg:flex justify-between lg:pt-20 lg:pb-15 2xl:pt-25 2xl:pb-20">
                    {footerSections.map((section) => (
                        <div key={section.title} className="flex flex-col gap-4 lg:gap-5 2xl:gap-6">
                            <h5 className="font-semibold md:text-lg 2xl:text-xl">{section.title}</h5>
                            <div className="flex flex-col gap-2 text-neutral-400 text-sm font-medium md:text-base lg:gap-2.5 2xl:gap-3.5 2xl:text-lg">
                                {section.links.map((link) => (
                                    <p key={link}>{link}</p>
                                ))}
                            </div>
                        </div>
                    ))}

                    <div className="flex flex-col gap-4 lg:gap-5 2xl:gap-6">
                        <h5 className="font-semibold md:text-lg 2xl:text-xl">Connect With Us</h5>
                        <div className="flex gap-2.5 2xl:gap-3.5">
                            {socialIcons.map((icon) => (
                                <div
                                    key={icon.alt}
                                    className="flex justify-center items-center h-[44px] w-[44px] rounded-md bg-neutral-800 border-neutral-700 border-1 2xl:h-[56px] 2xl:w-[56px]"
                                >
                                    <Image src={icon.src} alt={icon.alt} width={0} height={0} className='h-5 w-5 2xl:h-6 2xl:w-6'/>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div>
                    <Separator className="my-4" />
                    <div className="flex flex-col gap-5 lg:flex-row justify-between pb-10 2xl:pb-12.5">
                        <div className="space-y-1">
                            <h5 className="text-sm font-medium leading-none text-neutral-400 2xl:text-lg">@2025 streamvib, All Rights Reserved</h5>
                        </div>
                        <div className="flex h-5 items-center space-x-4 text-sm text-neutral-400 lg:space-x-6 2xl:text-lg 2xl:space-x-8">
                            <div>Terms of Use</div>
                            <Separator orientation="vertical" />
                            <div>Privacy Policy</div>
                            <Separator orientation="vertical" />
                            <div>Cookie Policy</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};