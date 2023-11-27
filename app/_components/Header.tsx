'use client'
import Link from "next/link"
import { useSelectedLayoutSegment } from "next/navigation"
import { Icon } from '@iconify/react'

import useScroll from "../_hooks/use-scroll"
import { cn } from "../_lib/utils"

export default function Header() {
    const scrolled = useScroll(5)
    const selectedLayout = useSelectedLayoutSegment()

    return (
        <div
            className={cn(
                `sticky inset-x-0 top-0 z-30 w-full transition-all border-b border-gray-200`,
                {
                    'border-b border-gray-200 bg-white/75 backdrop-blur-lg': scrolled,
                    'border-b border-gray-200 bg-white': selectedLayout,
                },
            )}
        >
            <div className="flex h-[47px] items-center justify-between px-4">
                <div className="flex items-center space-x-4">
                    <Link
                        href="/"
                        className="flex flex-row space-x-3 items-center justify-center md:hidden"
                    >
                        <span className="font-bold text-xl flex ">LA ESCUELA DEL FOGÓN</span>
                    </Link>
                </div>

                <div className="hidden md:block">
                    <div className="h-8 w-8 rounded-full bg-zinc-300 flex items-center justify-center text-center">
                    <Icon icon='lucide:home' width='24' height='24' />
                    </div>
                </div>
            </div>
        </div>
    )
}