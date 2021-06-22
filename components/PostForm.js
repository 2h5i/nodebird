import React, { useCallback, useRef, useState } from 'react';
import Form from 'antd/lib/form/Form';

import { Input, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import { addPost } from '../reducers/post';

const PostForm = () => {
  const { imagePaths } = useSelector((state) => state.post);

  const dispatch = useDispatch();
  const imageInput = useRef();

  const [text, setText] = useState('');

  const onChangeText = useCallback((e) => {
    setText(e.target.value);
  }, []);
  const onSubmit = useCallback(() => {
    dispatch(addPost);
    setText('');
  }, []);
  const onClickImageUpload = useCallback(() => {
    imageInput.current.click();
  }, [imageInput.current]);

  return (
    <Form style={{ margin: '10px 0 20px' }} encType="multipart/form-data" onFinish={onSubmit}>
      <Input.TextArea value={text} onChange={onChangeText} maxLength={140} placeholder="글을 작성해라." />
      <div>
        <input type="file" multiple hidden ref={imageInput} />
        <Button onClick={onClickImageUpload}>이미지 업로드</Button>
        <Button type="primary" style={{ float: 'right' }} htmlType="submit">
          짹짹
        </Button>
        <div>
          {imagePaths.map((img) => (
            <div key={img} style={{ display: 'inline-block' }}>
              <img src={img} style={{ width: 200 }} alt={img} />
            </div>
          ))}
        </div>
      </div>
    </Form>
  );
};

export default PostForm;
