// import { db } from ".../firebaseConfig";
import { toast } from "react-toastify";
import {
  collection,
  addDoc,
  getDocs,
  doc,
  getDoc,
  setDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../config/firebase-config";
import { getAllBookAction, updateBookAction } from "../pages/books/bookAction";
// import { setBorrow, setSelectedBorrow } from "./BorrowSlice";

export const addNewBorrowAction = (borrowObj) => async (dispatch) => {
  try {
    const docRefPromise = addDoc(collection(db, "Borrows"), borrowObj);
    toast.promise(docRefPromise, {
      pending: "In progress",
      success: "Success",
    });
    await docRefPromise;
    dispatch(
      updateBookAction({
        id: borrowObj.bookId,
        isAvailable: false,
        availableFrom: borrowObj.availableFrom,
      })
    );
    dispatch(getAllBookAction());
    // console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    toast.error(e.message);
  }
};
// export const getAllBorrowAction = () => async (dispatch) => {
//   try {
//     const Borrows = [];

//     const querySnapshot = await getDocs(collection(db, "Borrows"));
//     querySnapshot.forEach((doc) => {
//       const id = doc.id;
//       const data = doc.data();
//       Borrows.push({ ...data, id });

//       // console.log(`${doc.id} => ${doc.data()}`);
//     });
//     dispatch(setBorrow(Borrows));
//     // toast.promise(querySnapshot, {
//     //   pending: "In progress",
//     //   success: "Success",
//     // });
//     const docRef = await querySnapshot;
//     // console.log("Document written with ID: ", docRef.id);
//   } catch (e) {
//     toast.error(e.message);
//   }
// };

// export const getBorrowAction = (id) => async (dispatch) => {
//   try {
//     const docRef = doc(db, "Borrows", id);
//     const docSnap = await getDoc(docRef);
//     // console.log(docSnap);

//     if (docSnap.exists()) {
//       // console.log("Document data:", docSnap.data());
//       const BorrowData = docSnap.data();
//       dispatch(setSelectedBorrow({ ...BorrowData, id }));
//     } else {
//       // docSnap.data() will be undefined in this case
//       console.log("No such files!");
//       toast.error("No such files!");
//     }
//   } catch (e) {
//     // console.log(e.message);

//     toast.error(e.message);
//   }
// };

// export const updateBorrowAction =
//   ({ id, ...rest }) =>
//   async (dispatch) => {
//     try {
//       // console.log(id, rest);
//       const BorrowRef = doc(db, "Borrows", id);
//       const docRefPromise = setDoc(BorrowRef, rest, { merge: true });
//       toast.promise(docRefPromise, {
//         pending: "In progress",
//         success: "Success",
//       });
//       const docRef = await docRefPromise;
//       // console.log("Document written with ID: ", docRef.id);
//     } catch (e) {
//       toast.error(e.message);
//     }
//   };

// export const deleteBorrowAction = (id) => async (dispatch) => {
//   try {
//     console.log(id);
//     const BorrowRef = doc(db, "Borrows", id);
//     const docRefPromise = deleteDoc(BorrowRef);
//     toast.promise(docRefPromise, {
//       pending: "In progress",
//       success: "Success",
//     });
//     const docRef = await docRefPromise;
//     // console.log("Document written with ID: ", docRef);
//   } catch (e) {
//     toast.error(e.message);
//   }
// };
