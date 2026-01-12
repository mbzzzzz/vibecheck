import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-black/50 backdrop-blur-xl">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                <Link href="/" className="flex items-center space-x-2">
                    <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
                        VibeCheck.ai
                    </span>
                </Link>

                <div className="hidden md:flex items-center space-x-8">
                    <Link href="#features" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">
                        Features
                    </Link>
                    <Link href="#pricing" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">
                        Pricing
                    </Link>
                </div>

                <div className="flex items-center space-x-4">
                    <Link href="/login">
                        <Button variant="ghost" size="sm">Log In</Button>
                    </Link>
                    <Link href="/signup">
                        <Button size="sm">Get Started</Button>
                    </Link>
                </div>
            </div>
        </nav>
    )
}
