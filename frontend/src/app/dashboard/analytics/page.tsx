"use client";

import React from "react";

export default function AnalyticsPage() {
    return (
        <main className="flex-1 flex flex-col h-full overflow-y-auto bg-background-light dark:bg-background-dark relative">
            <header className="sticky top-0 z-20 px-4 md:px-8 py-6 flex flex-col gap-6 bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md border-b border-[#e6e6ef] dark:border-[#2b2b40]">
                <div className="flex justify-between items-center">
                    <div>
                        <h2 className="text-2xl font-bold text-[#111118] dark:text-white">
                            Analytics
                        </h2>
                        <p className="text-[#60608a] dark:text-[#9494b8] text-sm mt-1">
                            Deep dive into your cross-platform metrics and consistency trends.
                        </p>
                    </div>
                    <div className="flex gap-3">
                        <button className="p-2 rounded-full bg-white dark:bg-[#1e1e2e] text-[#111118] dark:text-white shadow-sm border border-[#e6e6ef] dark:border-[#2b2b40] hover:bg-gray-50 dark:hover:bg-[#2b2b40] transition-colors">
                            <span className="material-symbols-outlined">notifications</span>
                        </button>
                        <button className="p-2 rounded-full bg-white dark:bg-[#1e1e2e] text-[#111118] dark:text-white shadow-sm border border-[#e6e6ef] dark:border-[#2b2b40] hover:bg-gray-50 dark:hover:bg-[#2b2b40] transition-colors">
                            <span className="material-symbols-outlined">help</span>
                        </button>
                    </div>
                </div>
                <div className="flex flex-wrap items-center gap-4">
                    <div className="relative">
                        <select className="pl-10 pr-8 py-2 bg-white dark:bg-[#1e1e2e] border border-[#e6e6ef] dark:border-[#2b2b40] rounded-lg text-sm font-medium text-[#111118] dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none appearance-none cursor-pointer shadow-sm">
                            <option>Last 7 Days</option>
                            <option defaultValue="Last 30 Days">Last 30 Days</option>
                            <option>Last 3 Months</option>
                            <option>Year to Date</option>
                        </select>
                        <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#60608a] text-lg pointer-events-none">
                            calendar_today
                        </span>
                        <span className="material-symbols-outlined absolute right-2 top-1/2 -translate-y-1/2 text-[#60608a] text-lg pointer-events-none">
                            expand_more
                        </span>
                    </div>
                    <div className="h-6 w-px bg-[#e6e6ef] dark:bg-[#2b2b40]"></div>
                    <div className="flex bg-white dark:bg-[#1e1e2e] p-1 rounded-lg border border-[#e6e6ef] dark:border-[#2b2b40] shadow-sm">
                        <button className="px-3 py-1.5 rounded-md bg-primary/10 text-primary text-sm font-bold shadow-sm">
                            All
                        </button>
                        <button className="px-3 py-1.5 rounded-md text-[#60608a] dark:text-[#9494b8] hover:bg-gray-50 dark:hover:bg-[#2b2b40] text-sm font-medium transition-colors">
                            Instagram
                        </button>
                        <button className="px-3 py-1.5 rounded-md text-[#60608a] dark:text-[#9494b8] hover:bg-gray-50 dark:hover:bg-[#2b2b40] text-sm font-medium transition-colors">
                            TikTok
                        </button>
                        <button className="px-3 py-1.5 rounded-md text-[#60608a] dark:text-[#9494b8] hover:bg-gray-50 dark:hover:bg-[#2b2b40] text-sm font-medium transition-colors">
                            LinkedIn
                        </button>
                        <button className="px-3 py-1.5 rounded-md text-[#60608a] dark:text-[#9494b8] hover:bg-gray-50 dark:hover:bg-[#2b2b40] text-sm font-medium transition-colors">
                            X
                        </button>
                    </div>
                    <button className="ml-auto flex items-center gap-2 text-primary text-sm font-semibold hover:text-blue-700 transition-colors">
                        <span className="material-symbols-outlined text-lg">download</span>
                        Export Report
                    </button>
                </div>
            </header>
            <div className="px-4 md:px-8 pb-12 flex flex-col gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
                    <div className="p-5 bg-white dark:bg-[#16162c] rounded-2xl border border-[#e6e6ef] dark:border-[#2b2b40] shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex justify-between items-start mb-4">
                            <div className="p-2 rounded-lg bg-primary/10 text-primary">
                                <span className="material-symbols-outlined">verified</span>
                            </div>
                            <span className="flex items-center text-xs font-bold text-green-600 bg-green-100 dark:bg-green-900/30 px-2 py-1 rounded-full">
                                <span className="material-symbols-outlined text-sm mr-1">
                                    trending_up
                                </span>{" "}
                                +2.4%
                            </span>
                        </div>
                        <h3 className="text-[#60608a] dark:text-[#9494b8] text-sm font-medium">
                            Vibe Score
                        </h3>
                        <p className="text-3xl font-bold text-[#111118] dark:text-white mt-1">
                            87
                            <span className="text-lg text-[#60608a] font-normal">/100</span>
                        </p>
                    </div>
                    <div className="p-5 bg-white dark:bg-[#16162c] rounded-2xl border border-[#e6e6ef] dark:border-[#2b2b40] shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex justify-between items-start mb-4">
                            <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/30 text-purple-600">
                                <span className="material-symbols-outlined">sync_alt</span>
                            </div>
                            <span className="flex items-center text-xs font-bold text-green-600 bg-green-100 dark:bg-green-900/30 px-2 py-1 rounded-full">
                                <span className="material-symbols-outlined text-sm mr-1">
                                    trending_up
                                </span>{" "}
                                +1.1%
                            </span>
                        </div>
                        <h3 className="text-[#60608a] dark:text-[#9494b8] text-sm font-medium">
                            Visual Consistency
                        </h3>
                        <p className="text-3xl font-bold text-[#111118] dark:text-white mt-1">
                            92%
                        </p>
                    </div>
                    <div className="p-5 bg-white dark:bg-[#16162c] rounded-2xl border border-[#e6e6ef] dark:border-[#2b2b40] shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex justify-between items-start mb-4">
                            <div className="p-2 rounded-lg bg-orange-100 dark:bg-orange-900/30 text-orange-600">
                                <span className="material-symbols-outlined">favorite</span>
                            </div>
                            <span className="flex items-center text-xs font-bold text-red-500 bg-red-100 dark:bg-red-900/30 px-2 py-1 rounded-full">
                                <span className="material-symbols-outlined text-sm mr-1">
                                    trending_down
                                </span>{" "}
                                -0.5%
                            </span>
                        </div>
                        <h3 className="text-[#60608a] dark:text-[#9494b8] text-sm font-medium">
                            Avg. Engagement
                        </h3>
                        <p className="text-3xl font-bold text-[#111118] dark:text-white mt-1">
                            4.8%
                        </p>
                    </div>
                    <div className="p-5 bg-white dark:bg-[#16162c] rounded-2xl border border-[#e6e6ef] dark:border-[#2b2b40] shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex justify-between items-start mb-4">
                            <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600">
                                <span className="material-symbols-outlined">image_search</span>
                            </div>
                            <span className="text-xs font-medium text-[#60608a] dark:text-[#9494b8] py-1">
                                Last 30 days
                            </span>
                        </div>
                        <h3 className="text-[#60608a] dark:text-[#9494b8] text-sm font-medium">
                            Content Scanned
                        </h3>
                        <p className="text-3xl font-bold text-[#111118] dark:text-white mt-1">
                            124 <span className="text-sm font-normal text-[#60608a]">posts</span>
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2 p-6 bg-white dark:bg-[#16162c] rounded-2xl border border-[#e6e6ef] dark:border-[#2b2b40] shadow-sm flex flex-col h-[400px]">
                        <div className="flex justify-between items-center mb-6">
                            <div>
                                <h3 className="text-lg font-bold text-[#111118] dark:text-white">
                                    Consistency Trend
                                </h3>
                                <p className="text-sm text-[#60608a]">
                                    Brand voice alignment over time
                                </p>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="flex items-center gap-1 text-xs font-medium text-[#60608a]">
                                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                                    Instagram
                                </span>
                                <span className="flex items-center gap-1 text-xs font-medium text-[#60608a]">
                                    <span className="w-2 h-2 rounded-full bg-purple-400"></span>
                                    TikTok
                                </span>
                            </div>
                        </div>
                        <div className="relative flex-1 w-full rounded-lg border border-dashed border-[#e6e6ef] dark:border-[#2b2b40] overflow-hidden bg-[linear-gradient(to_right,#f0f0f5_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f5_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#2b2b40_1px,transparent_1px),linear-gradient(to_bottom,#2b2b40_1px,transparent_1px)] bg-[size:40px_40px]">
                            <svg
                                className="absolute inset-0 w-full h-full p-4 overflow-visible"
                                preserveAspectRatio="none"
                                viewBox="0 0 100 100"
                            >
                                <line
                                    stroke="#e6e6ef"
                                    strokeDasharray="2"
                                    strokeWidth="0.5"
                                    x1="0"
                                    x2="100"
                                    y1="25"
                                    y2="25"
                                ></line>
                                <line
                                    stroke="#e6e6ef"
                                    strokeDasharray="2"
                                    strokeWidth="0.5"
                                    x1="0"
                                    x2="100"
                                    y1="50"
                                    y2="50"
                                ></line>
                                <line
                                    stroke="#e6e6ef"
                                    strokeDasharray="2"
                                    strokeWidth="0.5"
                                    x1="0"
                                    x2="100"
                                    y1="75"
                                    y2="75"
                                ></line>
                                <path
                                    d="M0,70 Q10,65 20,40 T40,45 T60,20 T80,30 T100,15"
                                    fill="none"
                                    stroke="#0d0df2"
                                    strokeWidth="2"
                                    vectorEffect="non-scaling-stroke"
                                ></path>
                                <path
                                    d="M0,70 Q10,65 20,40 T40,45 T60,20 T80,30 T100,15 V100 H0 Z"
                                    fill="url(#grad1)"
                                    opacity="0.1"
                                ></path>
                                <path
                                    d="M0,80 Q15,75 30,60 T50,65 T70,40 T90,45 T100,35"
                                    fill="none"
                                    stroke="#a855f7"
                                    strokeDasharray="4,2"
                                    strokeWidth="2"
                                    vectorEffect="non-scaling-stroke"
                                ></path>
                                <defs>
                                    <linearGradient
                                        id="grad1"
                                        x1="0%"
                                        x2="0%"
                                        y1="0%"
                                        y2="100%"
                                    >
                                        <stop
                                            offset="0%"
                                            style={{ stopColor: "#0d0df2", stopOpacity: 1 }}
                                        ></stop>
                                        <stop
                                            offset="100%"
                                            style={{ stopColor: "#0d0df2", stopOpacity: 0 }}
                                        ></stop>
                                    </linearGradient>
                                </defs>
                            </svg>
                            <div className="absolute bottom-2 left-0 w-full flex justify-between px-4 text-[10px] text-[#60608a]">
                                <span>Day 1</span>
                                <span>Day 7</span>
                                <span>Day 14</span>
                                <span>Day 21</span>
                                <span>Day 30</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1 p-6 bg-white dark:bg-[#16162c] rounded-2xl border border-[#e6e6ef] dark:border-[#2b2b40] shadow-sm flex flex-col h-[400px]">
                        <h3 className="text-lg font-bold text-[#111118] dark:text-white mb-1">
                            Tone Analysis
                        </h3>
                        <p className="text-sm text-[#60608a] mb-6">
                            Dominant brand voice characteristics
                        </p>
                        <div className="flex flex-col gap-5 flex-1 justify-center">
                            <div className="space-y-1">
                                <div className="flex justify-between text-sm">
                                    <span className="font-medium text-[#111118] dark:text-white">
                                        Professional
                                    </span>
                                    <span className="text-[#60608a]">65%</span>
                                </div>
                                <div className="h-2 w-full bg-[#f0f0f5] dark:bg-[#2b2b40] rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-primary rounded-full"
                                        style={{ width: "65%" }}
                                    ></div>
                                </div>
                            </div>
                            <div className="space-y-1">
                                <div className="flex justify-between text-sm">
                                    <span className="font-medium text-[#111118] dark:text-white">
                                        Friendly
                                    </span>
                                    <span className="text-[#60608a]">25%</span>
                                </div>
                                <div className="h-2 w-full bg-[#f0f0f5] dark:bg-[#2b2b40] rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-blue-400 rounded-full"
                                        style={{ width: "25%" }}
                                    ></div>
                                </div>
                            </div>
                            <div className="space-y-1">
                                <div className="flex justify-between text-sm">
                                    <span className="font-medium text-[#111118] dark:text-white">
                                        Witty
                                    </span>
                                    <span className="text-[#60608a]">8%</span>
                                </div>
                                <div className="h-2 w-full bg-[#f0f0f5] dark:bg-[#2b2b40] rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-purple-400 rounded-full"
                                        style={{ width: "8%" }}
                                    ></div>
                                </div>
                            </div>
                            <div className="space-y-1">
                                <div className="flex justify-between text-sm">
                                    <span className="font-medium text-[#111118] dark:text-white">
                                        Urgent
                                    </span>
                                    <span className="text-[#60608a]">2%</span>
                                </div>
                                <div className="h-2 w-full bg-[#f0f0f5] dark:bg-[#2b2b40] rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-orange-400 rounded-full"
                                        style={{ width: "2%" }}
                                    ></div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-auto pt-4 border-t border-[#e6e6ef] dark:border-[#2b2b40]">
                            <div className="p-3 bg-blue-50 dark:bg-blue-900/10 rounded-lg flex gap-3">
                                <span className="material-symbols-outlined text-primary text-xl">
                                    info
                                </span>
                                <p className="text-xs text-[#60608a] dark:text-[#9494b8] leading-tight">
                                    Your tone is highly consistent on LinkedIn, but slightly more
                                    casual on TikTok than your target baseline.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h3 className="text-xl font-bold text-[#111118] dark:text-white mb-4">
                        Platform Deep Dive
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                        <div className="bg-white dark:bg-[#16162c] p-5 rounded-xl border border-[#e6e6ef] dark:border-[#2b2b40] shadow-sm flex flex-col gap-4">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 flex items-center justify-center text-white">
                                    <span className="font-bold text-xs">IG</span>
                                </div>
                                <div>
                                    <h4 className="font-bold text-[#111118] dark:text-white">
                                        Instagram
                                    </h4>
                                    <p className="text-xs text-green-600 font-medium">
                                        Excellent Vibe
                                    </p>
                                </div>
                                <div className="ml-auto text-right">
                                    <span className="block text-lg font-bold">95%</span>
                                    <span className="block text-[10px] text-[#60608a]">
                                        Score
                                    </span>
                                </div>
                            </div>
                            <div className="h-16 flex items-end gap-1">
                                <div className="w-full bg-primary/20 rounded-t-sm h-[40%]"></div>
                                <div className="w-full bg-primary/20 rounded-t-sm h-[60%]"></div>
                                <div className="w-full bg-primary/20 rounded-t-sm h-[55%]"></div>
                                <div className="w-full bg-primary/20 rounded-t-sm h-[80%]"></div>
                                <div className="w-full bg-primary rounded-t-sm h-[95%]"></div>
                            </div>
                        </div>
                        <div className="bg-white dark:bg-[#16162c] p-5 rounded-xl border border-[#e6e6ef] dark:border-[#2b2b40] shadow-sm flex flex-col gap-4">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-white">
                                    <span className="font-bold text-xs">TT</span>
                                </div>
                                <div>
                                    <h4 className="font-bold text-[#111118] dark:text-white">
                                        TikTok
                                    </h4>
                                    <p className="text-xs text-orange-500 font-medium">
                                        Needs Work
                                    </p>
                                </div>
                                <div className="ml-auto text-right">
                                    <span className="block text-lg font-bold">72%</span>
                                    <span className="block text-[10px] text-[#60608a]">
                                        Score
                                    </span>
                                </div>
                            </div>
                            <div className="h-16 flex items-end gap-1">
                                <div className="w-full bg-primary/20 rounded-t-sm h-[60%]"></div>
                                <div className="w-full bg-primary/20 rounded-t-sm h-[40%]"></div>
                                <div className="w-full bg-primary/20 rounded-t-sm h-[50%]"></div>
                                <div className="w-full bg-primary rounded-t-sm h-[70%]"></div>
                                <div className="w-full bg-primary/20 rounded-t-sm h-[65%]"></div>
                            </div>
                        </div>
                        <div className="bg-white dark:bg-[#16162c] p-5 rounded-xl border border-[#e6e6ef] dark:border-[#2b2b40] shadow-sm flex flex-col gap-4">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-[#0077b5] flex items-center justify-center text-white">
                                    <span className="font-bold text-xs">LI</span>
                                </div>
                                <div>
                                    <h4 className="font-bold text-[#111118] dark:text-white">
                                        LinkedIn
                                    </h4>
                                    <p className="text-xs text-green-600 font-medium">On Brand</p>
                                </div>
                                <div className="ml-auto text-right">
                                    <span className="block text-lg font-bold">89%</span>
                                    <span className="block text-[10px] text-[#60608a]">
                                        Score
                                    </span>
                                </div>
                            </div>
                            <div className="h-16 flex items-end gap-1">
                                <div className="w-full bg-primary/20 rounded-t-sm h-[80%]"></div>
                                <div className="w-full bg-primary/20 rounded-t-sm h-[85%]"></div>
                                <div className="w-full bg-primary/20 rounded-t-sm h-[82%]"></div>
                                <div className="w-full bg-primary rounded-t-sm h-[89%]"></div>
                                <div className="w-full bg-primary/20 rounded-t-sm h-[88%]"></div>
                            </div>
                        </div>
                        <div className="bg-white dark:bg-[#16162c] p-5 rounded-xl border border-[#e6e6ef] dark:border-[#2b2b40] shadow-sm flex flex-col gap-4">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-white">
                                    <span className="font-bold text-xs">X</span>
                                </div>
                                <div>
                                    <h4 className="font-bold text-[#111118] dark:text-white">
                                        X / Twitter
                                    </h4>
                                    <p className="text-xs text-[#60608a] font-medium">No Data</p>
                                </div>
                                <div className="ml-auto text-right">
                                    <span className="block text-lg font-bold text-[#60608a]">
                                        --
                                    </span>
                                    <span className="block text-[10px] text-[#60608a]">
                                        Score
                                    </span>
                                </div>
                            </div>
                            <div className="h-16 flex items-center justify-center bg-[#f5f5f8] dark:bg-[#202038] rounded-lg border border-dashed border-[#e6e6ef] dark:border-[#2b2b40]">
                                <span className="text-[10px] text-[#60608a]">
                                    Connect Account
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
