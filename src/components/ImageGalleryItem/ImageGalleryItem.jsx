import { useState } from 'react';
import PropTypes from 'prop-types';
import { Img, ImgLarge } from './ImageGalleryItem.styled';
import { Modal } from 'components/Modal/Modal';

export const ImageGalleryItem = ({
  picture: { webformatURL, tags, largeImageURL },
}) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(prev => !prev);
  };

  return (
    <>
      <Img src={webformatURL} alt={tags} onClick={toggleModal} />

      {showModal && (
        <Modal onClose={toggleModal}>
          <ImgLarge src={largeImageURL} alt={tags} />
        </Modal>
      )}
    </>
  );
};

ImageGalleryItem.propTypes = {
  picture: PropTypes.shape({
    tags: PropTypes.string.isRequired,
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  }),
};
