import { Pagination as AntdPagination } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllItemsPagination } from 'redux/slices/blogSlice';


function Pagination() {
  const { allItems } = useSelector((state) => state.blog);
  const { currentPage, itemTotal, itemPerPage } = allItems;
  const dispatch = useDispatch();

  async function onChange(page) {
    dispatch(fetchAllItemsPagination({
      page: page,
      items: itemPerPage
    }));
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