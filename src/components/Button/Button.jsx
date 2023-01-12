import PropTypes from 'prop-types';
import { StyledBtn } from './Button.styled';

export const Button = ({ LoadMore }) => {
  return (
    <StyledBtn type="button" onClick={LoadMore}>
      Load more
    </StyledBtn>
  );
};

Button.propTypes = {
  LoadMore: PropTypes.func,
};
