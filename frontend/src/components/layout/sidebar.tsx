"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
    const pathname = usePathname();

    const isActive = (path: string) => {
        return pathname === path;
    };

    return (
        <aside className="hidden md:flex flex-col w-72 h-full bg-white dark:bg-[#16162c] border-r border-[#e6e6ef] dark:border-[#2b2b40] justify-between shrink-0 transition-colors duration-300 z-20">
            <div className="flex flex-col flex-1 px-6 py-8 overflow-y-auto scrollbar-hide">
                {/* Logo Header */}
                <div className="flex items-center gap-3 mb-10">
                    <div className="relative w-20 h-20 overflow-hidden">
                        <img
                            src="/logo.png"
                            alt="VibeCheck Logo"
                            className="object-contain w-full h-full scale-125"
                        />
                    </div>
                    <div className="flex flex-col">
                        <h1 className="text-xl font-bold leading-none tracking-tight text-[#111118] dark:text-white">
                            VibeCheck.ai
                        </h1>
                        <p className="text-xs text-[#60608a] dark:text-[#9494b8] font-medium mt-1">
                            Brand Consistency
                        </p>
                    </div>
                </div>

                {/* Primary Action */}
                <button className="group flex w-full cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg h-12 bg-primary text-white shadow-md shadow-primary/20 hover:bg-blue-700 hover:shadow-primary/40 transition-all duration-300 mb-8">
                    <span className="material-symbols-outlined text-xl transition-transform group-hover:scale-110">
                        add_circle
                    </span>
                    <span className="text-sm font-bold tracking-wide">New Scan</span>
                </button>

                {/* Navigation Menu */}
                <nav className="flex flex-col gap-2">
                    <Link
                        href="/dashboard"
                        className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${isActive("/dashboard")
                            ? "bg-primary/10 dark:bg-primary/20 border-l-4 border-primary"
                            : "hover:bg-[#f0f0f5] dark:hover:bg-[#202038] group"
                            }`}
                    >
                        <span
                            className={`material-symbols-outlined ${isActive("/dashboard")
                                ? "text-primary fill-1"
                                : "text-[#60608a] dark:text-[#9494b8] group-hover:text-[#111118] dark:group-hover:text-white"
                                }`}
                            style={isActive("/dashboard") ? { fontVariationSettings: "'FILL' 1" } : {}}
                        >
                            grid_view
                        </span>
                        <span
                            className={`text-sm ${isActive("/dashboard")
                                ? "text-primary font-bold"
                                : "font-medium text-[#60608a] dark:text-[#9494b8] group-hover:text-[#111118] dark:group-hover:text-white"
                                }`}
                        >
                            Overview
                        </span>
                    </Link>

                    <Link
                        href="/dashboard/analytics"
                        className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${isActive("/dashboard/analytics")
                            ? "bg-primary/10 dark:bg-primary/20 border-l-4 border-primary"
                            : "hover:bg-[#f0f0f5] dark:hover:bg-[#202038] group"
                            }`}
                    >
                        <span
                            className={`material-symbols-outlined ${isActive("/dashboard/analytics")
                                ? "text-primary fill-1"
                                : "text-[#60608a] dark:text-[#9494b8] group-hover:text-[#111118] dark:group-hover:text-white"
                                }`}
                            style={isActive("/dashboard/analytics") ? { fontVariationSettings: "'FILL' 1" } : {}}
                        >
                            bar_chart
                        </span>
                        <span
                            className={`text-sm ${isActive("/dashboard/analytics")
                                ? "text-primary font-bold"
                                : "font-medium text-[#60608a] dark:text-[#9494b8] group-hover:text-[#111118] dark:group-hover:text-white"
                                }`}
                        >
                            Analytics
                        </span>
                    </Link>

                    <Link
                        href="/dashboard/quick-wins"
                        className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${isActive("/dashboard/quick-wins")
                            ? "bg-primary/10 dark:bg-primary/20 border-l-4 border-primary"
                            : "hover:bg-[#f0f0f5] dark:hover:bg-[#202038] group"
                            }`}
                    >
                        <span
                            className={`material-symbols-outlined ${isActive("/dashboard/quick-wins")
                                ? "text-primary fill-1"
                                : "text-[#60608a] dark:text-[#9494b8] group-hover:text-[#111118] dark:group-hover:text-white"
                                }`}
                            style={isActive("/dashboard/quick-wins") ? { fontVariationSettings: "'FILL' 1" } : {}}
                        >
                            bolt
                        </span>
                        <span
                            className={`text-sm ${isActive("/dashboard/quick-wins")
                                ? "text-primary font-bold"
                                : "font-medium text-[#60608a] dark:text-[#9494b8] group-hover:text-[#111118] dark:group-hover:text-white"
                                }`}
                        >
                            Quick Wins
                        </span>
                    </Link>

                    <Link
                        href="/dashboard/settings"
                        className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${isActive("/dashboard/settings")
                            ? "bg-primary/10 dark:bg-primary/20 border-l-4 border-primary"
                            : "hover:bg-[#f0f0f5] dark:hover:bg-[#202038] group"
                            }`}
                    >
                        <span
                            className={`material-symbols-outlined ${isActive("/dashboard/settings")
                                ? "text-primary fill-1"
                                : "text-[#60608a] dark:text-[#9494b8] group-hover:text-[#111118] dark:group-hover:text-white"
                                }`}
                            style={isActive("/dashboard/settings") ? { fontVariationSettings: "'FILL' 1" } : {}}
                        >
                            settings
                        </span>
                        <span
                            className={`text-sm ${isActive("/dashboard/settings")
                                ? "text-primary font-bold"
                                : "font-medium text-[#60608a] dark:text-[#9494b8] group-hover:text-[#111118] dark:group-hover:text-white"
                                }`}
                        >
                            Settings
                        </span>
                    </Link>
                </nav>
            </div>

            {/* Bottom Section: Usage Widget & User Profile */}
            <div className="px-6 pb-6 flex flex-col gap-6">
                {/* Pro Plan Usage Widget */}
                <div className="flex flex-col gap-3 p-4 rounded-xl bg-[#f5f5f8] dark:bg-[#1f1f35] border border-[#e6e6ef] dark:border-[#2b2b40]">
                    <div className="flex gap-2 justify-between items-center">
                        <p className="text-[#111118] dark:text-white text-sm font-bold">
                            Free Plan Usage
                        </p>
                        <p className="text-[#60608a] dark:text-[#9494b8] text-xs font-semibold">
                            12/30
                        </p>
                    </div>
                    {/* Progress Bar */}
                    <div className="relative h-2 w-full rounded-full bg-[#dbdbe6] dark:bg-[#2b2b40] overflow-hidden">
                        <div
                            className="absolute top-0 left-0 h-full rounded-full bg-primary"
                            style={{ width: "40%" }}
                        ></div>
                    </div>
                    <Link href="#" className="flex items-center justify-between group">
                        <p className="text-[#60608a] dark:text-[#9494b8] text-xs font-normal">
                            Upgrade for unlimited
                        </p>
                        <span className="text-primary text-xs font-bold underline decoration-primary/30 underline-offset-2 group-hover:decoration-primary transition-all">
                            Get Pro
                        </span>
                    </Link>
                </div>

                {/* User Profile Snippet */}
                <div className="flex items-center gap-3 pt-4 border-t border-[#e6e6ef] dark:border-[#2b2b40]">
                    <div className="relative">
                        <div
                            className="bg-center bg-no-repeat bg-cover rounded-full size-10 border-2 border-white dark:border-[#2b2b40] shadow-sm"
                            style={{
                                backgroundImage:
                                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAptc9XtjyoT31pm5yZj8hUxs0l92q6Dc24jTQfGKGY__ajzsMpdN8yE2_qxj4U95NJgiTzb3C1nJERBUrT-SoDL2S2hpd5ZsFCMuzM9WfZKMII-2hCTriZ1yO_5UqHQ2ItJiCHlGPOPJp9I66gk4ldWHAv85tHKGwXFdxyawBc64ap0lHVXcOfz338HAul791pVHHPPvS4URHldPiL_HFVFyk2QjPYk1Ao7poRDa1OH1MSsIaTw_-pIPT9QYy-Mw0zjxew_cmhwK8")',
                            }}
                        ></div>
                        <div className="absolute bottom-0 right-0 size-3 bg-green-500 border-2 border-white dark:border-[#16162c] rounded-full"></div>
                    </div>
                    <div className="flex flex-col overflow-hidden">
                        <p className="text-[#111118] dark:text-white text-sm font-bold truncate">
                            Alex Creator
                        </p>
                        <p className="text-[#60608a] dark:text-[#9494b8] text-xs truncate">
                            alex@vibecheck.ai
                        </p>
                    </div>
                    <button className="ml-auto text-[#60608a] hover:text-[#111118] dark:hover:text-white">
                        <span className="material-symbols-outlined text-xl">logout</span>
                    </button>
                </div>
            </div>
        </aside>
    );
}
