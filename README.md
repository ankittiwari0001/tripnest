               # 🌍 Touriest AI

## 🚀 Overview

Touriest AI is an AI-powered tourism discovery platform designed to help travelers discover nearby attractions, hotels, restaurants, cafes, and local experiences in real time.

Built with modern technologies like Next.js, TypeScript, Leaflet, OpenStreetMap, and Framer Motion, Touriest AI focuses on delivering a fast, scalable, and user-friendly travel discovery experience.

---

# 🎯 Product Vision

Touriest AI is not just a tourism map application.

The long-term vision is to build a complete AI-powered travel ecosystem where users can:

* Discover nearby attractions
* Find hotels and restaurants
* Save favorite places
* Get personalized travel recommendations
* Plan trips with AI assistance
* Overcome language barriers while traveling
* Book hotels, restaurants, and cabs

The goal is to create a real-world travel product rather than a traditional college project.

---

# 📸 Screenshots

## Interactive Map

![Map Experience](./public/map1.png)

## Nearby Discovery

![Nearby Places](./public/map2.png)

---

# ✨ Features

## 🗺️ Smart Place Discovery

* Interactive Leaflet Map
* OpenStreetMap Integration
* Nearby Places Discovery
* Dynamic Marker Rendering
* Marker Clustering
* Location-Based Exploration

## 🔍 Search & Filters

* Real-Time Search
* Hotels Filter
* Restaurants Filter
* Attractions Filter
* Optimized Search Experience

## ❤️ Saved Places

* Save / Unsave Locations
* LocalStorage Persistence
* Travel Collection Foundation

## 🎨 Modern User Experience

* Responsive Design
* Skeleton Loading
* Empty States
* Error Handling
* Animated Place Drawer
* Framer Motion Integration

## ⚡ Performance Optimizations

* Optimized Custom Hooks
* Reduced API Requests
* Local Search Filtering
* Modular Architecture
* Better Rendering Performance

---

# 🛠️ Tech Stack

## Frontend

* Next.js 15
* React
* TypeScript
* Tailwind CSS

## Mapping

* Leaflet.js
* OpenStreetMap
* Leaflet Marker Cluster

## Animation

* Framer Motion

## Icons

* Lucide React

## Storage

* LocalStorage

---

# 🏗️ Project Architecture

Touriest AI follows a scalable and modular architecture designed for long-term product development.

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
│   ├── map/
│   ├── drawer/
│   ├── layout/
│   └── ui/
│
├── hooks/
│
├── services/
│
├── utils/
│
├── types/
│
├── data/
│
├── lib/
│
└── styles/
```

---

# 📖 Architecture Explained

## 📁 app/

Contains all application routes, layouts, pages, and API endpoints built using the Next.js App Router.

### Responsibilities

* Routing
* Layout Management
* Global Styling
* API Endpoints

---

## 📁 app/api/

Backend API endpoints used by the application.

### nearby/route.ts

Responsible for:

* Fetching nearby places
* Processing location data
* Returning place information to the frontend

---

## 📁 components/

Reusable UI and business components used throughout the application.

### map/

Contains all map-related components:

* DynamicMap
* MapSearch
* MapFilters
* SavedPlacesPanel
* PlaceDrawer
* MapLoading
* MapError
* MapEmpty

### drawer/

Modular components used inside PlaceDrawer.

Examples:

* DrawerHero
* DrawerTags
* DrawerSummary
* DrawerActions
* DrawerFooter

### layout/

Shared layout components.

Examples:

* Navbar
* Sidebar
* Footer

### ui/

Reusable design system components.

Examples:

* Button
* Input
* Modal
* Card
* Loader

---

## 📁 hooks/

Custom React hooks that encapsulate reusable business logic.

### useMapPlaces

Handles:

* Nearby places fetching
* Search filtering
* Loading state
* Error handling

### useSavedPlaces

Handles:

* Save places
* Remove places
* LocalStorage persistence

### useLeafletMarkers

Handles:

* Marker creation
* Marker clustering
* Map bounds management

### useUserLocation

Handles:

* User geolocation
* Location updates

---

## 📁 services/

Application services responsible for data processing and external integrations.

Future examples:

* Places Service
* AI Service
* Booking Service

---

## 📁 utils/

Utility functions and helper methods.

Examples:

* Marker generation
* Constants
* Formatters
* Shared helper functions

---

## 📁 types/

Centralized TypeScript interfaces and types.

Benefits:

* Better maintainability
* Improved type safety
* Cleaner development experience

---

## 📁 data/

Static application data.

Examples:

* Categories
* Fallback Places
* Mock Data

---

## 📁 lib/

Shared libraries and infrastructure.

Future examples:

* Database Configuration
* API Clients
* Storage Utilities

---

## 📁 styles/

Global and third-party styles.

Examples:

* Leaflet custom styles
* Shared styling utilities

---

# 🚀 Getting Started

## 1. Clone Repository

```bash
git clone https://github.com/ankittiwari0001/tripnest.git
```

## 2. Navigate to Project

```bash
cd tripnest
```

## 3. Install Dependencies

```bash
npm install
```

## 4. Run Development Server

```bash
npm run dev
```

## 5. Open Browser

```txt
http://localhost:3000
```

---

# ⚙️ Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_APP_NAME=Touriest AI
```

---

# 📈 Current Development Status

## ✅ Completed

* Interactive Map Experience
* Nearby Places API
* Marker Rendering
* Marker Clustering
* Search Optimization
* Saved Places System
* Place Drawer
* Responsive UI
* Skeleton Loading
* Empty & Error States
* Framer Motion Animations

## 🔄 In Progress

* Product Branding
* QA Testing
* Landing Experience

## 🚀 Planned

* Hotels Experience
* Restaurants Experience
* Attractions Experience
* Authentication
* Database Integration
* AI Assistant
* Booking Ecosystem

---

# 🚀 Future Roadmap

## Phase 2 — Product Identity

* Landing Page
* Branding System
* Product Showcase

## Phase 3 — Discovery Expansion

* Dedicated Hotels Experience
* Dedicated Restaurants Experience
* Attractions Experience

## Phase 4 — User System

* Authentication
* User Profiles
* Saved Collections

## Phase 5 — AI Features

* AI Travel Assistant
* Smart Trip Planner
* Language Assistance

## Phase 6 — Travel Ecosystem

* Hotel Booking
* Restaurant Booking
* Cab Booking

---

# 🚢 Deployment

Recommended Platform:

* Vercel

Production Checklist:

* Environment Variables
* Error Monitoring
* Analytics
* SEO Optimization
* Performance Audits

---

# 🤝 Contributing

Contributions, ideas, and feedback are welcome.

Feel free to fork the repository and submit pull requests.

---

# 👨‍💻 Author

**Ankit Tiwari**

Building Touriest AI — an AI-powered travel discovery platform.

---

# ⭐ Support

If you found this project helpful, consider giving it a star on GitHub.
