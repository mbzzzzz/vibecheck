"use client"

import { Search, Bell, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
    return (
        <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b border-white/5 bg-black/50 px-6 backdrop-blur-xl">
            <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
            </Button>

            <div className="flex flex-1 items-center gap-4 md:gap-8">
                <div className="relative flex-1 max-w-md hidden md:block">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                    <input
                        type="search"
                        placeholder="Search vibes, platforms, or commands..."
                        className="h-9 w-full rounded-md border border-white/10 bg-white/5 pl-9 pr-4 text-sm text-white focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-all font-mono placeholder:font-sans"
                    />
                    <div className="absolute right-2 top-2 hidden lg:flex h-5 items-center gap-1 rounded border border-white/10 bg-white/5 px-1.5 font-mono text-[10px] text-gray-400">
                        <span>⌘</span>
                        <span>K</span>
                    </div>
                </div>
            </div>

            <div className="flex items-center gap-4">
                <Button variant="ghost" size="icon" className="relative text-gray-400 hover:text-white">
                    <Bell className="h-5 w-5" />
                    <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-red-500 ring-2 ring-black" />
                </Button>
                <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-purple-500 to-blue-500 ring-2 ring-white/10" />
            </div>
        </header>
    )
}
