import React, { useCallback } from 'react';
import { Form, Input, Button } from 'antd';
import useInput from '../hooks/useInput';
import { PropTypes } from 'prop-types';
import { useSelector } from 'react-redux';

const CommentForm = ({ post }) => {
  //   const id = useSelector((state) => state.user.me?.id);

  const [commentText, onChangeCommentText] = useInput('');
  const onSubmit = useCallback(() => {
    console.log(commentText, '??', post.id, '@@', id);
  }, [commentText]);
  return (
    <Form onFinish={onSubmit}>
      <Form.Item style={{ position: 'relative', margin: 0 }}>
        <Input.TextArea value={commentText} onChange={onChangeCommentText} rows={4} />

        <Button type="primary" htmlType="submit" style={{ position: 'absolute', right: 0, bottom: -40 }}>
          삐약
        </Button>
      </Form.Item>
    </Form>
  );
};

CommentForm.porpTypes = {
  post: PropTypes.object.isRequired,
};

export default CommentForm;
