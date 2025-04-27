"use client"

import { useState } from "react"
import { Sheet, SheetContent, SheetTrigger } from "@/shared/ui/sheet"
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
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-lg text-white font-semibold">Меню</h2>
                </div>
                <nav className="flex flex-col gap-4">

                {tabs.map(tab => (
                    <Link
                        key={tab.id}
                        href={tab.link}
                        onClick={() => setOpen(false)}
                        className="text-sm  hover:text-primary transition-colors"
                    >
                        <Button>{tab.label}</Button>

                    </Link>
                ))}
                </nav>
            </SheetContent>
        </Sheet>
    )
}
