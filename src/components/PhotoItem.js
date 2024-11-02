import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { showModal } from '../redux/imageModal';
import Lazyload from 'react-lazyload'
 
function PhotoItem({ photo: { urls, alt } }) {
  const dispatch = useDispatch();

  const openModal = () => {
    dispatch(showModal({ src: urls.full, alt }));
  };

  return (
    <ImageWrap>
      <Lazyload>
        <Image src={urls.small + '&t=' + new Date().getTime()} alt={alt} onClick={openModal} />
      </Lazyload>
    </ImageWrap>
  );
}

const ImageWrap = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 56.25%;
`;

const Image = styled.img`
  cursor: pointer;
  width: 100%;
  position: absolute;
  height: 100%;
  top: 0;
  left: 0;
`;

export default PhotoItem;
