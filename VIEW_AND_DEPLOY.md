# How to View Your Website & Deploy to GitHub

## 🌐 Step 1: View Your Website Locally

### Option A: Development Server (Best for Development)
1. **Open terminal** in your project folder
2. **Run this command:**
   ```bash
   npm run dev
   ```
3. **Look for this message:**
   ```
   Local:   http://localhost:5173/
   ```
4. **Open your browser** and go to: `http://localhost:5173`
5. You'll see your website!

**To stop the server:** Press `Ctrl + C` in the terminal

### Option B: Preview Production Build
1. **Make sure you've built the project:**
   ```bash
   npm run build
   ```
2. **Run preview:**
   ```bash
   npm run preview
   ```
3. **Open the URL shown** (usually `http://localhost:4173`)

---

## 📦 Step 2: Deploy to GitHub Pages

### Prerequisites Check

First, check if Git is installed:
```bash
git --version
```

**If Git is NOT installed:**
1. Download Git: https://git-scm.com/download/win
2. Install it (use default settings)
3. Restart your terminal/command prompt

### Deployment Steps

#### Step 1: Create GitHub Account & Repository

1. **Go to GitHub**: https://github.com
2. **Sign up** (if you don't have account) or **Sign in**
3. **Create new repository:**
   - Click the **"+"** icon (top right) → **"New repository"**
   - Repository name: `ak-catering-services`
   - Make it **Public** (required for free GitHub Pages)
   - **DO NOT** check "Initialize with README"
   - Click **"Create repository"**

#### Step 2: Update Repository Name in Config

1. **Open `vite.config.js`**
2. **Find this line:**
   ```javascript
   const REPO_NAME = 'ak-catering-services'
   ```
3. **Change it** to match your repository name (if different)

#### Step 3: Initialize Git and Push to GitHub

**Open terminal in your project folder** and run these commands:

```bash
# Initialize git repository
git init

# Add all files
git add .

# Commit files
git commit -m "Initial commit: A.K Catering Services website"

# Add your GitHub repository (REPLACE YOUR_USERNAME and REPO_NAME)
git remote add origin https://github.com/YOUR_USERNAME/ak-catering-services.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**Important:** Replace `YOUR_USERNAME` with your actual GitHub username!

Example:
```bash
git remote add origin https://github.com/nithish/ak-catering-services.git
```

#### Step 4: Deploy to GitHub Pages

```bash
npm run deploy
```

This will:
- Build your website
- Create a `gh-pages` branch
- Push to GitHub
- Make it ready for GitHub Pages

#### Step 5: Enable GitHub Pages

1. **Go to your repository** on GitHub
2. **Click "Settings"** (top menu)
3. **Click "Pages"** (left sidebar)
4. **Under "Source":**
   - Branch: Select **`gh-pages`**
   - Folder: Select **`/ (root)`**
5. **Click "Save"**

#### Step 6: Access Your Live Website

Wait 1-2 minutes, then your website will be live at:

```
https://YOUR_USERNAME.github.io/ak-catering-services
```

Example: If your username is `nithish`:
```
https://nithish.github.io/ak-catering-services
```

---

## 🔄 Updating Your Website

After making changes:

1. **Make your changes** to the code
2. **Commit and push:**
   ```bash
   git add .
   git commit -m "Update website"
   git push
   ```
3. **Deploy again:**
   ```bash
   npm run deploy
   ```

---

## 📋 Quick Command Reference

```bash
# View website locally
npm run dev

# Build website
npm run build

# Preview production build
npm run preview

# Deploy to GitHub Pages
npm run deploy

# Git commands
git add .
git commit -m "Your message"
git push
```

---

## ❓ Troubleshooting

### "git: command not found"
- Install Git from: https://git-scm.com/download/win
- Restart terminal after installation

### "npm run deploy" fails
- Make sure you've run `npm install` first
- Check that `gh-pages` is installed: `npm list gh-pages`

### Pages showing 404
- Make sure `vite.config.js` has the correct repository name
- Wait 2-5 minutes after first deployment
- Check Settings → Pages → Source is set to `gh-pages` branch

### Can't see website on localhost
- Make sure the dev server is running (`npm run dev`)
- Check the URL in terminal output
- Try a different browser

---

## ✅ Checklist

- [ ] Website viewed locally at `http://localhost:5173`
- [ ] Git installed (`git --version` works)
- [ ] GitHub account created
- [ ] Repository created on GitHub
- [ ] Code pushed to GitHub
- [ ] `npm run deploy` completed successfully
- [ ] GitHub Pages enabled in Settings
- [ ] Website accessible at `https://username.github.io/repo-name`

---

## 🎉 You're Done!

Once deployed, share your website link with anyone!
Your website will be live on the internet for free!
