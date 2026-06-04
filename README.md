# Photo Gallery

A photo gallery web app built with React, Vite, and Tailwind CSS.

![React](https://img.shields.io/badge/React-18-61DAFB?style=flat&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=flat&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-3-38B2AC?style=flat&logo=tailwind-css&logoColor=white)

## Live Demo

🔗 [deykris777.github.io/photo-gallery-react](https://deykris777.github.io/photo-gallery-react/)

## Features

- Fetches 30 photos from the Picsum Photos API on load
- Skeleton loading cards while data is fetching
- Responsive grid — 4 columns desktop, 2 tablet, 1 mobile
- Real-time search filter by author name
- Click any photo to open a fullscreen lightbox with keyboard navigation
- Mark photos as favourites with a heart button
- Favourites persist after page refresh via localStorage
- Favourites filter toggle — view only liked photos
- Download any photo directly from the card or lightbox
- Dark / Light mode toggle, preference saved to localStorage
- Animated landing page with gradient background

## Tech Stack

- React 18 + Vite
- Tailwind CSS v3
- Custom hook for data fetching (`useFetchPhotos`)
- `useReducer` for favourites state management
- `useCallback` + `useMemo` for performance optimization
- No UI libraries — Tailwind only

## Run Locally

```bash
npm install
npm run dev
```

## Screenshots

> Landing page and gallery screenshots coming soon.

---

Built as part of a frontend internship assignment.
