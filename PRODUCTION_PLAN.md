# Production & Web Launch Plan for VibeCheck.ai

## Objective
Transition VibeCheck.ai from a mock-data prototype to a production-ready, publicly accessible web application using free/open-source tiers for a zero-cost demo.

## Architecture Stack
*   **Frontend**: Next.js 14+ (hosted on Vercel) - *Already set up*
*   **Backend**: FastAPI (Python)
    *   **Hosting**: Railway (Trial/Hobby) or Render (Free Tier). *Recommendation: Render for persistent free tier.*
*   **Database**: Supabase (PostgreSQL)
    *   Free Tier: 500MB storage, ample for demo.
    *   Usage: Storing user profiles, analysis history, and reports.
*   **Authentication**: Supabase Auth
    *   Social Logins (Google, GitHub) + Email/Password.
*   **AI/ML Engine**: Google Gemini API via Google AI Studio
    *   Free Tier: Rate limited but sufficient for demo.
    *   Function: Analyzing text tone, consistency, and vibe matches.

## API Integration Strategy (Real Data Pivot)
To move away from mocks without incurring high costs of Enterprise Social APIs (e.g., X/Twitter API is $100+/mo for basic useful access), we will use a **"User-Provided Content + AI Analysis"** approach. This is "Real Data" because the user provides real text/links, and the AI really analyzes it.

### 1. Data Sources
*   **LinkedIn**: User pastes their "About" section or recent post text.
    *   *Why*: Official API requires business verification.
*   **Instagram**: Official Instagram Basic Display API (feasible) or User uploads screenshot/pastes bio.
    *   *Demo Fast Path*: User pastes Bio text + last 3 captions.
*   **Twitter/X**: User pastes recent tweets.
    *   *Why*: X API Free tier is write-only.

### 2. Backend Services (FastAPI)
We will expose these endpoints in `backend/app/main.py`:
*   `POST /analyze`: Accepts JSON payload of `{ bio: string, recent_posts: string[] }` for each platform.
*   `GET /report/{user_id}`: Retrieves stored reports from Supabase.

## Roadmap to Production

### Phase 1: Backend Deployment & DB Setup
1.  **Supabase**: Create project `vibecheck-prod`.
    *   Run SQL migration to create `reports` table.
2.  **Backend**:
    *   Connect FastAPI to Supabase (using `supabase-py`).
    *   Integrate Gemini API (`google-generativeai`).
    *   Deploy to Render/Railway.

### Phase 2: Frontend "Real Data" Inputs
1.  **Modify Onboarding**:
    *   Instead of just "clicking" a platform to connect (which mocks connection), open a modal/input asking for "Profile URL" or "Paste Bio".
    *   Pass this real input to the backend.
2.  **Live Analysis**:
    *   Call the real `POST /analyze` endpoint.
    *   Display the returned AI-generated Score and consistency feedback.

### Phase 3: UI Polish (Extreme Professionalism)
1.  **Visuals**: Fix contrast issues (backgrounds/buttons).
2.  **Feedback**: Add skeletons/spinners for real API latency (Gemini takes 2-5s).
3.  **Responsive**: Ensure mobile view is flawless.

## Needed APIs (Zero Cost)
| Service | Purpose | Cost | Status |
| :--- | :--- | :--- | :--- |
| **Vercel** | Frontend Hosting | Free | ✅ Ready |
| **Render/Railway** | Backend Hosting | Free | ⏳ To Do |
| **Supabase** | Database & Auth | Free | ⏳ To Do |
| **Google Gemini API** | Vibe Analysis | Free | ⏳ To Do |
| **Unsplash API** | Dynamic Backgrounds (Optional) | Free | ⏳ To Do |

## Immediate Next Steps
1.  Fix Frontend UI visibility bugs.
2.  Deploy basic Backend to Render/Railway.
3.  Connect Frontend APIs to Live Backend URL.
