# A.K Catering Services Website

A modern, responsive website for A.K Catering Services showcasing events, menu, and contact information.

## Features

- **Home Page**: Welcome page with hero section and navigation cards
- **Menu Page**: Browse dishes organized by categories (Appetizers, Main Courses, Breads, Desserts, Beverages)
- **Contact Page**: Comprehensive contact form with event details, guest count, dish selection, and contact information
- **About Page**: Information about A.K Catering Services and owner A. Karthik
- **Past Events Page**: Gallery showcasing previous catering events

## Technology Stack

- React 18
- React Router DOM
- Vite
- CSS (Warm, traditional design theme)

## Installation

1. Install dependencies:
```bash
npm install
```

2. Run development server:
```bash
npm run dev
```
The app will be available at `http://localhost:5173` (or another port if 5173 is taken).

**Important:** You cannot open `index.html` directly in a browser. This is a React application that requires a development server to run. The HTML file needs to be processed by Vite, which handles the JavaScript modules and React components.

3. Build for production:
```bash
npm run build
```

After building, you can preview the production build:
```bash
npm run preview
```

## Mobile Responsive Design

The website is fully responsive and optimized for:
- **Mobile phones** (320px - 480px)
- **Tablets** (481px - 768px)
- **Desktop** (769px and above)

Features:
- Hamburger menu for mobile navigation
- Touch-friendly buttons and links
- Optimized typography for smaller screens
- Responsive grid layouts that adapt to screen size
- Mobile-optimized forms and inputs

## Project Structure

```
src/
├── components/
│   ├── Navigation.jsx
│   ├── Footer.jsx
│   └── EventCard.jsx
├── pages/
│   ├── Home.jsx
│   ├── Menu.jsx
│   ├── Contact.jsx
│   ├── About.jsx
│   └── PastEvents.jsx
├── data/
│   ├── menuItems.js
│   └── pastEvents.js
├── styles/
│   ├── App.css
│   ├── Navigation.css
│   ├── Footer.css
│   ├── Home.css
│   ├── Menu.css
│   ├── Contact.css
│   ├── About.css
│   ├── PastEvents.css
│   └── EventCard.css
├── App.jsx
└── main.jsx
```

## Customization

- Update menu items in `src/data/menuItems.js`
- Update past events in `src/data/pastEvents.js`
- Modify contact information in `src/components/Footer.jsx`
- Adjust colors and styling in CSS files within `src/styles/`

## License

© 2024 A.K Catering Services. All rights reserved.
