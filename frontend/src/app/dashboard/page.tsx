"use client";

import React, { useEffect, useState } from "react";
import { fetchLatestReport } from "@/lib/api";
import { AnalysisReport } from "@/types";

export default function DashboardPage() {
    const [report, setReport] = useState<AnalysisReport | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadData() {
            try {
                const data = await fetchLatestReport();
                setReport(data);
            } catch (error) {
                console.error("Failed to fetch report:", error);
            } finally {
                setLoading(false);
            }
        }
        loadData();
    }, []);

    return (
        <main className="flex-1 flex flex-col h-full overflow-y-auto bg-background-light dark:bg-background-dark">
            {loading ? (
                <div className="flex h-full w-full items-center justify-center">
                    <div className="flex flex-col items-center gap-4">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
                        <p className="text-[#9c9cba] animate-pulse">
                            Loading Vibe Data...
                        </p>
                    </div>
                </div>
            ) : !report ? (
                <div className="flex h-full w-full items-center justify-center">
                    <div className="flex flex-col items-center gap-4 text-center">
                        <span className="material-symbols-outlined text-4xl text-gray-500">
                            error
                        </span>
                        <p className="text-[#9c9cba]">
                            Failed to load data. Is the backend running?
                        </p>
                        <button
                            onClick={() => window.location.reload()}
                            className="px-4 py-2 bg-[#282839] hover:bg-[#323246] text-white rounded-lg"
                        >
                            Retry
                        </button>
                        <p className="text-[10px] text-gray-600 mt-2">
                            Check console for details
                        </p>
                    </div>
                </div>
            ) : (
                <div className="max-w-[1200px] w-full mx-auto p-4 md:p-8 flex flex-col gap-6">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-2">
                        <div>
                            <p className="text-[#111118] dark:text-white text-4xl font-black leading-tight tracking-[-0.033em]">
                                Good Morning, Alex.
                            </p>
                            <p className="text-[#60608a] dark:text-[#9c9cba] text-base font-normal leading-normal mt-1">
                                Let's check your Vibe.
                            </p>
                        </div>
                        <div className="flex items-center gap-2">
                            <button className="flex items-center gap-2 bg-white dark:bg-[#282839] hover:bg-slate-50 dark:hover:bg-[#323246] border border-[#e6e6ef] dark:border-[#282839] text-[#111118] dark:text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors shadow-sm cursor-pointer">
                                <span className="material-symbols-outlined text-[18px] text-primary">
                                    refresh
                                </span>
                                Scan Now
                            </button>
                        </div>
                    </div>

                    {/* Top Row: VibeScore & Insight */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {/* VibeScore Hero Card */}
                        <div className="bg-white dark:bg-card-dark rounded-xl p-6 shadow-sm border border-[#e6e6ef] dark:border-[#282839] flex flex-col justify-between relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                <span className="material-symbols-outlined text-[120px] text-primary">
                                    verified
                                </span>
                            </div>
                            <div className="flex justify-between items-start z-10">
                                <div>
                                    <h3 className="text-[#60608a] dark:text-[#9c9cba] text-sm font-semibold uppercase tracking-wider">
                                        Current VibeScore
                                    </h3>
                                    <p className="text-[#111118] dark:text-white text-6xl font-bold mt-2 tracking-tighter">
                                        {report.vibe_score}
                                        <span className="text-2xl text-[#60608a] dark:text-[#9c9cba] font-normal">
                                            /100
                                        </span>
                                    </p>
                                </div>
                                <div className="bg-green-100 dark:bg-green-500/20 text-green-700 dark:text-green-400 px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                                    <span className="material-symbols-outlined text-sm">
                                        trending_up
                                    </span>
                                    +12%
                                </div>
                            </div>
                            <div className="mt-6 z-10">
                                <div className="w-full bg-slate-100 dark:bg-[#282839] rounded-full h-3 mb-2">
                                    <div
                                        className="bg-primary h-3 rounded-full relative shadow-lg shadow-primary/30"
                                        style={{ width: `${report.vibe_score}%` }}
                                    >
                                        <div className="absolute right-0 -top-1 w-5 h-5 bg-white border-2 border-primary rounded-full shadow-[0_0_10px_rgba(13,13,242,0.5)]"></div>
                                    </div>
                                </div>
                                <p className="text-[#60608a] dark:text-[#9c9cba] text-xs">
                                    Your consistency is up from last week. Keep it up!
                                </p>
                            </div>
                        </div>
                        {/* AI Insight Card */}
                        <div
                            className="lg:col-span-2 bg-cover bg-center flex flex-col items-stretch justify-end rounded-xl shadow-lg relative overflow-hidden group"
                            style={{
                                backgroundImage:
                                    'linear-gradient(105deg, rgba(16,16,34,0.9) 0%, rgba(13,13,242,0.2) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuAkLKKRd2UxRkGuaqYDrlyHSkZADCQ8eMJ7NXFliPHsalXI1hUya6FLEJYhdFxIa7FL0ioFg3xh-UXrC_AcfMF-YJSScFbgoVUKSIdSrYf5enGWSQ7zZfXg9Mj9EXPHfCfrcHp2UEc01Xj_uxyQ8_RZs8lxzWiGAsragcIbR4pwtEqFcsJv3Sy1hvMY088RxXhgYR-0im65KWvAfwFprnstrJFvgDWzM8ISi01F0BuhsMbJQRIdIHZ0ff-dREvqxa3D0ZkZBf14GVE")',
                            }}
                        >
                            <div className="absolute inset-0 z-0 bg-gradient-to-r from-primary/90 to-purple-700/80 mix-blend-multiply"></div>
                            <div className="absolute inset-0 z-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                            <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md border border-white/30 p-2 rounded-lg z-10">
                                <span className="material-symbols-outlined text-white">
                                    auto_awesome
                                </span>
                            </div>
                            <div className="p-8 z-10 relative">
                                <div className="flex flex-col gap-2">
                                    <p className="text-white/90 font-bold text-sm uppercase tracking-wider flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-white animate-pulse shadow-[0_0_8px_rgba(255,255,255,0.8)]"></span>
                                        AI Insight
                                    </p>
                                    <p className="text-white text-2xl font-medium leading-tight max-w-[600px] drop-shadow-sm">
                                        Your vibe is trending{" "}
                                        <span className="font-bold text-[#4ade80]">{report.tone_analysis?.overall || 'Authentic'}</span>{" "}
                                        overall, with an{" "}
                                        <span className="font-bold text-orange-300">{report.tone_analysis?.platforms?.linkedin || 'Executive'}</span>{" "}
                                        presence on LinkedIn.
                                    </p>
                                    <p className="text-white/80 text-sm mt-1">
                                        {report.vibe_score > 80
                                            ? "Great job maintaining consistency across platforms!"
                                            : "Consider aligning your LinkedIn tone with your general authentic vibe for better growth."}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Middle Row: Charts & Breakdown */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {/* 30-Day Trend Chart */}
                        <div className="lg:col-span-2 bg-white dark:bg-card-dark rounded-xl p-6 border border-[#e6e6ef] dark:border-[#282839] flex flex-col shadow-sm">
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="text-[#111118] dark:text-white font-bold text-lg">
                                    Vibe Stability
                                </h3>
                                <select className="bg-slate-50 dark:bg-[#282839] text-[#60608a] dark:text-[#9c9cba] text-sm rounded-lg px-3 py-1 border border-[#e6e6ef] dark:border-[#282839] focus:ring-1 focus:ring-primary outline-none cursor-pointer">
                                    <option>Last 30 Days</option>
                                    <option>Last 7 Days</option>
                                </select>
                            </div>
                            <div className="flex-1 min-h-[240px] w-full flex items-end gap-2 relative px-2">
                                <div className="absolute inset-0 flex items-end pb-6">
                                    <svg
                                        className="w-full h-full overflow-visible"
                                        preserveAspectRatio="none"
                                        viewBox="0 0 100 40"
                                    >
                                        <defs>
                                            <linearGradient
                                                id="chartGradient"
                                                x1="0"
                                                x2="0"
                                                y1="0"
                                                y2="1"
                                            >
                                                <stop
                                                    offset="0%"
                                                    stopColor="#0d0df2"
                                                    stopOpacity="0.2"
                                                ></stop>
                                                <stop
                                                    offset="100%"
                                                    stopColor="#0d0df2"
                                                    stopOpacity="0"
                                                ></stop>
                                            </linearGradient>
                                        </defs>
                                        <path
                                            d="M0,35 Q10,32 20,25 T40,28 T60,15 T80,18 T100,10 V40 H0 Z"
                                            fill="url(#chartGradient)"
                                        ></path>
                                        <path
                                            d="M0,35 Q10,32 20,25 T40,28 T60,15 T80,18 T100,10"
                                            fill="none"
                                            stroke="#0d0df2"
                                            strokeLinecap="round"
                                            strokeWidth="0.5"
                                            vectorEffect="non-scaling-stroke"
                                        ></path>
                                        <circle
                                            cx="20"
                                            cy="25"
                                            fill="white"
                                            r="1.5"
                                            stroke="#0d0df2"
                                            strokeWidth="1"
                                            vectorEffect="non-scaling-stroke"
                                        ></circle>
                                        <circle
                                            cx="60"
                                            cy="15"
                                            fill="white"
                                            r="1.5"
                                            stroke="#0d0df2"
                                            strokeWidth="1"
                                            vectorEffect="non-scaling-stroke"
                                        ></circle>
                                        <circle
                                            cx="100"
                                            cy="10"
                                            fill="white"
                                            r="1.5"
                                            stroke="#0d0df2"
                                            strokeWidth="1"
                                            vectorEffect="non-scaling-stroke"
                                        ></circle>
                                    </svg>
                                </div>
                                <div className="absolute bottom-0 left-0 w-full flex justify-between text-[11px] text-[#60608a] dark:text-[#9c9cba] font-medium">
                                    <span>Sep 1</span>
                                    <span>Sep 8</span>
                                    <span>Sep 15</span>
                                    <span>Sep 22</span>
                                    <span>Today</span>
                                </div>
                            </div>
                        </div>

                        {/* Platform Breakdown */}
                        <div className="bg-white dark:bg-card-dark rounded-xl p-6 border border-[#e6e6ef] dark:border-[#282839] flex flex-col shadow-sm">
                            <h3 className="text-[#111118] dark:text-white font-bold text-lg mb-6">
                                Platform Breakdown
                            </h3>
                            <div className="flex flex-col gap-6">
                                {Object.entries(report.platform_scores).map(
                                    ([platform, data]) => (
                                        <div key={platform} className="flex flex-col gap-2 group">
                                            <div className="flex justify-between items-center">
                                                <div className="flex items-center gap-3">
                                                    <div
                                                        className={`w-8 h-8 rounded-lg flex items-center justify-center shadow-sm ${platform === "instagram"
                                                            ? "bg-gradient-to-tr from-yellow-400 via-orange-500 to-purple-600"
                                                            : platform === "tiktok"
                                                                ? "bg-black"
                                                                : platform === "linkedin"
                                                                    ? "bg-[#0077b5]"
                                                                    : "bg-black border border-slate-100"
                                                            }`}
                                                    >
                                                        {platform === 'twitter' || platform === 'x' ? (
                                                            <span className="text-white text-[16px] font-bold">X</span>
                                                        ) : (
                                                            <span className="material-symbols-outlined text-white text-[18px]">
                                                                {platform === 'instagram' ? 'photo_camera' :
                                                                    platform === 'tiktok' ? 'music_note' :
                                                                        platform === 'linkedin' ? 'work' : 'public'}
                                                            </span>
                                                        )}
                                                    </div>
                                                    <span className="text-[#111118] dark:text-white text-sm font-semibold capitalize">
                                                        {platform}
                                                    </span>
                                                </div>
                                                <span
                                                    className={`text-sm font-bold px-2 py-0.5 rounded ${data.score > 80
                                                        ? "text-green-600 bg-green-50 dark:bg-green-900/30 dark:text-green-400"
                                                        : data.score > 60
                                                            ? "text-orange-500 bg-orange-50 dark:bg-orange-900/30 dark:text-orange-400"
                                                            : "text-slate-500 bg-slate-100 dark:bg-slate-700 dark:text-slate-300"
                                                        }`}
                                                >
                                                    {data.score}%
                                                </span>
                                            </div>
                                            <div className="w-full bg-slate-100 dark:bg-[#282839] rounded-full h-2.5">
                                                <div
                                                    className={`h-2.5 rounded-full ${data.score > 80
                                                        ? "bg-gradient-to-r from-green-400 to-green-500"
                                                        : data.score > 60
                                                            ? "bg-orange-400"
                                                            : "bg-slate-400"
                                                        }`}
                                                    style={{ width: `${data.score}%` }}
                                                ></div>
                                            </div>
                                        </div>
                                    )
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Bottom Row: Alerts & Actions */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pb-8">
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center justify-between">
                                <h3 className="text-[#111118] dark:text-white font-bold text-lg">
                                    Consistency Alerts
                                </h3>
                                {report.consistency_gaps && report.consistency_gaps.length > 0 && (
                                    <span className="bg-red-50 dark:bg-red-500/20 text-red-600 dark:text-red-500 px-2.5 py-1 rounded-md text-xs font-bold border border-red-100 dark:border-red-500/20">
                                        {report.consistency_gaps.filter(g => g.severity === 'critical').length} Critical
                                    </span>
                                )}
                            </div>
                            <div className="flex flex-col gap-3">
                                {report.consistency_gaps && report.consistency_gaps.length > 0 ? (
                                    report.consistency_gaps.map((gap, idx) => (
                                        <div key={idx} className={`bg-white dark:bg-card-dark rounded-xl p-4 border border-[#e6e6ef] dark:border-[#282839] border-l-4 shadow-sm flex items-start gap-4 hover:shadow-md transition-shadow ${gap.severity === 'critical' ? 'border-l-red-500' : 'border-l-orange-400'}`}>
                                            <div className={`mt-1 p-2 rounded-full shrink-0 ${gap.severity === 'critical' ? 'bg-red-50 dark:bg-red-500/20 text-red-500' : 'bg-orange-50 dark:bg-orange-500/20 text-orange-500'}`}>
                                                <span className="material-symbols-outlined text-[20px]">
                                                    {gap.type === 'tone_mismatch' ? 'warning' : 'palette'}
                                                </span>
                                            </div>
                                            <div className="flex-1">
                                                <p className="text-[#111118] dark:text-white font-semibold text-sm">
                                                    {gap.type.replace('_', ' ').toUpperCase()}
                                                </p>
                                                <p className="text-[#60608a] dark:text-[#9c9cba] text-sm mt-1">
                                                    {gap.message}
                                                </p>
                                                <div className="mt-3 flex gap-2">
                                                    <button className="bg-slate-50 dark:bg-[#282839] hover:bg-slate-100 dark:hover:bg-[#323246] border border-slate-200 dark:border-[#282839] text-xs text-[#60608a] dark:text-[#9c9cba] font-medium px-3 py-1.5 rounded-lg transition-colors">
                                                        Dismiss
                                                    </button>
                                                    <button className="bg-primary hover:bg-blue-700 text-xs text-white px-3 py-1.5 rounded-lg transition-colors font-medium shadow-sm shadow-blue-200">
                                                        View Post
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <div className="bg-green-50 dark:bg-green-500/10 rounded-xl p-6 border border-green-100 dark:border-green-500/20 text-center">
                                        <span className="material-symbols-outlined text-green-500 text-3xl mb-2">check_circle</span>
                                        <p className="text-green-800 dark:text-green-400 font-medium">Your vibe is perfectly consistent!</p>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h3 className="text-[#111118] dark:text-white font-bold text-lg">
                                Quick Actions
                            </h3>
                            <div className="grid grid-cols-2 gap-3 h-full">
                                <button className="bg-white dark:bg-[#282839] hover:bg-primary/5 dark:hover:bg-primary/20 hover:border-primary/30 border border-[#e6e6ef] dark:border-[#282839] transition-all rounded-xl p-4 flex flex-col items-center justify-center gap-2 text-center group shadow-sm hover:shadow-md cursor-pointer">
                                    <div className="bg-blue-50 dark:bg-primary/20 p-3 rounded-full group-hover:bg-white dark:group-hover:bg-[#282839] group-hover:scale-110 transition-all duration-300">
                                        <span className="material-symbols-outlined text-primary text-2xl">
                                            edit_note
                                        </span>
                                    </div>
                                    <span className="text-[#111118] dark:text-white text-sm font-semibold">
                                        Fix Tone Match
                                    </span>
                                    <span className="text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-500/20 px-2 py-0.5 rounded text-xs font-bold">
                                        +5pts
                                    </span>
                                </button>
                                <button className="bg-white dark:bg-[#282839] hover:bg-primary/5 dark:hover:bg-primary/20 hover:border-primary/30 border border-[#e6e6ef] dark:border-[#282839] transition-all rounded-xl p-4 flex flex-col items-center justify-center gap-2 text-center group shadow-sm hover:shadow-md cursor-pointer">
                                    <div className="bg-purple-50 dark:bg-purple-500/20 p-3 rounded-full group-hover:bg-white dark:group-hover:bg-[#282839] group-hover:scale-110 transition-all duration-300">
                                        <span className="material-symbols-outlined text-purple-600 dark:text-purple-400 text-2xl">
                                            style
                                        </span>
                                    </div>
                                    <span className="text-[#111118] dark:text-white text-sm font-semibold">
                                        Harmonize Bios
                                    </span>
                                    <span className="text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-500/20 px-2 py-0.5 rounded text-xs font-bold">
                                        +3pts
                                    </span>
                                </button>
                                <button className="bg-white dark:bg-[#282839] hover:bg-primary/5 dark:hover:bg-primary/20 hover:border-primary/30 border border-[#e6e6ef] dark:border-[#282839] transition-all rounded-xl p-4 flex flex-col items-center justify-center gap-2 text-center group shadow-sm hover:shadow-md cursor-pointer">
                                    <div className="bg-orange-50 dark:bg-orange-500/20 p-3 rounded-full group-hover:bg-white dark:group-hover:bg-[#282839] group-hover:scale-110 transition-all duration-300">
                                        <span className="material-symbols-outlined text-orange-500 dark:text-orange-400 text-2xl">
                                            image
                                        </span>
                                    </div>
                                    <span className="text-[#111118] dark:text-white text-sm font-semibold">
                                        Update Thumbnails
                                    </span>
                                    <span className="text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-500/20 px-2 py-0.5 rounded text-xs font-bold">
                                        +8pts
                                    </span>
                                </button>
                                <button className="bg-white dark:bg-[#282839] hover:bg-primary/5 dark:hover:bg-primary/20 hover:border-primary/30 border border-[#e6e6ef] dark:border-[#282839] transition-all rounded-xl p-4 flex flex-col items-center justify-center gap-2 text-center group shadow-sm hover:shadow-md cursor-pointer">
                                    <div className="bg-pink-50 dark:bg-pink-500/20 p-3 rounded-full group-hover:bg-white dark:group-hover:bg-[#282839] group-hover:scale-110 transition-all duration-300">
                                        <span className="material-symbols-outlined text-pink-500 dark:text-pink-400 text-2xl">
                                            schedule
                                        </span>
                                    </div>
                                    <span className="text-[#111118] dark:text-white text-sm font-semibold">
                                        Sync Schedule
                                    </span>
                                    <span className="text-[#60608a] dark:text-[#9c9cba] bg-slate-100 dark:bg-[#323246] px-2 py-0.5 rounded text-xs font-medium">
                                        Neutral
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </main>
    );
}
