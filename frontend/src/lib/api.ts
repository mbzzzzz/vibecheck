import { AnalysisReport } from "@/types"

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api/v1'

export async function fetchLatestReport(): Promise<AnalysisReport> {
    const res = await fetch(`${API_URL}/reports/latest`, { cache: 'no-store' })

    if (!res.ok) {
        throw new Error('Failed to fetch report')
    }

    return res.json()
}

export async function triggerAnalysis(): Promise<{ status: string; job_id: string }> {
    const res = await fetch(`${API_URL}/reports/trigger`, {
        method: 'POST',
    })

    if (!res.ok) {
        throw new Error('Failed to trigger analysis')
    }

    return res.json()
}
