import { configureStore } from '@reduxjs/toolkit'
import moviesReducer from './slices/moviesSlice'
import searchReducer from './slices/searchSlice'
import favoritesReducer from './slices/favoritesSlice'

// Redux store configuration with all reducers
export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    search: searchReducer,
    favorites: favoritesReducer,
  },
})

