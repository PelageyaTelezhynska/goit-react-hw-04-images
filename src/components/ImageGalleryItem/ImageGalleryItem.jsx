import { Component } from 'react';
import PropTypes from 'prop-types';
import { Img, ImgLarge } from './ImageGalleryItem.styled';
import { Modal } from 'components/Modal/Modal';

export class ImageGalleryItem extends Component {
  state = {
    showModal: false,
    picture: this.props.picture,
  };

  static propTypes = {
    picture: PropTypes.shape({
      tags: PropTypes.string.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    }),
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };
  render() {
    const { picture, showModal } = this.state;
    return (
      <>
        <Img
          src={picture.webformatURL}
          alt={picture.tags}
          onClick={this.toggleModal}
        />

        {showModal && (
          <Modal onClose={this.toggleModal}>
            <ImgLarge src={picture.largeImageURL} alt={picture.tags} />
          </Modal>
        )}
      </>
    );
  }
}
