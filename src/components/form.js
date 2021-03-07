import { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Button, Card } from 'antd';

function BlogForm({ onCreate, onUpdate, onCancelUpdate, blog }){
  const formRef = useRef();
  
  function onFinish(formValues) {
    formRef.current.resetFields();

    if(blog)
      onUpdate({ id: blog.id, ...formValues });
    else
      onCreate(formValues);
  }

  function onCancel() {
    formRef.current.resetFields();

    onCancelUpdate();
  }

  useEffect(() => {
    formRef.current.setFieldsValue(blog);
  }, [blog]); 


  return (
    <Card title={`${blog ? 'Update' : 'Post'} a blog`}>
      <Form 
        layout="vertical"
        onFinish={onFinish}
        ref={formRef}
      >
        <Form.Item
          label="Title"
          name="title"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Content"
          name="content"
          rules={[{ required: true }]}
        >
          <Input.TextArea rows={5} />
        </Form.Item>
        <Form.Item>
          <Button 
            htmlType="submit"
            className="action-button"
            type="primary"
          >
            {blog ? 'Save' : 'Submit'}
          </Button>
          {
            blog && (
              <Button 
                onClick={onCancel}
                style={{ marginLeft: 10 }}
                className="action-button"
              >
                Cancel
              </Button>
            )
          }
        </Form.Item>
      </Form>
    </Card>
  );
}

BlogForm.propTypes = {
  onCreate: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
  onCancelUpdate: PropTypes.func.isRequired,
  blog: PropTypes.exact({
    id: PropTypes.number,
    title: PropTypes.string,
    content: PropTypes.string,
    date_created: PropTypes.instanceOf(Date)
  })
};


export default BlogForm;