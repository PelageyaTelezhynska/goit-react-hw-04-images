import styled from 'styled-components';

export const Img = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover {
    transform: scale(1.03);
    cursor: zoom-in;
  }
`;

export const ImgLarge = styled.img`
  object-fit: cover;
  max-width: calc(100vw - 48px);
  max-height: calc(100vh - 24px);
`;
