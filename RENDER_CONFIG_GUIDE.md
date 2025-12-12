# Render Configuration Guide

## Current Configuration

Your `render.yaml` has been updated with the following fixes:

### ✅ Fixed Issues

1. **Replaced deprecated `autoDeploy`** with `autoDeployTrigger: commit`
2. **Added explicit `repo` field** for clarity
3. **Maintained `branch: master`** for consistent deployments

## autoDeployTrigger Options

### Option 1: `commit` (Current)
```yaml
autoDeployTrigger: commit
```
- **Behavior**: Deploys on every commit to the master branch
- **Use when**: You trust your code and want immediate deployments
- **Pros**: Fastest deployment cycle
- **Cons**: Deploys even if tests fail locally

### Option 2: `checksPass` (Recommended)
```yaml
autoDeployTrigger: checksPass
```
- **Behavior**: Deploys only when GitHub Actions checks pass
- **Use when**: You want safety guardrails
- **Pros**: Won't deploy broken code
- **Cons**: Slightly slower (waits for CI to complete)

**Recommendation**: Use `checksPass` since you have GitHub Actions configured!

## Branch Field

### Keep `branch: master` When:
- ✅ You only deploy from master/main
- ✅ You don't use Render preview environments
- ✅ You want explicit control

### Remove `branch` Field When:
- ✅ You want to use Render preview environments for PRs
- ✅ You want Render to use the repo's default branch automatically
- ✅ You might change your default branch in the future

## Recommended Configuration

For your setup with GitHub Actions, here's the optimal config:

```yaml
services:
  - type: web
    name: rlec-website
    env: node
    repo: https://github.com/rONin01010101010/RLEC
    region: oregon
    plan: free
    branch: master
    buildCommand: npm install && npm run build
    startCommand: npm start
    healthCheckPath: /
    autoDeployTrigger: checksPass  # Wait for GitHub Actions
    envVars:
      - key: NODE_VERSION
        value: 18.17.0
```

## Additional Recommended Fields

### Add Build Filter (Optional)
Deploy only when specific files change:

```yaml
buildFilter:
  paths:
    - app/**
    - components/**
    - public/**
    - package.json
  ignoredPaths:
    - README.md
    - docs/**
```

### Add Custom Domains (When Ready)
```yaml
domains:
  - rlec.yourdomain.com
```

### Add Headers for Security
```yaml
headers:
  - path: /*
    name: X-Frame-Options
    value: DENY
  - path: /*
    name: X-Content-Type-Options
    value: nosniff
```

## Complete Enhanced Example

```yaml
services:
  - type: web
    name: rlec-website
    env: node
    repo: https://github.com/rONin01010101010/RLEC
    region: oregon
    plan: free
    branch: master
    buildCommand: npm install && npm run build
    startCommand: npm start
    healthCheckPath: /
    autoDeployTrigger: checksPass
    
    # Optional: Only deploy when relevant files change
    buildFilter:
      paths:
        - app/**
        - components/**
        - public/**
        - package.json
        - package-lock.json
      ignoredPaths:
        - README.md
        - docs/**
        - "*.md"
    
    # Environment variables
    envVars:
      - key: NODE_VERSION
        value: 18.17.0
    
    # Optional: Security headers
    headers:
      - path: /*
        name: X-Frame-Options
        value: SAMEORIGIN
      - path: /*
        name: X-Content-Type-Options
        value: nosniff
      - path: /*
        name: Referrer-Policy
        value: strict-origin-when-cross-origin
```

## Validation

To validate your render.yaml:

```bash
# Check YAML syntax
cat render.yaml | grep -v "^#" | grep -v "^$"

# Validate structure
npm install -g yaml-validator
yaml-validator render.yaml
```

## Deployment Flow Comparison

### Current: `autoDeployTrigger: commit`
```
Push to GitHub → Render detects commit → Deploy immediately
```

### Recommended: `autoDeployTrigger: checksPass`
```
Push to GitHub → GitHub Actions runs → 
  ├─ Tests pass → Render deploys ✅
  └─ Tests fail → Render skips deploy ❌
```

## Next Steps

1. **Change to `checksPass` (Recommended)**
   ```yaml
   autoDeployTrigger: checksPass
   ```

2. **Commit and push**
   ```bash
   git add render.yaml
   git commit -m "Update render.yaml: use autoDeployTrigger with checksPass"
   git push origin master
   ```

3. **Verify in Render Dashboard**
   - Go to https://dashboard.render.com/
   - Check that auto-deploy settings are correct
   - Make a test commit to verify the flow

---

**Reference**: [Render Blueprint Spec](https://render.com/docs/blueprint-spec)
