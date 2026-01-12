# How to Run the Website

## Why opening index.html shows a blank page?

This is a **React application** built with **Vite**. You **cannot** open `index.html` directly in a browser because:

1. React code needs to be compiled/transpiled
2. The app uses ES6 modules which require a server
3. Vite needs to process and bundle the JavaScript files

## Solution: Run the Development Server

### Step 1: Install Node.js
Make sure you have Node.js installed on your computer.
- Download from: https://nodejs.org/
- Verify installation: Open terminal/command prompt and type `node --version`

### Step 2: Install Dependencies
Open terminal/command prompt in the project folder and run:
```bash
npm install
```
This will install all required packages (React, React Router, Vite, etc.)

### Step 3: Start the Development Server
Run this command:
```bash
npm run dev
```

You should see output like:
```
  VITE v5.x.x  ready in xxx ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

### Step 4: Open in Browser
Copy the URL shown (usually `http://localhost:5173`) and paste it in your browser.

**That's it!** The website will now load correctly.

## Mobile Testing

To test on mobile devices:
1. Make sure your computer and phone are on the same WiFi network
2. When running `npm run dev`, look for the "Network" URL
3. On your phone's browser, enter that Network URL
4. Or use `npm run dev -- --host` to expose the server on your network

## Troubleshooting

**If npm commands don't work:**
- Make sure Node.js is installed
- Try `npm install` again
- Delete `node_modules` folder and `package-lock.json`, then run `npm install` again

**If port 5173 is already in use:**
- Vite will automatically use the next available port
- Check the terminal output for the correct URL

## Building for Production

When you're ready to deploy:
```bash
npm run build
```

This creates a `dist` folder with optimized files that can be deployed to any web hosting service.
