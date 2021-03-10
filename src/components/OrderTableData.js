// // 자식의 자식 컴포넌트
// import React, { useState, useEffect, Fragment } from "react";
// import { useHistory } from "react-router-dom";
// import styled from "styled-components";
// import { Link } from "react-router-dom";

// function OrderTableData({
//   data,
//   handleSingleCheck,
//   checkItems,
//   loading,
//   index,
//   setCheckItems,
// }) {
//   if (loading) {
//     return <h2>Loading...</h2>;
//   }

//   const history = useHistory();

//   return (
//     <Fragment>
//       <TableRow>
//         <td>
//           <div>
//             <span>
//               <TableDataCheckBox
//                 type={"checkbox"}
//                 onChange={(e) => handleSingleCheck(e.target.checked, data.id)}
//                 // checkItems에 data.id가 있으면 체크 아니면 체크 해제
//                 checked={checkItems.includes(data.id) ? true : false}
//               />
//             </span>
//           </div>
//         </td>
//         <td>{data.postId}</td>
//         <td>{data.id}</td>
//         <td>{data.order_number}</td> */}
//         <td>
//           <Link to="/orderdetail">{data.postIdr}</Link>
//         </td>
//         <td>{data.name}</td>
//         <td>{data.email}</td>
//         <td>{data.body}</td>
//         <td>{data.quantity}</td>
//         <td>{data.orderer_name}</td>
//         <td>{data.phone_number}</td>
//         <td>{data.payment_amount}</td>
//         <td>{data.order_status}</td>
//       </TableRow>
//     </Fragment>
//   );
// }

// export default OrderTableData;

// const TableRow = styled.tr``;
// const TableDataCheckBox = styled.input``;