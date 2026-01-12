"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { useTheme } from "./providers";

export default function LandingPage() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  const isDark = mounted && (theme === "dark" || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches));

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-sans transition-colors duration-300 min-h-screen">
      <nav className="fixed w-full z-50 transition-all duration-300 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <div className="h-24 w-24 relative flex items-center justify-center">
                <Image
                  alt="VibeCheck.ai Logo"
                  className="object-contain scale-125"
                  src="/logo.png"
                  fill
                />
              </div>
              <span className="font-bold text-xl tracking-tight">
                VibeCheck<span className="text-primary">.ai</span>
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a
                className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors"
                href="#"
              >
                Features
              </a>
              <a
                className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors"
                href="#"
              >
                How it Works
              </a>
              <a
                className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors"
                href="#"
              >
                Pricing
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <button
                className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400 cursor-pointer"
                onClick={toggleTheme}
              >
                <span className="material-icons-round text-xl">
                  {isDark ? "light_mode" : "dark_mode"}
                </span>
              </button>
              <Link
                className="hidden md:inline-flex items-center justify-center px-5 py-2.5 border border-transparent text-sm font-semibold rounded-full text-white bg-primary hover:bg-primary-dark shadow-[0_0_20px_-5px_rgba(139,92,246,0.5)] transition-all transform hover:scale-105"
                href="/auth/sign-in"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="blob w-96 h-96 rounded-full bg-purple-400/30 dark:bg-purple-600/20 top-0 left-0 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="blob w-[500px] h-[500px] rounded-full bg-cyan-400/30 dark:bg-cyan-600/20 bottom-0 right-0 translate-x-1/3 translate-y-1/3"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            <div className="text-center lg:text-left space-y-8">
              <div className="inline-flex items-center space-x-2 bg-purple-50 dark:bg-purple-900/30 border border-purple-100 dark:border-purple-700/50 rounded-full px-3 py-1">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                <span className="text-xs font-semibold text-primary dark:text-purple-300 uppercase tracking-wide">
                  v1.0 Public Beta is Live
                </span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
                Is your brand <br className="hidden lg:block" />
                <span className="gradient-text">vibe consistent?</span>
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                The AI-powered analyzer for creators. We scan your social profiles
                to ensure a cohesive, authentic cross-platform presence. Stop
                guessing, start resonating.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                <Link
                  className="w-full sm:w-auto px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all flex items-center justify-center gap-2"
                  href="/auth/sign-in"
                >
                  <span className="material-icons-round">radar</span>
                  Audit My Vibe
                </Link>
                <a
                  className="w-full sm:w-auto px-8 py-4 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 font-semibold rounded-full hover:bg-slate-50 dark:hover:bg-slate-700 transition-all flex items-center justify-center gap-2"
                  href="#"
                >
                  View Demo
                </a>
              </div>
              <div className="pt-4 flex items-center justify-center lg:justify-start space-x-4 text-sm text-slate-500 dark:text-slate-400">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white dark:border-slate-900"></div>
                  <div className="w-8 h-8 rounded-full bg-slate-300 border-2 border-white dark:border-slate-900"></div>
                  <div className="w-8 h-8 rounded-full bg-slate-400 border-2 border-white dark:border-slate-900"></div>
                </div>
                <p>Trusted by 2,000+ creators</p>
              </div>
            </div>
            <div className="relative mx-auto w-full max-w-md lg:max-w-full perspective-1000">
              <div className="absolute inset-0 flex items-center justify-center opacity-10 dark:opacity-20 blur-xl scale-125 pointer-events-none">
                <img
                  alt=""
                  className="w-64 h-64 animate-pulse"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtRx_P7An-g8uVVovifeveZnIy6TIl_AYHjfGsU_B_gukR4_Zcd9JZ47KRcgODyxc862oQmPOJ4o4DPOHteQ0qDdg2IPLuJoA1f39PzSqDEgxhwp7m23OeEHOrWOMOB1HbWmohbAPbscEDIoxAEdeGfcbS2AR1GTSt5IV0s2qi1mfBgucC699yFBDXnv3TnBNayLEibXfnFa6OfgJ5uXQOckYHyOtMOixo4KcQQSTceLQG0kxJI_jfrSV_M80eOB_i_YaYgoeAjzo"
                />
              </div>
              <div className="glass-panel rounded-2xl p-6 shadow-2xl transform rotate-y-6 hover:rotate-y-0 transition-transform duration-500 ease-out relative overflow-hidden">
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-500 to-cyan-400 flex items-center justify-center text-white font-bold text-xs">
                      @alex
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                        Alex Creative
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        Cross-Platform Analysis
                      </p>
                    </div>
                  </div>
                  <div className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-bold rounded uppercase">
                    Active
                  </div>
                </div>
                <div className="flex items-center justify-center py-8">
                  <div className="relative w-40 h-40">
                    <svg
                      className="w-full h-full transform -rotate-90"
                    >
                      <circle
                        className="text-slate-100 dark:text-slate-700"
                        cx="80"
                        cy="80"
                        fill="transparent"
                        r="70"
                        stroke="currentColor"
                        strokeWidth="12"
                      ></circle>
                      <circle
                        className="text-primary"
                        cx="80"
                        cy="80"
                        fill="transparent"
                        r="70"
                        stroke="currentColor"
                        strokeDasharray="440"
                        strokeDashoffset="22"
                        strokeLinecap="round"
                        strokeWidth="12"
                      ></circle>
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-4xl font-black text-slate-900 dark:text-white">
                        95
                      </span>
                      <span className="text-xs font-semibold text-slate-500 uppercase">
                        Vibe Score
                      </span>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-white/50 dark:bg-slate-800/50 rounded-lg border border-slate-100 dark:border-slate-700">
                    <div className="flex items-center space-x-3">
                      <span className="text-pink-500 material-icons-round text-sm">
                        photo_camera
                      </span>
                      <span className="text-sm font-medium">Instagram</span>
                    </div>
                    <span className="text-xs font-bold text-green-600 dark:text-green-400 flex items-center">
                      <span className="material-icons-round text-sm mr-1">
                        check_circle
                      </span>{" "}
                      On Point
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white/50 dark:bg-slate-800/50 rounded-lg border border-slate-100 dark:border-slate-700">
                    <div className="flex items-center space-x-3">
                      <span className="text-blue-400 material-icons-round text-sm">
                        flutter_dash
                      </span>
                      <span className="text-sm font-medium">Twitter / X</span>
                    </div>
                    <span className="text-xs font-bold text-yellow-600 dark:text-yellow-400 flex items-center">
                      <span className="material-icons-round text-sm mr-1">
                        info
                      </span>{" "}
                      Tone mismatch
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white/50 dark:bg-slate-800/50 rounded-lg border border-slate-100 dark:border-slate-700">
                    <div className="flex items-center space-x-3">
                      <span className="text-blue-700 material-icons-round text-sm">
                        work
                      </span>
                      <span className="text-sm font-medium">LinkedIn</span>
                    </div>
                    <span className="text-xs font-bold text-green-600 dark:text-green-400 flex items-center">
                      <span className="material-icons-round text-sm mr-1">
                        check_circle
                      </span>{" "}
                      On Point
                    </span>
                  </div>
                </div>
              </div>
              <div
                className="absolute -bottom-6 -right-6 glass-panel p-4 rounded-xl shadow-lg hidden md:block animate-bounce"
                style={{ animationDuration: "3s" }}
              >
                <div className="flex items-center gap-3">
                  <div className="bg-green-100 dark:bg-green-900/40 p-2 rounded-lg text-green-600 dark:text-green-400">
                    <span className="material-icons-round">trending_up</span>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 uppercase font-bold">
                      Consistency
                    </p>
                    <p className="text-lg font-bold text-slate-900 dark:text-white">
                      +24%
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-white dark:bg-slate-900/50 border-t border-slate-100 dark:border-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              Everything you need to sync your signal
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg">
              Our AI analyzes images, captions, and bio data to ensure your
              personal brand tells the same story everywhere.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group p-8 rounded-2xl bg-slate-50 dark:bg-slate-800 hover:bg-white dark:hover:bg-slate-750 border border-slate-100 dark:border-slate-700 hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-purple-100 dark:bg-purple-900/30 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="material-icons-round text-3xl">bolt</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                Instant Audit
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Get a comprehensive analysis of your top 3 social profiles in under
                60 seconds. We value your time as much as your brand.
              </p>
            </div>
            <div className="group p-8 rounded-2xl bg-slate-50 dark:bg-slate-800 hover:bg-white dark:hover:bg-slate-750 border border-slate-100 dark:border-slate-700 hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-cyan-100 dark:bg-cyan-900/30 text-accent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="material-icons-round text-3xl">analytics</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                Consistency Score
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Quantify your brand mismatch with our proprietary Vibe Score™.
                Identify exactly which platform is dragging your cohesive image
                down.
              </p>
            </div>
            <div className="group p-8 rounded-2xl bg-slate-50 dark:bg-slate-800 hover:bg-white dark:hover:bg-slate-750 border border-slate-100 dark:border-slate-700 hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="material-icons-round text-3xl">
                  auto_fix_high
                </span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                Actionable Fixes
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Don't just see the problem, fix it. We generate specific bio
                rewrites, color palette suggestions, and content pillars to realign
                your vibe.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              Loved by creators worldwide
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg">
              See how VibeCheck.ai is helping personal brands find their authentic
              voice across every platform.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col justify-between hover:-translate-y-1 transition-transform duration-300">
              <div>
                <div className="flex text-yellow-400 mb-4 space-x-1">
                  <span className="material-icons-round text-xl">star</span>
                  <span className="material-icons-round text-xl">star</span>
                  <span className="material-icons-round text-xl">star</span>
                  <span className="material-icons-round text-xl">star</span>
                  <span className="material-icons-round text-xl">star</span>
                </div>
                <p className="text-slate-700 dark:text-slate-300 italic mb-6 leading-relaxed">
                  "I didn't realize my LinkedIn vibe was totally clashing with my
                  Twitter persona until I used VibeCheck. The actionable fixes were
                  a game changer for my growth."
                </p>
              </div>
              <div className="flex items-center space-x-4 border-t border-slate-100 dark:border-slate-700 pt-6">
                <img
                  alt="User Avatar"
                  className="w-12 h-12 rounded-full object-cover bg-slate-100 dark:bg-slate-700 ring-2 ring-primary/20"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJlUofm1bdUvyyHP1MbC9d99J0DthkzMYG3NJ-kSu_RxcPE2cj1HaKwYf4An2hCr0St7kV0IX-enMXJEOkkYcu7IMVtpn7grk4dzCKQKbzJHfdX6syUSx3JFmHbYX6cwDqL0BN0XMar7tr9zk_u-7zKQWm8k1_1IOk8GkI0dh6_Uo33R-kvbUbIdBPRnhOT-V4YgRvTILLnhT7srMhgQzoBkI7Mfttmmou_8gqT-KEuVtknti6ehuj5RXsT9164abkkwHSWlf2Kqk"
                />
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm">
                    Jessica Miller
                  </h4>
                  <p className="text-xs text-primary font-medium">
                    Lifestyle Creator
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col justify-between hover:-translate-y-1 transition-transform duration-300">
              <div>
                <div className="flex text-yellow-400 mb-4 space-x-1">
                  <span className="material-icons-round text-xl">star</span>
                  <span className="material-icons-round text-xl">star</span>
                  <span className="material-icons-round text-xl">star</span>
                  <span className="material-icons-round text-xl">star</span>
                  <span className="material-icons-round text-xl">star</span>
                </div>
                <p className="text-slate-700 dark:text-slate-300 italic mb-6 leading-relaxed">
                  "The Consistency Score gave me a concrete metric to improve. In
                  just two weeks, I've aligned my visual style and engagement is up
                  40%."
                </p>
              </div>
              <div className="flex items-center space-x-4 border-t border-slate-100 dark:border-slate-700 pt-6">
                <img
                  alt="User Avatar"
                  className="w-12 h-12 rounded-full object-cover bg-slate-100 dark:bg-slate-700 ring-2 ring-primary/20"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0WpNC2aa1AxKkJAcZ2TuspGmV__tkbCnwp7UF5jiRSFrUOD5xkdgP615fWEsgkkHfY4x6jxdSJ8EbhWuRvTix0YlGAjURIUXh3jNLwOlkFBIXCIUSWqGKffz-l0ZgkO1Knr1NXYuBnDpT6zlGAIbt-EqoRDMrtrNitwez4uYdGLNXYlxoNZBtg4Zaz9eJ8HCqrOxxCaEZLIfjN4-DX3e-wMLmJfeMZaSQuOQEk_YDf38dnPoCasjrvAxDtINclgMlY8VMMzY15IQ"
                />
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm">
                    Marcus Chen
                  </h4>
                  <p className="text-xs text-primary font-medium">Tech Reviewer</p>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col justify-between hover:-translate-y-1 transition-transform duration-300">
              <div>
                <div className="flex text-yellow-400 mb-4 space-x-1">
                  <span className="material-icons-round text-xl">star</span>
                  <span className="material-icons-round text-xl">star</span>
                  <span className="material-icons-round text-xl">star</span>
                  <span className="material-icons-round text-xl">star</span>
                  <span className="material-icons-round text-xl">star</span>
                </div>
                <p className="text-slate-700 dark:text-slate-300 italic mb-6 leading-relaxed">
                  "Finally, an AI tool that understands 'vibe' isn't just about
                  color palettes. It's about voice, tone, and energy. Highly
                  recommended!"
                </p>
              </div>
              <div className="flex items-center space-x-4 border-t border-slate-100 dark:border-slate-700 pt-6">
                <img
                  alt="User Avatar"
                  className="w-12 h-12 rounded-full object-cover bg-slate-100 dark:bg-slate-700 ring-2 ring-primary/20"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA99U5zPVY77N1TWFOryG5-6E3yRUl1SXhNUPj4CMopCvVuKkhMAyXklCumvHILwoy8UnPy63dT0au1A2f_u3j-gTakDTGR9K_yEkVd8wwzHZkKq2pYBgPUAmRYftWgNg2qDnoLjE06-bxPMlKOgrOZpA4Dtdcx5eE2FnqfQdvGZq_RQUK88fxWjj8EWFO6qU2IOBPCjHI2TjlR2FkC0Y18LF6Mf43FiciumIzwZei_lqAbiN3nVrLG_Zm38qrkVf1EguN1vUs5aGw"
                />
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm">
                    Sarah L.
                  </h4>
                  <p className="text-xs text-primary font-medium">Digital Artist</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-background-light dark:bg-background-dark border-t border-slate-200 dark:border-slate-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <div className="h-20 w-20 relative flex items-center justify-center">
              <Image
                alt="VibeCheck logo small"
                className="object-contain scale-125"
                src="/logo.png"
                fill
              />
            </div>
            <span className="font-bold text-slate-900 dark:text-white">
              VibeCheck.ai
            </span>
          </div>
          <p className="text-slate-500 dark:text-slate-500 text-sm">
            © 2023 VibeCheck AI Inc. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
