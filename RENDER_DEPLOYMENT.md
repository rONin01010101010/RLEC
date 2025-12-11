# Render CI/CD Deployment Guide

This document explains how to set up continuous deployment for the RLEC website to Render.

## Overview

The project is configured with:
- **GitHub Actions**: Automated CI/CD pipeline that runs on every push
- **Render**: Cloud hosting platform with auto-deploy enabled

## Automatic Deployment Setup

### 1. Connect GitHub Repository to Render

1. Log in to your [Render Dashboard](https://dashboard.render.com/)
2. Select your `rlec-website` service
3. Go to **Settings** → **Build & Deploy**
4. Under **Git**, ensure:
   - **Repository**: `rONin01010101010/RLEC` is connected
   - **Branch**: `master` is selected
   - **Auto-Deploy**: Should be **enabled** (✓ Yes)

### 2. Verify Auto-Deploy is Enabled

In your Render service settings:
- Navigate to **Settings** → **Build & Deploy**
- Confirm **Auto-Deploy** is set to **Yes**
- This means Render will automatically deploy when you push to the `master` branch

## How It Works

### GitHub Actions Workflow

When you push code to GitHub:

1. **CI Pipeline Runs** (on every push/PR):
   - Checks out the code
   - Installs dependencies
   - Runs ESLint (linting)
   - Builds the Next.js application
   - Verifies build succeeds

2. **Deployment** (only on `master` branch):
   - Render automatically detects the push
   - Triggers a new deployment
   - Runs `npm install && npm run build`
   - Starts the application with `npm start`

### Workflow File

Location: `.github/workflows/deploy.yml`

## Testing the Setup

1. Make a change to any file
2. Commit and push to the `master` branch:
   ```bash
   git add .
   git commit -m "Test CI/CD deployment"
   git push origin master
   ```
3. Check the **Actions** tab in GitHub to see the CI pipeline running
4. Check your Render dashboard to see the automatic deployment

## Current Configuration

### render.yaml
```yaml
services:
  - type: web
    name: rlec-website
    env: node
    region: oregon
    plan: free
    buildCommand: npm install && npm run build
    startCommand: npm start
    healthCheckPath: /
    autoDeploy: true
    branch: master
```

### Environment Variables
- `NODE_VERSION`: 18.17.0

## Troubleshooting

### Deployment Not Triggering

- Verify Auto-Deploy is enabled in Render settings
- Ensure you're pushing to the `master` branch
- Check Render dashboard for any error messages

### Build Failures

- Check the GitHub Actions logs in the "Actions" tab
- Check Render deployment logs in the dashboard
- Verify all dependencies are in `package.json`

### Manual Deployment

If auto-deploy fails, you can manually deploy:
1. Go to your Render dashboard
2. Click **Manual Deploy** → **Deploy latest commit**

---

**Last Updated**: 2025-12-11
