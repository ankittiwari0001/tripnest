# 🌍 Touriest AI

## 📖 Short Description

An AI-powered tourism discovery platform built with Next.js, Leaflet, TypeScript, and modern frontend architecture.

Explore nearby hotels, restaurants, cafes, and attractions in real time with an interactive travel experience.

---

## 📸 Screenshots

![Home](public/map1.png)

![Map](public/map2.png)

---

## ✨ Features

- 🌍 Interactive Leaflet Map
- 📍 Real-time nearby discovery
- 🏨 Hotels, Restaurants & Attractions filters
- ❤️ Save / Unsave places
- 🧠 AI-inspired travel summaries
- 📱 Responsive modern UI
- ⚡ Optimized custom hooks architecture
- 💾 LocalStorage persistence
- 🎯 Dynamic marker rendering

---

## 🛠 Tech Stack

- Next.js
- TypeScript
- Tailwind CSS
- Leaflet.js
- React Hooks
- OpenStreetMap
- Lucide Icons

---

## 📂 Project Structure

```txt
src/
│
├── app/
│   ├── api/
│   │   └── nearby/
│   │       └── route.ts
│   │
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   └── map/
│       └── page.tsx
│
├── components/
│   │
│   ├── map/
│   │   ├── DynamicMap.tsx
│   │   ├── MapFilters.tsx
│   │   ├── MapSearch.tsx
│   │   ├── SavedPlacesPanel.tsx
│   │   ├── PlaceDrawer.tsx
│   │   ├── MapLoading.tsx
│   │   ├── MapError.tsx
│   │   ├── MapEmpty.tsx
│   │   └── MarkerPreviewCard.tsx
│   │
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   ├── Sidebar.tsx
│   │   └── Footer.tsx
│   │
│   └── ui/
│       ├── Button.tsx
│       ├── Input.tsx
│       ├── Modal.tsx
│       ├── Card.tsx
│       └── Loader.tsx
│
├── hooks/
│   ├── useSavedPlaces.ts
│   ├── useMapPlaces.ts
│   ├── useLeafletMarkers.ts
│   ├── useUserLocation.ts
│   └── useDebounce.ts
│
├── lib/
├── services/
├── utils/
├── types/
├── data/
├── public/
├── styles/
│
├── .env.local
├── .gitignore
├── next.config.ts
├── package.json
├── tsconfig.json
└── README.md
```

---

## 🚀 Getting Started

### 1️⃣ Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
```

---

### 2️⃣ Install Dependencies

```bash
npm install
```

---

### 3️⃣ Start Development Server

```bash
npm run dev
```

---

### 4️⃣ Open Browser

```txt
http://localhost:3000
```

---

## 🚀 Future Improvements

- AI Trip Planner
- Google Places API
- Authentication
- Marker Clustering
- Smart Recommendations
- Saved Trips Collections

---

## 👨‍💻 Author

Ankit tiwari
