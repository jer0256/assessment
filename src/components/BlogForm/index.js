import { useRef } from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Button, Card } from 'antd';
import { Container } from 'app-style';
import { VALIDATION_RULES } from './validation';
import useBlogFormHook from './hook';

function BlogForm({ title, buttonLabel, action }) {
  const formRef = useRef();
  const { onSubmit, onCancel } = useBlogFormHook(formRef, action);

  return (
    <Card title={title}>
      <Form 
        layout="vertical" 
        onFinish={onSubmit} 
        ref={formRef}
      >
        <Form.Item 
          label="Title" 
          name="title" 
          rules={VALIDATION_RULES.TITLE}
        >
          <Input />
        </Form.Item>
        <Form.Item 
          label="Content" 
          name="content" 
          rules={VALIDATION_RULES.CONTENT}
        >
          <Input.TextArea rows={10} />
        </Form.Item>
        <Form.Item>
          <Container justify="flex-end">
            <Button 
              htmlType="submit" 
              className="action-button" 
              type="primary"
            >
              {buttonLabel}
            </Button>
            <Button 
              onClick={onCancel} 
              style={{ marginLeft: 10 }} 
              className="action-button"
            >
              Cancel
            </Button>
          </Container>
        </Form.Item>
      </Form>
    </Card>
  );
}

BlogForm.propTypes = {
  title: PropTypes.string.isRequired, 
  buttonLabel: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
};

export default BlogForm;