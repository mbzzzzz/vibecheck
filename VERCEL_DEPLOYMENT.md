# Vercel Deployment Guide

## Prerequisites

1. **Vercel CLI installed** ✅ (v48.6.6)
   - If not installed: `npm i -g vercel`

2. **Vercel Account**
   - Sign up at https://vercel.com
   - Login via CLI: `vercel login`

3. **Environment Variables**
   - Set in Vercel Dashboard: Project Settings → Environment Variables
   - Required variable:
     - `NEXT_PUBLIC_API_URL` - Your backend API URL (e.g., `https://your-backend.herokuapp.com/api/v1`)

## Deployment Steps

### Option 1: Deploy via Vercel Dashboard (Recommended)
1. Go to https://vercel.com/new
2. Import your GitHub repository: `mbzzzzz/vibecheck`
3. Configure:
   - **Framework Preset**: Next.js
   - **Root Directory**: `frontend`
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`
4. Add environment variable: `NEXT_PUBLIC_API_URL`
5. Click "Deploy"

### Option 2: Deploy via CLI
```bash
# Navigate to frontend directory
cd frontend

# Login to Vercel (if not already logged in)
vercel login

# Deploy to production
vercel --prod

# Or deploy to preview
vercel
```

## Project Structure

- **Root Directory**: `frontend/`
- **Build Output**: `frontend/.next/`
- **Framework**: Next.js 16.1.1

## Environment Variables

Create these in Vercel Dashboard → Project Settings → Environment Variables:

| Variable | Description | Example |
|----------|-------------|---------|
| `NEXT_PUBLIC_API_URL` | Backend API endpoint | `https://api.example.com/api/v1` |

## Post-Deployment

1. Update CORS settings in your backend to include your Vercel domain
2. Test the deployed application
3. Set up custom domain (optional) in Vercel Dashboard

## Troubleshooting

- **Build fails**: Check build logs in Vercel Dashboard
- **API calls fail**: Verify `NEXT_PUBLIC_API_URL` is set correctly
- **CORS errors**: Update backend CORS settings to include Vercel domain


