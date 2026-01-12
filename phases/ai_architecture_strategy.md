# AI Architecture Strategy: The "Vibe Engine"

## Overview
The AI in VibeCheck.ai is not just a chatbot added on top. It is the core engine that drives the data model. To ensure it "fits like a glove," we treat AI components as **functional data processors** that integrate directly into our postgres database and API workflow.

## 1. The Core Loop (How it works together)
The seamless integration relies on a **"Vector-First"** approach.

### Step 1: Ingestion & Vectorization (The Senses)
*   **What happens**: User connects Instagram. We scrape the last 30 posts (Captions + Image Descriptions).
*   **The AI Part**: We pass every post through an **Embedding Model** (e.g., `all-MiniLM-L6-v2` or `OpenAI text-embedding-3-small`).
*   **The Fit**: This converts "vague social posts" into **Mathematical Coordinates (Vectors)** stored in `pgvector`.
    *   *Result*: We can now mathematically calculate "Consistency" by measuring the distance between these points. No LLM hallucination here, just hard math.

### Step 2: The CrewAI Agents (The Brains)
We don't use one giant prompt. We use specialized agents that read the database.

#### Agent A: The "Vibe Analyst" (Strict)
*   **Input**: The raw vectors and consistency variance stats from Step 1.
*   **Task**: "Given that the user's Twitter variance is 0.8 (high) and Instagram is 0.1 (low), identify the specific topic drift."
*   **Output**: Structured JSON (e.g., `{"score": 78, "primary_archetype": "Rebel", "drift_source": "LinkedIn"}`).

#### Agent B: The "Roaster" (Creative)
*   **Input**: The user's worst performing posts.
*   **Task**: "Write a 280-char roast about this specific LinkedIn post where they used 50 hashtags."
*   **Output**: The viral text snippet for the frontend.

### Step 3: Structured Delivery (The UI)
*   **The Fit**: The Agents do NOT return free-form text. They return **Pydantic Objects**.
    *   This means the Frontend doesn't need to parse text. It gets `{ "score": 78, "color": "#FF0000" }` and renders the gauge automatically.

---

## 2. Technical Implementation: "The Asynchronous Glove"

To make this feel instant and snappy for the user, we decouple the AI processing from the UI.

### The Pipeline
1.  **Frontend**: User clicks "Scan". UI shows a loading animation (The "Simulated" screen we built).
2.  **API**: Immediately returns `202 Accepted` and a `job_id`.
3.  **Celery Worker (Background)**:
    *   Fetches data.
    *   Runs Embeddings (Fast).
    *   Runs CrewAI Agents (Slow - 10-20s).
    *   **Crucial Step**: Writes results directly to the `AnalysisReport` table in Postgres.
4.  **Frontend**: Polls functionality sees "Completed" status and renders the Dashboard using the fresh data.

## 3. Why this fits "Like a Glove"
*   **Shared Memory**: The AI reads/writes to the same `users` and `content_items` tables as the rest of the app. It's not a separate silo.
*   **Math-Backed**: The "Vibe Score" isn't a random LLM guess. It's a calculated standard deviation of their content vectors, ensuring consistency over time.
*   **Type Safety**: By enforcing strict schemas between the AI and the App, we prevent the UI from breaking if the AI "talks too much".
