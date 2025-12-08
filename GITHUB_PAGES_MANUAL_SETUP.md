# Manual GitHub Pages Setup Guide

## Option 1: Deploy from gh-pages Branch (Recommended)

### Step 1: Build your site
```bash
npm run build
```

### Step 2: Create and checkout gh-pages branch
```bash
# Create a new orphan branch (no history)
git checkout --orphan gh-pages

# Remove all files from staging
git rm -rf .

# Copy contents from the out folder
cp -r out/* .

# Add a .nojekyll file (important for Next.js)
touch .nojekyll

# Stage all files
git add .

# Commit
git commit -m "Deploy to GitHub Pages"

# Force push to gh-pages branch
git push origin gh-pages --force

# Switch back to your main branch
git checkout master
```

### Step 3: Enable GitHub Pages
1. Go to your repository on GitHub: https://github.com/rONin01010101010/RLEC
2. Click **Settings** tab
3. Scroll down to **Pages** (in the left sidebar under "Code and automation")
4. Under **Source**, select:
   - Branch: `gh-pages`
   - Folder: `/ (root)`
5. Click **Save**

Your site will be live at: **https://ronin01010101010.github.io/RLEC/**

---

## Option 2: Deploy from docs folder on main branch

### Step 1: Update next.config.mjs
Change the output directory to `docs`:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'docs',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
```

### Step 2: Build and commit
```bash
# Build
npm run build

# Add .nojekyll file
touch docs/.nojekyll

# Commit and push
git add docs
git commit -m "Build for GitHub Pages"
git push origin master
```

### Step 3: Enable GitHub Pages
1. Go to repository Settings > Pages
2. Under **Source**, select:
   - Branch: `master`
   - Folder: `/docs`
3. Click **Save**

---

## Option 3: Simple Script for gh-pages Branch

Create this script to automate the deployment:

### Step 1: Create deployment script
Create `deploy.sh` in your website folder:

```bash
#!/bin/bash

# Build the site
echo "Building the site..."
npm run build

# Navigate to the output directory
cd out

# Initialize git if needed
if [ ! -d .git ]; then
  git init
  git remote add origin https://github.com/rONin01010101010/RLEC.git
fi

# Add .nojekyll file
touch .nojekyll

# Add all files
git add -A

# Commit
git commit -m "Deploy to GitHub Pages - $(date)"

# Push to gh-pages branch
git push -f origin HEAD:gh-pages

# Go back
cd ..

echo "Deployment complete!"
```

### Step 2: Make it executable and run
```bash
chmod +x deploy.sh
./deploy.sh
```

### Step 3: Enable GitHub Pages
1. Go to repository Settings > Pages
2. Under **Source**, select:
   - Branch: `gh-pages`
   - Folder: `/ (root)`
3. Click **Save**

---

## Option 4: Using GitHub Actions (Automated)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ master ]
  workflow_dispatch:

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout
        uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'

      - name: Install dependencies
        run: npm ci
        working-directory: ./website

      - name: Build
        run: npm run build
        working-directory: ./website

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./website/out
```

This will automatically deploy whenever you push to master.

---

## Important Notes

1. **Always include .nojekyll file** - This prevents GitHub from using Jekyll processing
2. **Base path issue** - I noticed the next.config.mjs had `basePath: '/RLEC'` removed. If your site is at ronin01010101010.github.io/RLEC (not the root), you need to add it back
3. **Wait time** - GitHub Pages can take 1-10 minutes to update after pushing

## Verifying Deployment

After enabling GitHub Pages, visit:
- https://ronin01010101010.github.io/RLEC/

If you see a 404 error, check:
1. The gh-pages branch exists
2. Files are in the root of that branch (not in a subfolder)
3. There's a .nojekyll file
4. GitHub Pages is enabled in Settings

## Troubleshooting

### Site shows 404
- Make sure you have `basePath: '/RLEC'` in next.config.mjs if deploying to /RLEC path
- Check that .nojekyll file exists
- Verify files are in the correct location on gh-pages branch

### CSS/JS not loading
- Check the basePath configuration
- Verify the build completed successfully
- Check browser console for errors

### Changes not showing
- GitHub Pages caching can take 5-10 minutes
- Try hard refresh: Ctrl+Shift+R (or Cmd+Shift+R on Mac)
- Check the deployment timestamp in Settings > Pages
