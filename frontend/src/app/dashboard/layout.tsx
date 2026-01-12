"use client";

import React from "react";
import Sidebar from "@/components/layout/sidebar";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex h-screen w-full bg-background-light dark:bg-background-dark font-display overflow-hidden">
            <Sidebar />
            <div className="flex-1 flex flex-col h-full overflow-hidden">
                {children}
            </div>
        </div>
    );
}
