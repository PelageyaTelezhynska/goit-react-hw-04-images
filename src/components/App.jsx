import { useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Container } from './Container';
import { GlobalStyle } from './GlobalStyle';
import { fetchPictures } from '../services/pixabay-api';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';

export const App = () => {
  const [query, setQuery] = useState(null);
  const [page, setPage] = useState(1);
  const [pictures, setPictures] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!query) return;
    async function getPictures() {
      try {
        setIsLoading(true);
        const fetchedPictures = await fetchPictures(query, page);
        if (fetchedPictures.length === 0) {
          return toast.error(
            'Sorry, we could not find any pictures that match your request. Try again!'
          );
        }
        setPictures(prev => [...prev, ...fetchedPictures]);
      } catch (error) {
        toast.error('Sorry, something went wrong. Try reloading the page');
      } finally {
        setIsLoading(false);
      }
    }
    getPictures();
  }, [query, page]);

  const handleSubmit = query => {
    setQuery(query);
    setPage(1);
    setPictures([]);
  };

  const LoadMore = () => {
    setPage(prev => prev + 1);
  };

  return (
    <>
      <GlobalStyle />

      <Container>
        <Searchbar onSubmit={handleSubmit} />
        {isLoading && <Loader />}
        {pictures.length > 0 && (
          <>
            <ImageGallery pictures={pictures} />

            <Button LoadMore={LoadMore} />
          </>
        )}
        <Toaster position="top-right" />
      </Container>
    </>
  );
};
