# Render CI/CD Deployment Guide

This document explains how to set up continuous deployment for the RLEC website to Render using GitHub Actions and GitHub CLI.

## Overview

The project is configured with:
- **GitHub Actions**: Automated CI/CD pipeline with enhanced deployment features
- **Render**: Cloud hosting platform with auto-deploy enabled
- **GitHub CLI**: Command-line tool for easy configuration and management

## Quick Setup with GitHub CLI

### Prerequisites

1. Install GitHub CLI: https://cli.github.com/
2. Authenticate with GitHub:
   ```bash
   gh auth login
   ```

### Automated Setup

Run the setup script:
```bash
./setup-cicd.sh
```

This will:
- Verify GitHub authentication
- Enable GitHub Actions on the repository
- Configure Render deploy hook secret
- Set up production environment

### Manual Setup Steps

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

## Managing CI/CD with GitHub CLI

### Common Commands

**View workflow runs:**
```bash
gh run list --limit 10
```

**Watch the latest workflow run:**
```bash
gh run watch
```

**Trigger manual deployment:**
```bash
gh workflow run deploy.yml
```

**View workflow logs:**
```bash
gh run view --log
```

**List repository secrets:**
```bash
gh secret list
```

**Set Render deploy hook secret:**
```bash
echo "YOUR_RENDER_DEPLOY_HOOK_URL" | gh secret set RENDER_DEPLOY_HOOK_URL
```

**View Actions status:**
```bash
gh api repos/rONin01010101010/RLEC/actions/permissions
```

### Interactive Management Tool

Use the interactive management script:
```bash
./gh-commands.sh
```

This provides a menu-driven interface for:
- Viewing workflow runs
- Watching deployments in real-time
- Managing secrets
- Triggering manual deployments
- Viewing deployment logs

## Enhanced Workflow Features

The GitHub Actions workflow includes:

1. **Dependency Caching**: Faster builds by caching npm packages
2. **Build Artifacts**: Stores build output for debugging
3. **Deployment Summary**: Rich summaries in GitHub Actions UI
4. **Manual Triggers**: Deploy on-demand via `workflow_dispatch`
5. **Environment Protection**: Production environment with deployment URL
6. **Error Handling**: Improved error reporting and status codes
7. **Deployment Verification**: Waits and verifies deployment completion

## Deployment Flow

```
Developer commits code
         ↓
Push to GitHub (master branch)
         ↓
GitHub Actions Triggered
         ↓
  ├─ Install dependencies (cached)
  ├─ Run ESLint
  ├─ Build Next.js app
  └─ Upload build artifacts
         ↓
    Tests passed?
         ↓  Yes
Deploy Job Starts
         ↓
  ├─ Trigger Render webhook (if configured)
  └─ Wait for deployment
         ↓
Render Auto-Deploy
         ↓
  ├─ Pull latest code
  ├─ Run build command
  └─ Start application
         ↓
Deployment Complete! ✅
```

## Environment Setup

The workflow uses a production environment that can be configured with:
- **Protection rules**: Require approvals before deployment
- **Environment secrets**: Separate secrets for production
- **Deployment URL**: https://rlec-website.onrender.com

To set up the environment:
1. Go to: https://github.com/rONin01010101010/RLEC/settings/environments
2. Create an environment named `production`
3. Add protection rules if needed
4. Set the environment URL

## Monitoring Deployments

### Via GitHub CLI
```bash
# Watch current deployment
gh run watch

# View deployment history
gh run list --workflow=deploy.yml

# View specific run
gh run view <run-id> --log
```

### Via GitHub Web UI
Visit: https://github.com/rONin01010101010/RLEC/actions

### Via Render Dashboard
Visit: https://dashboard.render.com/

## Getting the Render Deploy Hook

1. Log in to [Render Dashboard](https://dashboard.render.com/)
2. Select your `rlec-website` service
3. Go to **Settings** → **Deploy Hook**
4. Copy the Deploy Hook URL
5. Set it as a GitHub secret:
   ```bash
   echo "YOUR_HOOK_URL" | gh secret set RENDER_DEPLOY_HOOK_URL
   ```

**Note**: The deploy hook is optional. If not configured, Render will still auto-deploy via Git integration.

---

**Last Updated**: 2025-12-11
**Workflow Version**: 2.0 (Enhanced with gh CLI support)
