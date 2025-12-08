#!/bin/bash

echo "Building the site..."
npm run build

echo "Deploying to gh-pages branch..."

# Save current branch
CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD)

# Go to out directory
cd out

# Initialize git if needed
if [ ! -d .git ]; then
  git init
  git remote add origin https://github.com/rONin01010101010/RLEC.git
fi

# Add .nojekyll file (important for Next.js)
touch .nojekyll

# Add all files
git add -A

# Commit
git commit -m "Deploy to GitHub Pages - $(date)"

# Push to gh-pages branch (force push to overwrite)
git push -f origin HEAD:gh-pages

# Go back
cd ..

echo ""
echo "✅ Deployment complete!"
echo ""
echo "Next steps:"
echo "1. Go to https://github.com/rONin01010101010/RLEC/settings/pages"
echo "2. Under 'Source', select:"
echo "   - Branch: gh-pages"
echo "   - Folder: / (root)"
echo "3. Click Save"
echo ""
echo "Your site will be live at: https://ronin01010101010.github.io/RLEC/"
