import React from "react";
import { cn } from "@/shared/lib/utils";
import ctaDesktop from "@/shared/assets/CTA/ctaDesktop.png";
import ctaLaptop from "@/shared/assets/CTA/ctaLaptop.png";
import ctaMobile from "@/shared/assets/CTA/ctaMobile.png";
import Image from "next/image";
import { CtaBody } from "@/widgets/CTA/CtaBody";

type Props = {
    className?: string;
};

export const Cta: React.FC<Props> = ({ className }) => {
    return (
        <div className={cn("my-container", className)}>
            <div className="relative w-full rounded-2xl overflow-hidden border-border border-2">

                <picture>
                    <source media="(min-width: 1280px)" srcSet={ctaDesktop.src} />
                    <source media="(min-width: 1024px)" srcSet={ctaLaptop.src} />
                    <Image
                        src={ctaMobile}
                        alt="heroimg"
                        placeholder="blur"
                        quality={90}
                        priority
                        className="w-full object-cover"
                    />
                </picture>


                <div className="absolute top-0 left-0 w-full h-full z-10 flex items-center justify-center">
                    <CtaBody />
                </div>
            </div>
        </div>
    );
};
