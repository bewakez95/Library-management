// import React, { useEffect, useState } from "react";
// import { Button, Form, Table } from "react-bootstrap";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   deleteBookAction,
//   getAllBookAction,
// } from "../../pages/books/bookAction";
// import { Link, useNavigate } from "react-router-dom";
// import AdminLayout from "../components/layouts/AdminLayout";

// function BookTable() {
//   const { bookList } = useSelector((state) => state.book);
//   const [displayList, setDisplayList] = useState([]);
//   const navigate = useNavigate();

//   const dispatch = useDispatch();
//   useEffect(() => {
//     setDisplayList(bookList);
//   }, [bookList]);

//   useEffect(() => {
//     dispatch(getAllBookAction());
//   }, [dispatch]);

//   const handlOnDelete = (id) => {
//     dispatch(deleteBookAction(id));
//     navigate("/books");
//   };
//   const handleOnChange = () => {};

//   return (
//     <>
//       <AdminLayout>
//         <div>
//           <Form.Control type="text" onChange={handleOnChange} />
//         </div>

//         <Table striped bordered hover>
//           <thead>
//             <tr>
//               <th>#</th>
//               <th>Image</th>
//               <th>Details</th>
//               <th>Name - Year</th>

//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {displayList.length > 0 &&
//               displayList.map((book, i) => {
//                 return (
//                   <tr>
//                     <td>{i + 1}</td>
//                     <td>
//                       <img src={book.url} width={"100px"} />
//                     </td>
//                     <td>
//                       <h3>{book.title}</h3>
//                       <p>{book.summary}</p>
//                     </td>
//                     <td>
//                       {book.name}-{book.year}
//                     </td>
//                     <td>
//                       {" "}
//                       <Link to={`/edit-books/${book.id}`}>
//                         <Button variant="warning">Edit Book</Button>
//                       </Link>
//                       <Link onClick={() => handlOnDelete(book.id)}>
//                         <Button variant="danger">Delete</Button>
//                       </Link>
//                     </td>
//                   </tr>
//                 );
//               })}
//           </tbody>
//         </Table>
//       </AdminLayout>
//     </>
//   );
// }

// export default BookTable;
