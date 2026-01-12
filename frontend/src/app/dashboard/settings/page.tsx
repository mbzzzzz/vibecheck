"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "@/app/providers";

export default function SettingsPage() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Helper to determine active state styles safely
    const getButtonClass = (targetTheme: string) => {
        if (!mounted) return "border border-[#e6e6ef] dark:border-[#2b2b40] text-[#60608a] font-medium";

        const isActive = theme === targetTheme;
        if (isActive) {
            return "border-2 border-primary bg-primary/5 text-primary font-bold";
        }
        return "border border-[#e6e6ef] dark:border-[#2b2b40] hover:bg-[#f5f5f8] dark:hover:bg-[#1f1f35] text-[#60608a] font-medium";
    };

    return (
        <main className="flex-1 flex flex-col h-full overflow-y-auto bg-background-light dark:bg-background-dark relative">
            <header className="px-8 py-6 flex justify-between items-center bg-transparent sticky top-0 z-10 backdrop-blur-md bg-background-light/90 dark:bg-background-dark/90">
                <div>
                    <h2 className="text-2xl font-bold text-[#111118] dark:text-white">
                        Settings
                    </h2>
                    <p className="text-[#60608a] dark:text-[#9494b8] text-sm mt-1">
                        Manage your profile, connections, and app preferences.
                    </p>
                </div>
                <div className="flex gap-3">
                    <button className="p-2 rounded-full bg-white dark:bg-[#1e1e2e] text-[#111118] dark:text-white shadow-sm border border-[#e6e6ef] dark:border-[#2b2b40] hover:bg-gray-50 transition-colors">
                        <span className="material-symbols-outlined">notifications</span>
                    </button>
                    <button className="p-2 rounded-full bg-white dark:bg-[#1e1e2e] text-[#111118] dark:text-white shadow-sm border border-[#e6e6ef] dark:border-[#2b2b40] hover:bg-gray-50 transition-colors">
                        <span className="material-symbols-outlined">help</span>
                    </button>
                </div>
            </header>
            <div className="px-8 pb-12 max-w-4xl space-y-8">
                <section className="bg-white dark:bg-[#16162c] rounded-2xl p-6 shadow-sm border border-[#e6e6ef] dark:border-[#2b2b40]">
                    <div className="flex items-center justify-between mb-6">
                        <div>
                            <h3 className="text-lg font-bold text-[#111118] dark:text-white">
                                Profile Information
                            </h3>
                            <p className="text-[#60608a] dark:text-[#9494b8] text-sm">
                                Update your account details and password.
                            </p>
                        </div>
                        <button className="text-sm font-semibold text-primary hover:underline">
                            Change Password
                        </button>
                    </div>
                    <div className="flex flex-col md:flex-row gap-8">
                        <div className="flex flex-col items-center gap-3">
                            <div className="relative size-24 group">
                                <div
                                    className="bg-center bg-no-repeat bg-cover rounded-full size-24 border-4 border-[#f5f5f8] dark:border-[#1f1f35] shadow-sm"
                                    style={{
                                        backgroundImage:
                                            'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAptc9XtjyoT31pm5yZj8hUxs0l92q6Dc24jTQfGKGY__ajzsMpdN8yE2_qxj4U95NJgiTzb3C1nJERBUrT-SoDL2S2hpd5ZsFCMuzM9WfZKMII-2hCTriZ1yO_5UqHQ2ItJiCHlGPOPJp9I66gk4ldWHAv85tHKGwXFdxyawBc64ap0lHVXcOfz338HAul791pVHHPPvS4URHldPiL_HFVFyk2QjPYk1Ao7poRDa1OH1MSsIaTw_-pIPT9QYy-Mw0zjxew_cmhwK8")',
                                    }}
                                ></div>
                                <div className="absolute inset-0 bg-black/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer">
                                    <span className="material-symbols-outlined text-white">
                                        edit
                                    </span>
                                </div>
                                <button className="absolute bottom-0 right-0 p-1.5 bg-primary text-white rounded-full shadow-md hover:bg-blue-700 transition-colors z-10">
                                    <span className="material-symbols-outlined text-sm">
                                        photo_camera
                                    </span>
                                </button>
                            </div>
                            <span className="text-xs text-[#60608a] text-center">
                                Allowed *.jpeg, *.jpg
                            </span>
                        </div>
                        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div className="space-y-1.5">
                                <label className="text-xs font-semibold text-[#111118] dark:text-white uppercase tracking-wider">
                                    Full Name
                                </label>
                                <input
                                    className="w-full px-4 py-2.5 rounded-lg border border-[#e6e6ef] dark:border-[#2b2b40] bg-[#f5f5f8] dark:bg-[#1f1f35] text-[#111118] dark:text-white text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-gray-400"
                                    type="text"
                                    defaultValue="Alex Creator"
                                />
                            </div>
                            <div className="space-y-1.5">
                                <label className="text-xs font-semibold text-[#111118] dark:text-white uppercase tracking-wider">
                                    Email Address
                                </label>
                                <input
                                    className="w-full px-4 py-2.5 rounded-lg border border-[#e6e6ef] dark:border-[#2b2b40] bg-[#f5f5f8] dark:bg-[#1f1f35] text-[#111118] dark:text-white text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-gray-400"
                                    type="email"
                                    defaultValue="alex@vibecheck.ai"
                                />
                            </div>
                            <div className="space-y-1.5 md:col-span-2">
                                <label className="text-xs font-semibold text-[#111118] dark:text-white uppercase tracking-wider">
                                    Bio
                                </label>
                                <textarea
                                    className="w-full px-4 py-2.5 rounded-lg border border-[#e6e6ef] dark:border-[#2b2b40] bg-[#f5f5f8] dark:bg-[#1f1f35] text-[#111118] dark:text-white text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all resize-none"
                                    rows={3}
                                    defaultValue="Digital creator focused on lifestyle and tech. Trying to keep my feed consistent!"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 pt-4 border-t border-[#e6e6ef] dark:border-[#2b2b40] flex justify-end">
                        <button className="px-6 py-2.5 rounded-lg bg-primary text-white text-sm font-bold shadow-md shadow-primary/20 hover:bg-blue-700 transition-all">
                            Save Changes
                        </button>
                    </div>
                </section>
                <section className="bg-white dark:bg-[#16162c] rounded-2xl p-6 shadow-sm border border-[#e6e6ef] dark:border-[#2b2b40]">
                    <div className="mb-6">
                        <h3 className="text-lg font-bold text-[#111118] dark:text-white">
                            Connected Platforms
                        </h3>
                        <p className="text-[#60608a] dark:text-[#9494b8] text-sm">
                            Manage the social accounts VibeCheck scans for consistency.
                        </p>
                    </div>
                    <div className="space-y-3">
                        <div className="flex items-center justify-between p-4 rounded-xl border border-[#e6e6ef] dark:border-[#2b2b40] bg-transparent hover:bg-[#f5f5f8] dark:hover:bg-[#1f1f35] transition-colors group">
                            <div className="flex items-center gap-4">
                                <div className="size-10 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 flex items-center justify-center text-white shadow-sm">
                                    <span className="material-symbols-outlined text-xl">
                                        photo_camera
                                    </span>
                                </div>
                                <div>
                                    <div className="flex items-center gap-2">
                                        <p className="text-sm font-bold text-[#111118] dark:text-white">
                                            Instagram
                                        </p>
                                        <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-green-100 text-green-700">
                                            Active
                                        </span>
                                    </div>
                                    <p className="text-xs text-[#60608a] dark:text-[#9494b8]">
                                        @alex.creates
                                    </p>
                                </div>
                            </div>
                            <button className="opacity-0 group-hover:opacity-100 px-4 py-2 rounded-lg border border-[#e6e6ef] dark:border-[#2b2b40] text-[#60608a] text-xs font-bold hover:bg-red-50 hover:text-red-500 hover:border-red-200 transition-all">
                                Disconnect
                            </button>
                        </div>
                        <div className="flex items-center justify-between p-4 rounded-xl border border-[#e6e6ef] dark:border-[#2b2b40] bg-transparent hover:bg-[#f5f5f8] dark:hover:bg-[#1f1f35] transition-colors group">
                            <div className="flex items-center gap-4">
                                <div className="size-10 rounded-full bg-black flex items-center justify-center text-white shadow-sm">
                                    <span className="material-symbols-outlined text-xl">
                                        music_note
                                    </span>
                                </div>
                                <div>
                                    <div className="flex items-center gap-2">
                                        <p className="text-sm font-bold text-[#111118] dark:text-white">
                                            TikTok
                                        </p>
                                        <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-green-100 text-green-700">
                                            Active
                                        </span>
                                    </div>
                                    <p className="text-xs text-[#60608a] dark:text-[#9494b8]">
                                        @alex_vibes
                                    </p>
                                </div>
                            </div>
                            <button className="opacity-0 group-hover:opacity-100 px-4 py-2 rounded-lg border border-[#e6e6ef] dark:border-[#2b2b40] text-[#60608a] text-xs font-bold hover:bg-red-50 hover:text-red-500 hover:border-red-200 transition-all">
                                Disconnect
                            </button>
                        </div>
                        <div className="flex items-center justify-between p-4 rounded-xl border border-dashed border-[#dbdbe6] dark:border-[#2b2b40] bg-transparent">
                            <div className="flex items-center gap-4">
                                <div className="size-10 rounded-full bg-[#0077b5] flex items-center justify-center text-white shadow-sm">
                                    <span className="material-symbols-outlined text-xl">
                                        work
                                    </span>
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-[#111118] dark:text-white">
                                        LinkedIn
                                    </p>
                                    <p className="text-xs text-[#60608a] dark:text-[#9494b8]">
                                        Not connected
                                    </p>
                                </div>
                            </div>
                            <button className="px-4 py-2 rounded-lg bg-[#111118] dark:bg-white text-white dark:text-[#111118] text-xs font-bold hover:opacity-90 transition-all">
                                Connect
                            </button>
                        </div>
                        <div className="flex items-center justify-between p-4 rounded-xl border border-dashed border-[#dbdbe6] dark:border-[#2b2b40] bg-transparent">
                            <div className="flex items-center gap-4">
                                <div className="size-10 rounded-full bg-black flex items-center justify-center text-white shadow-sm">
                                    <span className="text-lg font-bold">X</span>
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-[#111118] dark:text-white">
                                        X / Twitter
                                    </p>
                                    <p className="text-xs text-[#60608a] dark:text-[#9494b8]">
                                        Not connected
                                    </p>
                                </div>
                            </div>
                            <button className="px-4 py-2 rounded-lg bg-[#111118] dark:bg-white text-white dark:text-[#111118] text-xs font-bold hover:opacity-90 transition-all">
                                Connect
                            </button>
                        </div>
                    </div>
                </section>
                <section className="bg-white dark:bg-[#16162c] rounded-2xl p-6 shadow-sm border border-[#e6e6ef] dark:border-[#2b2b40]">
                    <div className="mb-6">
                        <h3 className="text-lg font-bold text-[#111118] dark:text-white">
                            App Preferences
                        </h3>
                        <p className="text-[#60608a] dark:text-[#9494b8] text-sm">
                            Customize your experience and notifications.
                        </p>
                    </div>
                    <div className="space-y-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-bold text-[#111118] dark:text-white">
                                    Weekly Analysis Report
                                </p>
                                <p className="text-xs text-[#60608a] dark:text-[#9494b8]">
                                    Receive a summary of your Vibe Score every Monday.
                                </p>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input
                                    defaultChecked
                                    className="sr-only peer"
                                    type="checkbox"
                                    value=""
                                />
                                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                            </label>
                        </div>
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-bold text-[#111118] dark:text-white">
                                    Product Updates
                                </p>
                                <p className="text-xs text-[#60608a] dark:text-[#9494b8]">
                                    Receive news about new features and improvements.
                                </p>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input
                                    className="sr-only peer"
                                    type="checkbox"
                                    value=""
                                />
                                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                            </label>
                        </div>
                        <div className="h-px w-full bg-[#e6e6ef] dark:bg-[#2b2b40]"></div>
                        <div>
                            <p className="text-sm font-bold text-[#111118] dark:text-white mb-3">
                                Interface Theme
                            </p>
                            <div className="grid grid-cols-3 gap-3">
                                <button
                                    onClick={() => setTheme("light")}
                                    className={`flex items-center justify-center gap-2 p-3 rounded-xl transition-all ${getButtonClass("light")}`}
                                >
                                    <span className="material-symbols-outlined">light_mode</span>
                                    <span className="text-xs">Light</span>
                                </button>
                                <button
                                    onClick={() => setTheme("dark")}
                                    className={`flex items-center justify-center gap-2 p-3 rounded-xl transition-all ${getButtonClass("dark")}`}
                                >
                                    <span className="material-symbols-outlined">dark_mode</span>
                                    <span className="text-xs">Dark</span>
                                </button>
                                <button
                                    onClick={() => setTheme("system")}
                                    className={`flex items-center justify-center gap-2 p-3 rounded-xl transition-all ${getButtonClass("system")}`}
                                >
                                    <span className="material-symbols-outlined">contrast</span>
                                    <span className="text-xs">System</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="p-6 rounded-2xl border border-red-200 bg-red-50/50 dark:bg-red-900/10 dark:border-red-900/30">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                        <div>
                            <h4 className="text-red-600 dark:text-red-400 font-bold text-sm">
                                Delete Account
                            </h4>
                            <p className="text-red-500/80 dark:text-red-400/70 text-xs mt-1">
                                Permanently delete your account and all associated data.
                            </p>
                        </div>
                        <button className="px-4 py-2 rounded-lg bg-white dark:bg-[#16162c] text-red-600 border border-red-200 dark:border-red-900/30 text-xs font-bold hover:bg-red-50 transition-all">
                            Delete Account
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
}
