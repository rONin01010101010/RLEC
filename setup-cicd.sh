#!/bin/bash

# CI/CD Setup Script for RLEC Website
# This script configures GitHub Actions and Render integration using gh CLI

set -e

echo "=========================================="
echo "RLEC Website - CI/CD Setup"
echo "=========================================="
echo ""

# Check if gh CLI is installed
if ! command -v gh &> /dev/null; then
    echo "❌ Error: gh CLI is not installed"
    echo "Install it from: https://cli.github.com/"
    exit 1
fi

echo "✅ gh CLI is installed"
echo ""

# Check authentication
echo "Checking GitHub authentication..."
if ! gh auth status &> /dev/null; then
    echo "⚠️  Not authenticated with GitHub"
    echo "Running: gh auth login"
    gh auth login
else
    echo "✅ Already authenticated with GitHub"
fi

echo ""
echo "=========================================="
echo "Step 1: Enable GitHub Actions"
echo "=========================================="

# Enable GitHub Actions (if not already enabled)
echo "Enabling GitHub Actions for the repository..."
gh api repos/rONin01010101010/RLEC/actions/permissions \
  -X PUT \
  -f enabled=true \
  -f allowed_actions=all 2>/dev/null || echo "ℹ️  Actions already enabled or permissions needed"

echo ""
echo "=========================================="
echo "Step 2: Configure Render Deploy Hook"
echo "=========================================="

echo ""
echo "To get your Render Deploy Hook URL:"
echo "1. Go to https://dashboard.render.com/"
echo "2. Select your 'rlec-website' service"
echo "3. Go to Settings → Deploy Hook"
echo "4. Copy the Deploy Hook URL"
echo ""

read -p "Enter your Render Deploy Hook URL (or press Enter to skip): " DEPLOY_HOOK_URL

if [ -n "$DEPLOY_HOOK_URL" ]; then
    echo "Setting up RENDER_DEPLOY_HOOK_URL secret..."
    echo "$DEPLOY_HOOK_URL" | gh secret set RENDER_DEPLOY_HOOK_URL
    echo "✅ Secret configured successfully!"
else
    echo "ℹ️  Skipped - Render will use Git auto-deploy instead"
fi

echo ""
echo "=========================================="
echo "Step 3: Create Production Environment"
echo "=========================================="

echo "Setting up production environment..."
# Note: Environments are typically created via GitHub UI or API
echo "ℹ️  You may need to create the 'production' environment manually:"
echo "   Go to: https://github.com/rONin01010101010/RLEC/settings/environments"
echo "   Click 'New environment' and name it 'production'"

echo ""
echo "=========================================="
echo "Step 4: Verify Workflow Configuration"
echo "=========================================="

if [ -f ".github/workflows/deploy.yml" ]; then
    echo "✅ Workflow file exists: .github/workflows/deploy.yml"
else
    echo "❌ Workflow file not found!"
    exit 1
fi

echo ""
echo "=========================================="
echo "Setup Complete! 🎉"
echo "=========================================="
echo ""
echo "Next steps:"
echo "1. Commit and push your changes:"
echo "   git add ."
echo "   git commit -m 'Set up CI/CD pipeline'"
echo "   git push origin master"
echo ""
echo "2. Monitor the workflow:"
echo "   gh run watch"
echo "   Or visit: https://github.com/rONin01010101010/RLEC/actions"
echo ""
echo "3. Check deployment status:"
echo "   Visit: https://dashboard.render.com/"
echo ""
echo "=========================================="
