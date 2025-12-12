# CI/CD Quick Start Guide

## What's Been Set Up

✅ **Enhanced GitHub Actions Workflow**
- Location: `.github/workflows/deploy.yml`
- Features: Caching, artifacts, deployment summaries, manual triggers

✅ **Render Auto-Deploy Configuration**
- Updated: `render.yaml`
- Auto-deploy enabled on master branch

✅ **Setup Scripts**
- `setup-cicd.sh` - Automated configuration script
- `gh-commands.sh` - Interactive management tool

✅ **Documentation**
- `RENDER_DEPLOYMENT.md` - Complete deployment guide

## Quick Start (3 Steps)

### Step 1: Authenticate with GitHub CLI

```bash
gh auth login
```

Follow the prompts to authenticate.

### Step 2: Run Setup Script

```bash
./setup-cicd.sh
```

This will configure:
- GitHub Actions permissions
- Render deploy hook (optional)
- Production environment

### Step 3: Push and Deploy

```bash
git add .
git commit -m "Set up CI/CD with GitHub Actions"
git push origin master
```

Watch the deployment:
```bash
gh run watch
```

## What Happens on Every Push

1. **Build & Test Job**
   - Checkout code
   - Setup Node.js 18.17.0
   - Install dependencies (cached for speed)
   - Run ESLint
   - Build Next.js app
   - Upload build artifacts

2. **Deploy Job** (only on master)
   - Trigger Render webhook (if configured)
   - Wait for deployment
   - Generate deployment summary

3. **Render Auto-Deploy**
   - Pull latest code
   - Run `npm install && npm run build`
   - Start with `npm start`

## Monitoring Deployments

### Option 1: GitHub CLI
```bash
# Watch live deployment
gh run watch

# View recent runs
gh run list --limit 10

# View logs
gh run view --log
```

### Option 2: Interactive Tool
```bash
./gh-commands.sh
```

### Option 3: Web Interfaces
- GitHub: https://github.com/rONin01010101010/RLEC/actions
- Render: https://dashboard.render.com/

## Manual Deployment

Trigger a deployment without pushing code:

```bash
gh workflow run deploy.yml
```

## Troubleshooting

### "gh: command not found"
Install GitHub CLI: https://cli.github.com/

### "authentication failed"
Run: `gh auth login`

### Workflow not running
Check if Actions are enabled:
```bash
gh api repos/rONin01010101010/RLEC/actions/permissions
```

### Build failures
View logs:
```bash
gh run view --log
```

## Optional: Render Deploy Hook

For faster deployments, add a Render webhook:

1. Get hook URL from: https://dashboard.render.com/ → Settings → Deploy Hook
2. Set as secret:
   ```bash
   echo "YOUR_HOOK_URL" | gh secret set RENDER_DEPLOY_HOOK_URL
   ```

**Note**: This is optional. Render will auto-deploy via Git integration anyway.

## Key Features

- ⚡ **Fast Builds**: Dependency caching reduces build time
- 📊 **Rich Summaries**: Detailed deployment info in GitHub UI
- 🔄 **Auto-Deploy**: Push to master = automatic deployment
- 🎯 **Manual Triggers**: Deploy on-demand via workflow_dispatch
- 🛡️ **Environment Protection**: Production environment with URL
- 📝 **Build Artifacts**: Download build outputs for debugging
- 🔍 **Error Tracking**: Improved error handling and reporting

## Next Steps

1. Run `./setup-cicd.sh` to configure everything
2. Make a small change and push to test
3. Watch the deployment with `gh run watch`
4. Check your site on Render

---

**Need Help?**
See: `RENDER_DEPLOYMENT.md` for full documentation
