import { Pagination as AntdPagination, message } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { getAllBlog } from 'api';
import { ERROR_MESSAGE } from 'appconstants/message';
import { setItemsByPagination } from 'redux/slices/blogSlice';


function Pagination() {
  const { currentPage, itemTotal, itemPerPage } = useSelector((state) => state.blog);
  const dispatch = useDispatch();

  async function onChange(page) {
    const data = await getAllBlog({
      page: page,
      items: itemPerPage
    });

    if(data) {
      dispatch(setItemsByPagination({
        currentPage: page,
        items: data.items,
        itemTotal: data.total
      }));
    }
    else {
      message.error(ERROR_MESSAGE);
    }
  }

  return (
    <div>
      <AntdPagination 
        responsive
        hideOnSinglePage
        current={currentPage}
        total={itemTotal} 
        showSizeChanger={false}
        pageSize={itemPerPage}
        onChange={onChange}
      />
    </div>
  );
}



export default Pagination;