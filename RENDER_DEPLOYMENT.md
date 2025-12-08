# Render Deployment Guide

## Issue Fixed

The app was configured for static export (`output: 'export'`) which doesn't work with Render's Next.js hosting. The configuration has been updated.

## Configuration Changes

1. **next.config.mjs** - Removed `output: 'export'` for dynamic Next.js deployment
2. **render.yaml** - Created Render configuration file
3. **next.config.static.mjs** - Backup config for static deployments (GitHub Pages, FTP)

## How to Deploy on Render

### Method 1: Using render.yaml (Automatic)

1. Commit and push these changes:
   ```bash
   git add .
   git commit -m "Configure for Render deployment"
   git push origin master
   ```

2. In Render dashboard:
   - Click "New +" → "Web Service"
   - Connect your GitHub repository: `rONin01010101010/RLEC`
   - Render will detect the `render.yaml` file automatically
   - Click "Apply" to deploy

3. Your app will be deployed and accessible at your Render URL

### Method 2: Manual Configuration in Render

If render.yaml doesn't work, configure manually:

1. In Render dashboard, click "New +" → "Web Service"

2. Connect repository: `rONin01010101010/RLEC`

3. Configure settings:
   - **Name**: `rlec-website` (or your choice)
   - **Region**: Oregon (or your choice)
   - **Branch**: `master`
   - **Root Directory**: `website`
   - **Runtime**: Node
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm start`
   - **Plan**: Free

4. Add Environment Variable:
   - **Key**: `NODE_VERSION`
   - **Value**: `18.17.0`

5. Click "Create Web Service"

## After Deployment

- Your site will be live at: `https://rlec-website.onrender.com` (or your chosen name)
- Render will automatically redeploy when you push to master
- First deployment may take 5-10 minutes

## For Static Deployments (GitHub Pages)

If you want to deploy to GitHub Pages or other static hosts:

```bash
# Build for static deployment
npm run build:static

# Deploy to GitHub Pages
npm run deploy
```

## Troubleshooting

### Still getting 404 errors?

1. **Check Render logs**:
   - Go to your service dashboard
   - Click "Logs" tab
   - Look for errors during build or startup

2. **Common issues**:
   - Build failed: Check if all dependencies are in package.json
   - Port issues: Render automatically assigns PORT env variable
   - Root directory: Make sure "Root Directory" is set to `website` in Render settings

3. **Verify build locally**:
   ```bash
   npm run build
   npm start
   # Visit http://localhost:3000
   ```

### Routes not working?

- Next.js dynamic routes should work automatically with `npm start`
- If using custom server, make sure it handles all routes
- Check that `trailingSlash: true` in next.config.mjs matches your route structure

### Images not loading?

- Current config has `images.unoptimized: true` which works for both Render and static hosting
- If you want Next.js image optimization on Render, remove this setting

## Switching Between Deployments

**For Render (dynamic):**
- Use the current `next.config.mjs`
- Deploy via git push

**For GitHub Pages (static):**
- Run `npm run build:static`
- Run `npm run deploy`

## Support

- Render Docs: https://render.com/docs/deploy-nextjs-app
- Next.js Deployment: https://nextjs.org/docs/deployment
