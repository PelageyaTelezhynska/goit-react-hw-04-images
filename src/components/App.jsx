import { Component } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Container } from './Container';
import { GlobalStyle } from './GlobalStyle';
import { fetchPictures } from '../services/pixabay-api';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';

export class App extends Component {
  state = {
    query: null,
    page: 1,
    pictures: [],
    isLoading: false,
  };

  async componentDidUpdate(_, prevState) {
    const { query, page } = this.state;
    if (query !== prevState.query || page !== prevState.page) {
      const fetch = await this.getPictures(query, page);
      return fetch;
    }
  }

  getPictures = async (query, page) => {
    try {
      this.setState({ isLoading: true, error: null });
      const fetchedPictures = await fetchPictures(query, page);
      if (fetchedPictures.length === 0) {
        return toast.error(
          'Sorry, we could not find any pictures that match your request. Try again!'
        );
      }
      this.setState(({ pictures }) => ({
        pictures: [...pictures, ...fetchedPictures],
      }));
    } catch (error) {
      toast.error('Sorry, something went wrong. Try reloading the page');
    } finally {
      this.setState({ isLoading: false });
    }
  };

  handleSubmit = async query => {
    this.setState({ query, page: 1, pictures: [] });
  };

  LoadMore = () => {
    this.setState(({ page }) => ({ page: page + 1 }));
  };

  render() {
    const { pictures, isLoading } = this.state;
    return (
      <>
        <GlobalStyle />

        <Container>
          <Searchbar onSubmit={this.handleSubmit} />
          {isLoading && <Loader />}
          {pictures.length > 0 && (
            <>
              <ImageGallery pictures={pictures} />

              <Button LoadMore={this.LoadMore} />
            </>
          )}
          <Toaster position="top-right" />
        </Container>
      </>
    );
  }
}
