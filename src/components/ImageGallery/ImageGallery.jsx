import PropTypes from 'prop-types';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { StyledGallery, Item } from './ImageGallery.styled';

export const ImageGallery = ({ pictures }) => {
  return (
    <StyledGallery>
      {pictures.map(picture => (
        <Item key={picture.id}>
          <ImageGalleryItem picture={picture} />
        </Item>
      ))}
    </StyledGallery>
  );
};

ImageGallery.propTypes = {
  pictures: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
