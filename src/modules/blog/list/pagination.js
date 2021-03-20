import { Pagination as AntdPagination, message } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { getAllBlog } from 'api';
import { ERROR_MESSAGE } from 'globals/constant';
import { 
  updateCurrentPage, 
  updateLoading, 
  updateTotalItems, 
  updateItems 
} from 'redux/slices/blog'


function Pagination() {
  const { currentPage, totalItems } = useSelector((state) => state.blog);
  const dispatch = useDispatch();
  const itemPerPage = 10;

  async function onChange(page) {
    dispatch(updateLoading(true));

    const data = await getAllBlog({
      page: page,
      itemCount: itemPerPage
    });

    dispatch(updateLoading(false));
    

    if(data) {
      dispatch(updateItems(data.items));
      dispatch(updateTotalItems(data.total));
      dispatch(updateCurrentPage(page));
    }
    else {
      message.error(ERROR_MESSAGE);
    }
  }

  return (
    <div>
      <AntdPagination 
        current={currentPage}
        total={totalItems} 
        showSizeChanger={false}
        onChange={onChange}
      />
    </div>
  );
}



export default Pagination;