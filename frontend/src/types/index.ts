export interface AnalysisReport {
    id: string
    status: 'pending' | 'processing' | 'completed' | 'failed'
    vibe_score: number
    platform_scores: Record<string, { score: number; trend: string }>
    recommendations: Array<{ title: string; impact: number; platform: string }>
    consistency_gaps?: Array<{
        type: string;
        severity: 'critical' | 'warning' | 'info';
        message: string;
        platform?: string;
    }>
    tone_analysis?: {
        overall: string;
        platforms: Record<string, string>;
    }
    created_at: string
}
