import React, { useCallback, useState } from 'react';
import { PropTypes } from 'prop-types';
import { PlusOutlined } from '@ant-design/icons';
import ImagesZoom from './ImagesZoom';

const PostImages = ({ images }) => {
  const [showImageZoom, setShowImageZoom] = useState(false);

  const onZoom = useCallback(() => {
    setShowImageZoom(true);
  }, []);

  const onClose = useCallback(() => {
    setShowImageZoom(false);
  }, []);

  if (images.length === 1) {
    return (
      <>
        <img
          src={images[0].src}
          alt={images[0].src}
          onClick={onZoom}
          role="presentation" // 클릭 할 순 있지만 굳이 클릭할 필요는 없다. - 스크린 리더용 (장애인에게 필요)
        />
        {showImageZoom && <ImagesZoom images={images} onClose={onClose} />}
      </>
    );
  }
  if (images.length === 2) {
    return (
      <>
        <img
          src={images[0].src}
          alt={images[0].src}
          onClick={onZoom}
          role="presentation" // 클릭 할 순 있지만 굳이 클릭할 필요는 없다. - 스크린 리더용 (장애인에게 필요)
          style={{ width: '50%', display: 'inline-block' }}
        />
        <img
          src={images[1].src}
          alt={images[1].src}
          onClick={onZoom}
          role="presentation" // 클릭 할 순 있지만 굳이 클릭할 필요는 없다. - 스크린 리더용 (장애인에게 필요)
          style={{ width: '50%', display: 'inline-block' }}
        />
        {showImageZoom && <ImagesZoom images={images} onClose={onClose} />}
      </>
    );
  }

  return (
    <div>
      <img
        src={images[0].src}
        alt={images[0].src}
        onClick={onZoom}
        role="presentation" // 클릭 할 순 있지만 굳이 클릭할 필요는 없다. - 스크린 리더용 (장애인에게 필요)
        style={{ width: '50%' }}
      />
      <div
        role="presentation"
        style={{ display: 'inline-block', width: '50%', textAlign: 'center', verticalAlign: 'middle' }}
        onClick={onZoom}
      >
        <PlusOutlined />
        <br />
        {images.length - 1}
        개의 사진 더보기
      </div>
      {showImageZoom && <ImagesZoom images={images} onClose={onClose} />}
    </div>
  );
};

// PostImages.propTypes = {
//   images: PropTypes.arrayOf(PropTypes.object),
// };

export default PostImages;
