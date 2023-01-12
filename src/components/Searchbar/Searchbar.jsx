import { GoSearch } from 'react-icons/go';
import PropTypes from 'prop-types';

import {
  StyledSearchbar,
  SearchForm,
  SearchFormBtn,
  SearchFormInput,
} from './Searchbar.styled';

export const Searchbar = ({ onSubmit }) => {
  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(e.target.elements.search.value);
    e.target.elements.search.value = '';
  };
  return (
    <StyledSearchbar>
      <SearchForm onSubmit={handleSubmit}>
        <SearchFormBtn type="submit">
          <GoSearch />
        </SearchFormBtn>

        <SearchFormInput
          name="search"
          type="text"
          autocomplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </SearchForm>
    </StyledSearchbar>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};
