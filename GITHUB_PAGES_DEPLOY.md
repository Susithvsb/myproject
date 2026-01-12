# Deploy to GitHub Pages - Step by Step Guide

## Prerequisites
- GitHub account (free)
- Git installed on your computer
- Node.js installed

## Step 1: Create GitHub Repository

1. **Go to GitHub**: https://github.com
2. **Sign in** to your account (or create one if you don't have it)
3. **Click the "+" icon** (top right) → **"New repository"**
4. **Repository name**: `ak-catering-services` (or any name you prefer)
5. **Visibility**: Choose Public (required for free GitHub Pages)
6. **DO NOT** check "Initialize with README" (we already have files)
7. **Click "Create repository"**

## Step 2: Update Vite Config for Your Repository

1. **Note your repository name** from GitHub (e.g., `ak-catering-services`)
2. **Open `vite.config.js`** and update the `base` field:
   - If your repo is: `ak-catering-services`
   - Base should be: `/ak-catering-services/`
   - Update the file accordingly (see below)

## Step 3: Initialize Git and Push to GitHub

Open terminal/command prompt in your project folder and run:

```bash
# Initialize git repository
git init

# Add all files
git add .

# Commit files
git commit -m "Initial commit: A.K Catering Services website"

# Add your GitHub repository as remote (replace YOUR_USERNAME and REPO_NAME)
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**Replace:**
- `YOUR_USERNAME` with your GitHub username
- `REPO_NAME` with your repository name

Example:
```bash
git remote add origin https://github.com/johnsmith/ak-catering-services.git
```

## Step 4: Install gh-pages Package

```bash
npm install --save-dev gh-pages
```

## Step 5: Deploy to GitHub Pages

```bash
npm run deploy
```

This will:
1. Build your website
2. Create a `gh-pages` branch
3. Push the built files to GitHub
4. Your site will be live!

## Step 6: Enable GitHub Pages

1. **Go to your repository** on GitHub
2. **Click "Settings"** (top menu)
3. **Click "Pages"** (left sidebar)
4. **Under "Source"**:
   - Branch: Select `gh-pages`
   - Folder: Select `/ (root)`
5. **Click "Save"**

## Step 7: Access Your Live Website

Your website will be available at:
```
https://YOUR_USERNAME.github.io/REPO_NAME
```

Example:
```
https://johnsmith.github.io/ak-catering-services
```

⚠️ **Note:** It may take 1-5 minutes for the site to be live after first deployment.

## Future Updates

Whenever you make changes to your website:

1. **Make your changes**
2. **Commit and push**:
   ```bash
   git add .
   git commit -m "Update website"
   git push
   ```
3. **Deploy again**:
   ```bash
   npm run deploy
   ```

## Troubleshooting

### 404 Error on Pages
- Make sure you updated `vite.config.js` with the correct `base` path
- The base should match your repository name: `/repository-name/`

### Build Errors
- Make sure all dependencies are installed: `npm install`
- Check that you have the latest version: `npm install --save-dev gh-pages`

### Pages Not Showing
- Wait 2-5 minutes after deploying
- Check Settings → Pages → make sure source is set to `gh-pages` branch
- Clear browser cache and try again

## Quick Reference

```bash
# First time setup
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git
git push -u origin main
npm install --save-dev gh-pages

# Deploy
npm run deploy

# Your site URL
https://YOUR_USERNAME.github.io/REPO_NAME
```
