import { useRef, useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Form, Input, Button, Card, notification } from 'antd';
import { getBlogById, createBlog, updateBlog } from 'api';
import { Container } from 'components';
import { useSelector, useDispatch } from 'react-redux';
import { setUpdateSuccess, setCreateSuccess } from 'redux/slices/blogSlice';
import { ERROR_MESSAGE } from 'appconstants';
import { VALIDATION_RULES } from './validation';

function BlogDetail() {
  const formRef = useRef();
  const history = useHistory();
  const dispatch = useDispatch();
  const { type } = useSelector(state => state.blog);
  const { id } = useParams();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getData() {
      const data = await getBlogById(id);

      formRef.current.setFieldsValue(data);
    }

    getData();
  }, [id]);

  async function onFinish(formValues) {
    
    if(type === 'CREATE_BLOG') {
      const result = await createBlog(formValues);

      if(result)
        dispatch(setCreateSuccess(true));
      else
        notification.error({
          message: 'Create failed.',
          description: ERROR_MESSAGE
        });
    }
    else {
      const result = await updateBlog({ ...formValues, id });

      if(result)
        dispatch(setUpdateSuccess(true));
      else
        notification.error({
          message: 'Update failed.',
          description: ERROR_MESSAGE
        });
    } 
  }

  function onCancel() {
    history.goBack();
  }

  console.log('BlogDetail has rendered');

  return (
    <Card title={`${type === 'update' ? 'Edit' : 'Post'} blog`}>
      <Form 
        layout="vertical"
        onFinish={onFinish}
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
              loading={loading}
            >
              {type === 'edit' ? 'Save' : 'Submit'}
            </Button>
            {
              type === 'edit' && (
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
  );
}

export default BlogDetail;