"use client"

import { useState } from "react"
import {Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger} from "@/shared/ui/sheet"
import { Menu } from "lucide-react"
import Link from "next/link"
import {Button} from "@/shared/ui/button";

const tabs = [
    {id: 'home', label: 'Home', link: '/'},
    {id: 'movies', label: 'Movies & Shows', link: '/movies-shows'},
    {id: 'series', label: 'Support', link: '/support'},
    {id: 'favorites', label: 'Subscriptions', link: '/subscriptions'},
]

export function BurgerMenu() {
    const [open, setOpen] = useState(false)

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger className="flex items-center justify-center h-12 w-12 bg-foreground rounded-md border-border border-3 hover:bg-accent transition-colors ">
                <Menu size={24} className="" />
            </SheetTrigger>
            <SheetContent side="right" className="w-[250px] sm:w-[300px] bg-background border-r">
                <SheetHeader className='flex items-center justify-between mb-6'>
                    <SheetTitle className='sr-only text-lg text-white font-semibold'>Navigation Menu</SheetTitle>
                    <SheetDescription className='sr-only'>
                        Use those links to navigate through the website
                    </SheetDescription>
                </SheetHeader>

                <nav className="flex flex-col items-center justify-center h-1/3 gap-4 mr-5">

                {tabs.map(tab => (
                    <Link
                        key={tab.id}
                        href={tab.link}
                        onClick={() => setOpen(false)}
                        className="text-sm hover:text-primary transition-colors"
                    >
                        <Button className='bg-neutral-800 active:scale-95'>{tab.label}</Button>

                    </Link>
                ))}
                </nav>
            </SheetContent>
        </Sheet>
    )
}
