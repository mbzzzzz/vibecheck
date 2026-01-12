"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { triggerAnalysis } from "@/lib/api";
import { useRouter } from "next/navigation";

export default function OnboardingPage() {
    const router = useRouter();
    const [step, setStep] = useState(1);
    const [selectedPlatforms, setSelectedPlatforms] = useState<Set<string>>(
        new Set(["instagram", "linkedin"])
    );
    const [analysisStatus, setAnalysisStatus] = useState("idle");
    const [progress, setProgress] = useState(0);

    const togglePlatform = (platform: string) => {
        const newSelected = new Set(selectedPlatforms);
        if (newSelected.has(platform)) {
            newSelected.delete(platform);
        } else {
            newSelected.add(platform);
        }
        setSelectedPlatforms(newSelected);
    };

    const handleStartAnalysis = () => {
        setStep(2);
    };

    const handleAnalyzeSelected = async () => {
        setStep(3);
        setAnalysisStatus("processing");

        // Simulate progress
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 90) return prev;
                return prev + Math.random() * 10;
            });
        }, 500);

        try {
            await triggerAnalysis();
            // Ensure specific delay for UX
            setTimeout(() => {
                clearInterval(interval);
                setProgress(100);
                setTimeout(() => {
                    setStep(4);
                    setAnalysisStatus("completed");
                }, 500);
            }, 3000);
        } catch (error) {
            console.error("Analysis failed", error);
            clearInterval(interval);
            // Fallback for demo if backend not running
            setTimeout(() => {
                setProgress(100);
                setStep(4);
                setAnalysisStatus("completed");
            }, 2000);
        }
    };

    return (
        <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white font-display overflow-x-hidden selection:bg-primary selection:text-white min-h-screen transition-colors duration-300">
            {/* Navbar */}
            <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-white/5 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md px-6 py-4 transition-colors duration-300">
                <div className="mx-auto flex max-w-6xl items-center justify-between">
                    <Link href="/" className="flex items-center gap-3">
                        <div className="relative size-24 overflow-hidden">
                            <img
                                src="/logo.png"
                                alt="Logo"
                                className="h-full w-full object-contain scale-125"
                            />
                        </div>
                        <h1 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
                            VibeCheck.ai
                        </h1>
                    </Link>
                    <div className="flex items-center gap-4">
                        <button className="hidden text-sm font-medium text-slate-600 dark:text-gray-400 transition-colors hover:text-primary dark:hover:text-white sm:block">
                            Sign In
                        </button>
                        <button className="flex h-9 cursor-pointer items-center justify-center rounded-lg bg-primary px-4 text-sm font-bold text-white transition-all hover:bg-primary-hover">
                            Get Started
                        </button>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="relative flex min-h-screen flex-col items-center justify-start gap-16 py-12 px-4 sm:px-6">
                {/* Background Decor */}
                <div className="pointer-events-none absolute inset-0 overflow-hidden">
                    <div className="absolute -left-[10%] top-0 h-[500px] w-[500px] rounded-full bg-primary/5 dark:bg-primary/10 blur-[120px]"></div>
                    <div className="absolute -right-[10%] top-[40%] h-[400px] w-[400px] rounded-full bg-purple-600/5 dark:bg-purple-600/10 blur-[100px]"></div>
                </div>
                <div className="relative z-10 mx-auto max-w-3xl text-center">
                    <h2 className="mb-4 text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
                        Onboarding Flow
                    </h2>
                    <p className="text-slate-500 dark:text-gray-400">
                        Step {step} of 4: {step === 1 ? "Start" : step === 2 ? "Connect" : step === 3 ? "Process" : "Result"}
                    </p>
                </div>

                {/* Step 1: Start Screen */}
                {step === 1 && (
                    <div className="relative w-full max-w-[480px] animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <div className="absolute -left-12 top-1/2 -translate-y-1/2 text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-gray-500 rotate-[-90deg] whitespace-nowrap">
                            Step 01: Start
                        </div>
                        <div className="group relative overflow-hidden rounded-2xl bg-white dark:bg-surface-dark border border-slate-200 dark:border-white/5 shadow-xl dark:shadow-2xl transition-all hover:shadow-primary/10 dark:hover:shadow-primary/10 hover:border-primary/30">
                            {/* Hero Image Area */}
                            <div className="relative h-64 w-full overflow-hidden bg-gray-100 dark:bg-gray-900">
                                <div
                                    className="absolute inset-0 bg-cover bg-center opacity-80 mix-blend-overlay transition-transform duration-700 group-hover:scale-105"
                                    data-alt="Abstract dark fluid gradient background with blue and purple tones"
                                    style={{
                                        backgroundImage:
                                            'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDQG1iqJEoqhzvVZqkyf9C2M001o--8iS_hBoQ85WA9mfJvdRF1PSaC_lBNTH_hX_QKpn8skHuvcGe_iEIyfd1u3yvfK484uDat6Ell5nd2sWbX-UtzOvAl5WRw9mBoilYBpqw6MYbWsAiXQlRT2z3hA7lM5P8pgtbIHuFgMiWbFxfRwVF0bx-5lJ6F7YVk5PXR52ZllSqLVpXnLpgAoCWC3bZK557QVb9VCXTLYLw2sHGBL0gVOoD6XXpLVA15F8KpVSUsRgS_rhw")',
                                    }}
                                ></div>
                                <div className="absolute inset-0 bg-gradient-to-t from-white/90 dark:from-surface-dark via-white/20 dark:via-surface-dark/50 to-transparent"></div>
                                <div className="absolute bottom-6 left-6 right-6">
                                    <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-primary/10 dark:bg-primary/20 border border-primary/20 px-3 py-1 text-xs font-bold text-primary dark:text-primary-300 backdrop-blur-sm">
                                        <span className="material-symbols-outlined text-sm">
                                            auto_awesome
                                        </span>
                                        <span>AI-Powered</span>
                                    </div>
                                    <h3 className="text-3xl font-bold leading-tight text-slate-900 dark:text-white">
                                        Ready to check your vibe?
                                    </h3>
                                </div>
                            </div>
                            {/* Content */}
                            <div className="p-6 pt-2">
                                <p className="mb-8 text-base font-normal leading-relaxed text-slate-600 dark:text-gray-400">
                                    Our AI analyzes your cross-platform consistency to ensure your
                                    brand feels authentic everywhere.
                                </p>
                                <button
                                    onClick={handleStartAnalysis}
                                    className="flex h-12 w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-primary px-6 text-sm font-bold tracking-wide text-white transition-all hover:bg-primary-hover hover:scale-[1.02] shadow-[0_0_20px_rgba(13,13,242,0.3)]">
                                    <span>Start Analysis</span>
                                    <span className="material-symbols-outlined text-lg">
                                        arrow_forward
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/* Step 2: Platform Selection */}
                {step === 2 && (
                    <div className="relative w-full max-w-[480px] animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <div className="absolute -left-12 top-1/2 -translate-y-1/2 text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-gray-500 rotate-[-90deg] whitespace-nowrap">
                            Step 02: Connect
                        </div>
                        <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-surface-dark border border-slate-200 dark:border-white/5 shadow-xl dark:shadow-2xl">
                            <div className="p-8">
                                <div className="mb-6 text-center">
                                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                                        Where do you live online?
                                    </h3>
                                    <p className="mt-2 text-sm text-slate-500 dark:text-gray-400">
                                        Select platforms for public data analysis. <br />
                                        No passwords required.
                                    </p>
                                </div>
                                {/* Platform Grid */}
                                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                                    {/* Instagram */}
                                    <div
                                        onClick={() => togglePlatform("instagram")}
                                        className={`group cursor-pointer relative flex items-center justify-between rounded-xl p-4 transition-all ${selectedPlatforms.has("instagram") ? "bg-slate-50 dark:bg-surface-highlight border border-primary" : "bg-white dark:bg-surface-highlight border border-slate-200 dark:border-white/5 hover:border-slate-300 dark:hover:border-white/20"}`}>
                                        <div className="flex items-center gap-3">
                                            <div className="flex size-8 items-center justify-center rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 text-white">
                                                <span className="material-symbols-outlined text-lg">
                                                    photo_camera
                                                </span>
                                            </div>
                                            <span className={`font-medium ${selectedPlatforms.has("instagram") ? "text-slate-900 dark:text-white" : "text-slate-500 dark:text-gray-300 group-hover:text-slate-900 dark:group-hover:text-white"}`}>Instagram</span>
                                        </div>
                                        <div className={`relative h-6 w-10 rounded-full transition-colors ${selectedPlatforms.has("instagram") ? "bg-primary" : "bg-slate-200 dark:bg-gray-700"}`}>
                                            <div className={`absolute top-1 size-4 rounded-full shadow-sm transition-all ${selectedPlatforms.has("instagram") ? "right-1 bg-white" : "left-1 bg-white dark:bg-gray-400"}`}></div>
                                        </div>
                                    </div>
                                    {/* TikTok */}
                                    <div
                                        onClick={() => togglePlatform("tiktok")}
                                        className={`group cursor-pointer relative flex items-center justify-between rounded-xl p-4 transition-all ${selectedPlatforms.has("tiktok") ? "bg-slate-50 dark:bg-surface-highlight border border-primary" : "bg-white dark:bg-surface-highlight border border-slate-200 dark:border-white/5 hover:border-slate-300 dark:hover:border-white/20"}`}>
                                        <div className="flex items-center gap-3">
                                            <div className="flex size-8 items-center justify-center rounded-full bg-black text-white border border-white/10">
                                                <span className="material-symbols-outlined text-lg">
                                                    music_note
                                                </span>
                                            </div>
                                            <span className={`font-medium ${selectedPlatforms.has("tiktok") ? "text-slate-900 dark:text-white" : "text-slate-500 dark:text-gray-300 group-hover:text-slate-900 dark:group-hover:text-white"}`}>TikTok</span>
                                        </div>
                                        <div className={`relative h-6 w-10 rounded-full transition-colors ${selectedPlatforms.has("tiktok") ? "bg-primary" : "bg-slate-200 dark:bg-gray-700"}`}>
                                            <div className={`absolute top-1 size-4 rounded-full shadow-sm transition-all ${selectedPlatforms.has("tiktok") ? "right-1 bg-white" : "left-1 bg-white dark:bg-gray-400"}`}></div>
                                        </div>
                                    </div>
                                    {/* LinkedIn */}
                                    <div
                                        onClick={() => togglePlatform("linkedin")}
                                        className={`group cursor-pointer relative flex items-center justify-between rounded-xl p-4 transition-all ${selectedPlatforms.has("linkedin") ? "bg-slate-50 dark:bg-surface-highlight border border-primary" : "bg-white dark:bg-surface-highlight border border-slate-200 dark:border-white/5 hover:border-slate-300 dark:hover:border-white/20"}`}>
                                        <div className="flex items-center gap-3">
                                            <div className="flex size-8 items-center justify-center rounded-full bg-[#0077b5] text-white">
                                                <span className="material-symbols-outlined text-lg">
                                                    work
                                                </span>
                                            </div>
                                            <span className={`font-medium ${selectedPlatforms.has("linkedin") ? "text-slate-900 dark:text-white" : "text-slate-500 dark:text-gray-300 group-hover:text-slate-900 dark:group-hover:text-white"}`}>LinkedIn</span>
                                        </div>
                                        <div className={`relative h-6 w-10 rounded-full transition-colors ${selectedPlatforms.has("linkedin") ? "bg-primary" : "bg-slate-200 dark:bg-gray-700"}`}>
                                            <div className={`absolute top-1 size-4 rounded-full shadow-sm transition-all ${selectedPlatforms.has("linkedin") ? "right-1 bg-white" : "left-1 bg-white dark:bg-gray-400"}`}></div>
                                        </div>
                                    </div>
                                    {/* X / Twitter */}
                                    <div
                                        onClick={() => togglePlatform("twitter")}
                                        className={`group cursor-pointer relative flex items-center justify-between rounded-xl p-4 transition-all ${selectedPlatforms.has("twitter") ? "bg-slate-50 dark:bg-surface-highlight border border-primary" : "bg-white dark:bg-surface-highlight border border-slate-200 dark:border-white/5 hover:border-slate-300 dark:hover:border-white/20"}`}>
                                        <div className="flex items-center gap-3">
                                            <div className="flex size-8 items-center justify-center rounded-full bg-slate-900 text-white">
                                                <span className="material-symbols-outlined text-lg">
                                                    close
                                                </span>
                                            </div>
                                            <span className={`font-medium ${selectedPlatforms.has("twitter") ? "text-slate-900 dark:text-white" : "text-slate-500 dark:text-gray-300 group-hover:text-slate-900 dark:group-hover:text-white"}`}>Twitter / X</span>
                                        </div>
                                        <div className={`relative h-6 w-10 rounded-full transition-colors ${selectedPlatforms.has("twitter") ? "bg-primary" : "bg-slate-200 dark:bg-gray-700"}`}>
                                            <div className={`absolute top-1 size-4 rounded-full shadow-sm transition-all ${selectedPlatforms.has("twitter") ? "right-1 bg-white" : "left-1 bg-white dark:bg-gray-400"}`}></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-8">
                                    <button
                                        onClick={handleAnalyzeSelected}
                                        disabled={selectedPlatforms.size === 0}
                                        className="flex h-12 w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-primary px-6 text-sm font-bold tracking-wide text-white transition-all hover:bg-primary-hover shadow-[0_0_15px_rgba(13,13,242,0.2)] disabled:opacity-50 disabled:cursor-not-allowed">
                                        Analyze Selected ({selectedPlatforms.size})
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Step 3: Loading / Analysis */}
                {step === 3 && (
                    <div className="relative w-full max-w-[480px] animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <div className="absolute -left-12 top-1/2 -translate-y-1/2 text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-gray-500 rotate-[-90deg] whitespace-nowrap">
                            Step 03: Process
                        </div>
                        <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-surface-dark border border-slate-200 dark:border-white/5 shadow-xl dark:shadow-2xl">
                            {/* Background subtle grid */}
                            <div
                                className="absolute inset-0 opacity-[0.03]"
                                style={{
                                    backgroundImage:
                                        "radial-gradient(#000 1px, transparent 1px)",
                                    backgroundSize: "20px 20px",
                                }}
                            ></div>
                            <div className="flex flex-col items-center justify-center p-12 text-center">
                                {/* Loading Animation */}
                                <div className="relative mb-8 size-24">
                                    <div className="absolute inset-0 rounded-full border-4 border-slate-200 dark:border-white/5"></div>
                                    <div
                                        className="absolute inset-0 animate-spin rounded-full border-4 border-primary border-t-transparent"
                                        style={{ animationDuration: "1.5s" }}
                                    ></div>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <span className="material-symbols-outlined animate-pulse text-3xl text-primary">
                                            psychology
                                        </span>
                                    </div>
                                </div>
                                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                                    Analyzing your vibe...
                                </h3>
                                <p className="mb-8 min-h-[1.5em] text-sm text-primary animate-pulse">
                                    Detecting cringe incidents...
                                </p>
                                {/* Progress Bar */}
                                <div className="relative h-2 w-full overflow-hidden rounded-full bg-slate-100 dark:bg-surface-highlight">
                                    <div
                                        className="absolute inset-y-0 left-0 rounded-full bg-primary shadow-[0_0_10px_rgba(13,13,242,0.8)] transition-all duration-300 ease-out"
                                        style={{ width: `${progress}%` }}
                                    >
                                        <div className="absolute inset-0 bg-white/20"></div>
                                    </div>
                                </div>
                                <div className="mt-2 w-full flex justify-between text-xs text-slate-400 dark:text-gray-500">
                                    <span>Initiating</span>
                                    <span>{Math.round(progress)}%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Step 4: The Big Reveal */}
                {step === 4 && (
                    <div className="relative w-full max-w-[480px] animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <div className="absolute -left-12 top-1/2 -translate-y-1/2 text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-gray-500 rotate-[-90deg] whitespace-nowrap">
                            Step 04: Result
                        </div>
                        <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-surface-dark border border-slate-200 dark:border-white/5 shadow-xl dark:shadow-2xl ring-1 ring-primary/20">
                            {/* Confetti / Success Decor */}
                            <div className="absolute inset-0 overflow-hidden opacity-30">
                                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary blur-[60px]"></div>
                                <div className="absolute -left-10 bottom-0 h-40 w-40 rounded-full bg-purple-500 blur-[60px]"></div>
                            </div>
                            <div className="relative flex flex-col items-center p-8 text-center">
                                <div className="mb-4 inline-flex items-center gap-1 rounded-full border border-green-500/20 bg-green-50 dark:bg-green-500/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-green-600 dark:text-green-400">
                                    <span className="material-symbols-outlined text-sm">
                                        verified
                                    </span>
                                    Vibe Certified
                                </div>
                                {/* Score */}
                                <div className="mb-6 flex flex-col items-center">
                                    <h2 className="text-8xl font-bold leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-slate-900 to-slate-500 dark:from-white dark:to-gray-400">
                                        87
                                    </h2>
                                    <span className="text-sm font-bold uppercase tracking-widest text-slate-400 dark:text-gray-500">
                                        Out of 100
                                    </span>
                                </div>
                                <div className="mb-8 w-full rounded-xl bg-slate-50 dark:bg-surface-highlight/50 p-4 border border-slate-100 dark:border-white/5 backdrop-blur-sm">
                                    <p className="text-base font-medium text-slate-900 dark:text-white">
                                        "You're mostly consistent, but LinkedIn is confused."
                                    </p>
                                    <p className="mt-2 text-xs text-slate-500 dark:text-gray-400">
                                        Your visual aesthetic matches 92% across platforms, but your tone
                                        of voice on LinkedIn drops to 45% alignment.
                                    </p>
                                </div>
                                <div className="flex w-full gap-3">
                                    <button className="flex h-12 flex-1 cursor-pointer items-center justify-center rounded-xl bg-white dark:bg-surface-highlight border border-slate-200 dark:border-white/10 px-4 text-sm font-bold text-slate-700 dark:text-white transition-all hover:bg-slate-50 dark:hover:bg-white/5 hover:border-slate-300">
                                        Share
                                    </button>
                                    <Link
                                        href="/dashboard"
                                        className="flex h-12 flex-[2] cursor-pointer items-center justify-center gap-2 rounded-xl bg-primary px-4 text-sm font-bold text-white transition-all hover:bg-primary-hover shadow-[0_0_20px_rgba(13,13,242,0.4)]"
                                    >
                                        View Full Report
                                        <span className="material-symbols-outlined text-sm">
                                            arrow_outward
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </main>

            {/* Footer */}
            <footer className="w-full border-t border-slate-200 dark:border-white/5 bg-white dark:bg-background-dark py-8 text-center transition-colors duration-300">
                <p className="text-xs text-slate-500 dark:text-gray-600">
                    © 2024 VibeCheck.ai. All vibes reserved.
                </p>
            </footer>
        </div>
    );
}
