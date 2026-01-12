# Quick Start: Deploy to GitHub Pages 🚀

## Fastest Method (5 Steps)

### Step 1: Create GitHub Repository
1. Go to https://github.com/new
2. Repository name: `ak-catering-services`
3. Make it **Public**
4. Click **"Create repository"**

### Step 2: Update Repository Name in Config

**IMPORTANT:** Open `vite.config.js` and change `REPO_NAME` to match your repository name:

```javascript
const REPO_NAME = 'ak-catering-services' // Change this to your repo name
```

### Step 3: Initialize Git and Push

Open terminal in your project folder:

```bash
# Initialize git
git init

# Add files
git add .

# Commit
git commit -m "Initial commit"

# Add GitHub remote (REPLACE with your username and repo name)
git remote add origin https://github.com/YOUR_USERNAME/ak-catering-services.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 4: Install gh-pages

```bash
npm install --save-dev gh-pages
```

### Step 5: Deploy

```bash
npm run deploy
```

### Step 6: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under **Source**: Select `gh-pages` branch
4. Click **Save**

## Your Website Will Be Live At:

```
https://YOUR_USERNAME.github.io/ak-catering-services
```

**Example:** If your username is `johnsmith`:
```
https://johnsmith.github.io/ak-catering-services
```

---

## Alternative: Automatic Deployment with GitHub Actions

The project includes a GitHub Actions workflow that automatically deploys when you push to main branch.

1. Enable GitHub Pages in repository Settings → Pages
2. Source: GitHub Actions
3. Push to main branch - it will auto-deploy!

---

## Need More Help?

See `GITHUB_PAGES_DEPLOY.md` for detailed instructions.
