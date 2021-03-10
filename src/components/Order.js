// import React , {useState,useEffect} from 'react'
// import axios from 'axios'
// import OrderManagementArea from './OrderManagementArea'
// function Order(props) {
//   const [posts, setPosts] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [postsPerPage, setPostsPerPage] = useState(50);

//   useEffect(() => {
//     const fetchDatas = async () => {
//       setLoading(true);
//       const res = await axios.get(
//         "https://jsonplaceholder.typicode.com/comments"
//       );
//       setPosts(res.data);
//       setLoading(false);
//     };

//     fetchDatas();
//   }, []);

//   // Change the number of data by select option
//   const handleDataNumber = (e) => {
//     // postPerpage의 type이 (select>option.value) string이기 때문에 number로 바꾸어준다.
//     // 이 부분에서 TypeScript의 중요성을 알게 되었다.
//     setPostsPerPage(Number(e.target.value));
//     setCurrentPage(1);
//   };
//   return(
//     <>
//         {/* 주문 관리 리스트 영역 */}
//         <OrderManagementArea
//           data={posts}
//           posts={currentPosts}
//           loading={loading}
//           postsPerPage={postsPerPage}
//           totalPosts={posts.length}
//           handleSortDate={handleSortDate}
//           paginate={paginate}
//           handleDataNumber={handleDataNumber}
//           />
//     </>
// )
// }

// export default Order;



const Order = () => {
  return (  
    <div> this is order</div>
  );
}
 
export default Order;