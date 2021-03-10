// // 자식 컴포넌트
// import React, { useState, useEffect } from "react";

// function OrderManagementArea({
//   posts,
//   loading,
//   postsPerPage,
//   totalPosts,
//   handleSortDate,
//   paginate,
//   handleDataNumber,
// }) {
//   const [checkItems, setCheckItems] = useState([]);

//   // 페이지 네이션 부분
//   const pageNumbers = [];

//   for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
//     pageNumbers.push(i);
//   }

//   // 체크박스 전체 단일 개체 선택
//   const handleSingleCheck = (checked, id) => {
//     if (checked) {
//       setCheckItems([...checkItems, id]);
//     } else {
//       // 체크 해제
//       setCheckItems(checkItems.filter((el) => el !== id));
//     }
//   };

//   // 체크박스 전체 선택
//   const handleAllCheck = (checked) => {
//     if (checked) {
//       console.log("wow");
//       const idArray = [];
//       // 전체 체크 박스가 체크 되면 id를 가진 모든 elements를 배열에 넣어주어서,
//       // 전체 체크 박스 체크
//       posts.forEach((el) => idArray.push(el.id));
//       setCheckItems(idArray);
//     }

//     // 반대의 경우 전체 체크 박스 체크 삭제
//     else {
//       setCheckItems([]);
//     }
//   };

//   const handleChange = (e) => {
//     handleDataNumber(e);
//     setCheckItems([]);
//   };

//   console.log(checkItems.length);
//   console.log(typeof postsPerPage);

//   return (
//     <OrderManagementSection>
//       {/* 검색 정렬 */}
//       <div>
//         <div>
//           <select name="" id="" onChange={handleSortDate}>
//             <option value="최신주문일순">최신주문일순</option>
//             <option value="주문일의 역순">주문일의 역순</option>
//           </select>
//         </div>
//         <div>
//           <select name="" id="" defaultValue="50" onChange={handleChange}>
//             <option value="10">10개씩보기</option>
//             <option value="20">20개씩보기</option>
//             <option value="50">50개씩보기</option>
//             <option value="100">100개씩보기</option>
//             <option value="150">150개씩보기</option>
//           </select>
//         </div>
//       </div>
//       //...
//       <th style={{ width: "19px" }}>
//         <div>
//           <span>
//             <TableHeadCheckBox
//               name="checkAll"
//               type={"checkbox"}
//               onChange={(e) => handleAllCheck(e.target.checked)}
//               // checkItems의 갯 수와 불러오는 데이터가 같을 때, 전체 선택을 활성화
//               // 하나라도 빼면 체크 박스 해제
//               checked={checkItems.length === postsPerPage ? true : false}
//             />
//           </span>
//         </div>
//       </th>
//       //...
//       <tbody>
//         {posts.map((el, index) => (
//           <OrderTableData
//             data={el}
//             index={index}
//             checkItems={checkItems}
//             setCheckItems={setCheckItems}
//             handleSingleCheck={handleSingleCheck}
//             loading={loading}
//           />
//         ))}
//       </tbody>
//     </OrderManagementSection>
//   );
// }
// export default OrderManagementArea;
