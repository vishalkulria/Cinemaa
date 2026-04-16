# Cinemaa - Movie Database

A modern IMDb clone built with React, Redux Toolkit, and TMDB API. Features a stunning neon purple theme with a sleek, modern UI.

## Features

- 🎬 Browse Popular, Top Rated, and Upcoming movies
- 🔍 Search movies with real-time results
- ❤️ Save favorite movies to your personal collection
- 📱 Responsive design
- 🎨 Modern neon purple theme with glassmorphism effects
- ⚡ Fast and optimized with Redux Toolkit

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- TMDB API key ([Get one here](https://www.themoviedb.org/settings/api))

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Cinema
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory:
```env
VITE_TMDB_API_KEY=your_api_key_here
```

4. Start the development server:
```bash
npm run dev
```

5. Open your browser and navigate to `http://localhost:3000`

## Project Structure

```
src/
├── components/       # Reusable components
│   ├── Header.jsx
│   ├── MovieCard.jsx
│   └── MovieGrid.jsx
├── pages/           # Page components
│   ├── Home.jsx
│   ├── Popular.jsx
│   ├── TopRated.jsx
│   ├── Upcoming.jsx
│   ├── MovieDetails.jsx
│   ├── Search.jsx
│   └── Favorites.jsx
├── store/           # Redux store
│   ├── store.js
│   └── slices/
│       ├── moviesSlice.js
│       ├── searchSlice.js
│       └── favoritesSlice.js
├── services/         # API services
│   └── tmdbApi.js
├── App.jsx
├── main.jsx
└── index.css
```

## Technologies Used

- **React** - UI library
- **Redux Toolkit** - State management
- **React Router** - Routing
- **Axios** - HTTP client
- **Vite** - Build tool
- **TMDB API** - Movie data

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## License

MIT

