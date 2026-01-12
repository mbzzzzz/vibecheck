"use client";
import React, { useEffect, useState } from "react";
import { fetchLatestReport } from "@/lib/api";
import { AnalysisReport } from "@/types";

export default function QuickWinsPage() {
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

    if (loading) {
        return (
            <div className="flex h-full w-full items-center justify-center bg-background-light dark:bg-background-dark">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
            </div>
        );
    }

    if (!report) {
        return (
            <div className="flex h-full w-full items-center justify-center bg-background-light dark:bg-background-dark">
                <p>Failed to load data.</p>
            </div>
        );
    }

    return (
        <main className="flex-1 flex flex-col h-full overflow-y-auto bg-background-light dark:bg-background-dark">
            <div className="max-w-[1200px] mx-auto w-full p-6 md:p-10 flex flex-col gap-8">
                {/* Header Section */}
                <div className="flex flex-col lg:flex-row gap-8 justify-between items-start lg:items-end">
                    <div className="flex flex-col gap-2 max-w-2xl">
                        <h2 className="text-[#111118] dark:text-white text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em]">
                            Quick Wins
                        </h2>
                        <p className="text-[#60608a] dark:text-gray-300 text-lg font-normal leading-relaxed">
                            Boost your VibeScore by fixing these inconsistencies found across
                            your profiles. Prioritized for maximum impact.
                        </p>
                    </div>
                    {/* Simplified Stats Card */}
                    <div className="flex flex-col gap-4 min-w-[300px] bg-white dark:bg-[#1a1a2e] p-5 rounded-2xl shadow-sm border border-[#dbdbe6] dark:border-gray-700">
                        <div className="flex justify-between items-end">
                            <div>
                                <p className="text-[#60608a] dark:text-gray-400 text-sm font-medium">
                                    Current VibeScore
                                </p>
                                <div className="flex items-baseline gap-2">
                                    <span className="text-[#111118] dark:text-white text-4xl font-bold">
                                        {report.vibe_score}
                                    </span>
                                    <span className="text-[#60608a] dark:text-gray-500 text-xl font-medium">
                                        /100
                                    </span>
                                </div>
                            </div>
                            <div className="text-right">
                                <p className="text-primary font-bold text-lg">+{report.recommendations.length * 2} pts</p>
                                <p className="text-[#60608a] dark:text-gray-400 text-xs">
                                    pending fixes
                                </p>
                            </div>
                        </div>
                        <div className="w-full bg-[#f0f0f5] dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                            <div
                                className="bg-[#111118] dark:bg-primary h-3 rounded-full"
                                style={{ width: `${report.vibe_score}%` }}
                            ></div>
                        </div>
                    </div>
                </div>
                {/* Filters */}
                <div className="flex flex-wrap gap-3 items-center pb-2">
                    <button className="flex items-center justify-center gap-2 h-10 px-5 rounded-full bg-[#111118] dark:bg-white text-white dark:text-[#111118] hover:bg-opacity-90 transition-all shadow-md">
                        <span className="material-symbols-outlined text-[20px]">
                            view_agenda
                        </span>
                        <span className="text-sm font-bold">All</span>
                    </button>
                    {/* ... other filters ... */}
                </div>

                {/* Task List */}
                <div className="flex flex-col gap-5">
                    {report.recommendations.length > 0 ? report.recommendations.map((rec, idx) => (
                        <div key={idx} className="flex flex-col md:flex-row gap-6 bg-white dark:bg-[#1a1a2e] p-6 rounded-2xl border border-[#dbdbe6] dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow group relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-1 h-full bg-primary"></div>
                            {/* Icon Column */}
                            <div className="flex-shrink-0">
                                <div className="size-14 rounded-full bg-[#eef3ff] dark:bg-primary/20 flex items-center justify-center text-primary dark:text-blue-300">
                                    <span className="material-symbols-outlined text-3xl">
                                        {rec.platform === 'linkedin' ? 'work' : rec.platform === 'instagram' ? 'photo_camera' : 'bolt'}
                                    </span>
                                </div>
                            </div>
                            {/* Content Column */}
                            <div className="flex flex-col flex-1 gap-3">
                                <div className="flex flex-wrap items-center justify-between gap-2">
                                    <div className="flex flex-col gap-1">
                                        <div className="flex items-center gap-3">
                                            <h3 className="text-[#111118] dark:text-white text-lg font-bold">
                                                {rec.title}
                                            </h3>
                                            <span className={`hidden sm:inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider border ${rec.impact > 3 ? 'bg-red-50 dark:bg-red-900/30 text-red-600 border-red-100' : 'bg-orange-50 dark:bg-orange-900/30 text-orange-600 border-orange-100'
                                                }`}>
                                                {rec.impact > 3 ? 'High Impact' : 'Medium Impact'}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-1 bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-3 py-1 rounded-lg border border-green-100 dark:border-green-800">
                                        <span className="material-symbols-outlined text-[18px]">
                                            arrow_upward
                                        </span>
                                        <span className="font-bold text-sm">+{rec.impact} VibeScore</span>
                                    </div>
                                </div>
                                {/* Actions */}
                                <div className="flex flex-wrap gap-3 mt-1">
                                    <button className="flex items-center gap-2 bg-primary hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl font-bold text-sm transition-colors shadow-lg shadow-blue-500/20">
                                        <span className="material-symbols-outlined text-[20px]">
                                            check
                                        </span>
                                        Fix Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    )) : (
                        <div className="text-center p-10 bg-white dark:bg-[#1a1a2e] rounded-2xl border border-[#dbdbe6] dark:border-gray-700">
                            <p className="text-[#60608a] dark:text-gray-400">No quick wins available yet. Link more social accounts!</p>
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
}
