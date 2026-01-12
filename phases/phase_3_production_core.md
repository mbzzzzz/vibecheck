# Phase 3: Production Core Implementation Strategy

## Objective
Transition VibeCheck.ai from a local prototype to a production-ready MVP. This phase focuses on security, data integrity, and scalable asynchronous processing.

## 1. Database Reliability & Migrations (Alembic)
**Why Production-Ready?**
Directly creating tables with `Base.metadata.create_all()` is unacceptable for production. We need version-controlled schema changes to prevent data loss during updates.
- **Task**: Initialize Alembic (`alembic init alembic`).
- **Task**: Configure `env.py` to use our async SQLAlchemy engine and import all models.
- **Task**: Generate the initial migration for `User`, `SocialAccount`, and `AnalysisReport` tables.

## 2. Secure Authentication (Supabase Auth)
**Why Production-Ready?**
We cannot rely on a single "mock user". Production requires secure identity management, session handling, and Row Level Security (RLS).
- **Frontend**: Replace hardcoded states with `@supabase/auth-helpers-nextjs`. Implement "Sign In with Google".
- **Backend API**: Create a dependency `get_current_user` that verifies the Supabase JWT token on every protected request.
- **Data Sync**: Ensure that when a user signs up in Supabase, a corresponding record is created in our Postgres `users` table (via Webhook or lazy-creation on login).

## 3. The "Vibe Engine" (Celery + Redis + CrewAI)
**Why Production-Ready?**
AI analysis takes 10-60 seconds. HTTP requests timeout after 30s. A synchronous API will fail under load.
- **Architecture**:
    - **API**: Receives request -> Pushes Job ID to Redis -> Returns "Pending".
    - **Celery Worker**: Picks up job -> Scrapes Data -> Runs CrewAI Agents -> Updates DB.
    - **Frontend**: Polls endpoint / Establishes WebSocket for real-time progress updates.
- **Task**: Configure Celery in `app/core/celery_app.py`.
- **Task**: Define the `analyze_brand_vibe` task.

## 5. The "Secret Sauce" (Standout Features)
**Why Production-Ready?**
To beat generic analytics tools, we need sticky, shareable, and unique value. We will implement these specific "Add-ons" to differentiate VibeCheck.ai:

### A. "The Roast" (Virality Engine)
- **Concept**: A specific analysis mode where the AI is ruthlessly honest/funny about the user's brand inconsistencies.
- **Why**: Highly shareable on social media ("Look at what this AI just said about my LinkedIn 💀").
- **Tech**: A dedicated CrewAI agent with a "Comedian/Roaster" persona.

### B. "Vibe Doppelgänger" (Comparative Analysis)
- **Concept**: "You want to be 'Nike', but you're giving 'Wendy's'." Compare user embeddings against pre-indexed famous archetypes.
- **Tech**: Use `pgvector` to calculate cosine similarity against a seed database of 50+ top creator archetypes.

### C. "Cringe Check" (Draft Auditor)
- **Concept**: A pre-posting tool. User pastes a draft, AI says "PASS" or "FAIL" based on their established Vibe Score.
- **Tech**: Lightweight endpoint comparing draft embedding to the user's cluster center.

## 6. Integration & Error Handling
**Why Production-Ready?**
External APIs (Social Media, LLMs) fail nicely. We need retries and circuit breakers.
- **Task**: Implement centralized exception handling in FastAPI.
- **Task**: Set up Sentry (logging) for backend errors.

---

## Recommended Execution Order
1.  **Database Migrations**: Solidify the data schema first.
2.  **Authentication**: Secure the API.
3.  **The Vibe Engine**: Build the core analysis pipeline.
4.  **The Secret Sauce**: Implement "The Roast" and "Doppelgänger" agents on top of the engine.
