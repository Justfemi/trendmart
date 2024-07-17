import { createContext, useState } from 'react';
import { toast } from 'react-toastify';

// Create a Context for Favorites
export const FavoritesContext = createContext();

// Provider component
export const FavoritesProvider = ({ children }) => {
  const [favorite, setFavorite] = useState([]);

  const addToFavorite = (product) => {
    const existingIndex = favorite.findIndex((item) => item.id === product.id);
    if (existingIndex === -1) {
      setFavorite([...favorite, product]);
      toast.success('Added to your wishlist!');
    } else {
      toast.info('Item already in wishlist!');
    }
  };

  const removeFromFavorite = (productId) => {
    const updatedFavorites = favorite.filter((item) => item.id !== productId);
    setFavorite(updatedFavorites);
    toast.error('Removed from wishlist!');
  };

  const clearFavorites = () => {
    setFavorite([]);
    toast.info('Cleared wishlist!');
  };

  return (
    <FavoritesContext.Provider value={{ favorite, addToFavorite, removeFromFavorite, clearFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
};

// Custom hook to use the Favorites context
// export const useFavorites = () => useContext(FavoritesContext);
