import { useRef, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Form, Input, Button, Card, message } from 'antd';
import { Container } from 'components';
import { getBlogById, createBlog } from 'api';

function FormBlog({ action }){
  const formRef = useRef();
  const { id } = useParams();
  const [loading, setLoading] = useState(false);

  async function onFinish(formValues) {
    setLoading(true);
    const result = await createBlog(formValues);
    setLoading(false);

    if(result)
      message.success('Blog has been succesfully created.');
  }

  function onCancel() {
    
  }

  useEffect(() => {
    async function getData() {
      const data = await getBlogById(id);

      formRef.current.setFieldsValue(data);
    }

    getData();
  }, [id]);


  return (
    <Container margin={{ top: 30 }}>
      <Card title={`${action === 'update' ? 'Edit' : 'Post'} blog`}>
        <Form 
          layout="vertical"
          onFinish={onFinish}
          ref={formRef}
        >
          <Form.Item
            label="Title"
            name="title"
            rules={[
              { required: true, message: 'This field is required'},
              { whitespace: true }
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Content"
            name="content"
            rules={[
              { required: true, message: 'This field is required'},
              { whitespace: true }
            ]}
          >
            <Input.TextArea rows={10} />
          </Form.Item>
          <Form.Item>
            <Container justify="flex-end">
              <Button 
                htmlType="submit"
                className="action-button"
                type="primary"
                loading={loading}
              >
                {action === 'update' ? 'Save' : 'Submit'}
              </Button>
              {
                action === 'update' && (
                  <Button 
                    onClick={onCancel}
                    style={{ marginLeft: 10 }}
                    className="action-button"
                  >
                    Cancel
                  </Button>
                )
              }
            </Container>
          </Form.Item>
        </Form>
      </Card>
    </Container>
  );
}

FormBlog.propTypes = {
  action: PropTypes.string.isRequired
};


export { FormBlog };