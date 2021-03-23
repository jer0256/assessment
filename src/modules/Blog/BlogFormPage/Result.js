import { useSelector } from 'react-redux';
import { Result as AntResult, Button } from 'antd';
import { useHistory } from 'react-router-dom';
import { ROUTE } from 'appconstants';

function Result() {
  const history = useHistory();
  const { currentAction } = useSelector(state => state.blog);

  console.log('result', currentAction);

  const ActionButtons = () => (
    <div>
      <Button type="primary">
        Go to Homepage
      </Button>
      {(currentAction === 'CREATE_BLOG') && 
        <Button onClick={() => history.push(ROUTE.BLOG_HOME_PAGE)}>
          Create Another
        </Button>
      }
    </div>
  );

  console.log('Result has rendered')

  return(
    <AntResult
      status="success"
      title={`${currentAction === 'EDIT_BLOG' ? 'Update' : 'Create'} Successful`}
      subTitle={`The blog has been ${currentAction === 'EDIT_BLOG' ? 'updated' : 'created'}.`}
      extra={<ActionButtons />}
    />
  );
}


export default Result;