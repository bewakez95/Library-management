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
import { db } from "../../config/firebase-config";
import { setBook, setSelectedBook } from "./bookSlice";

export const addNewBookAction = (bookObj) => async (dispatch) => {
  try {
    const docRefPromise = addDoc(collection(db, "books"), bookObj);
    toast.promise(docRefPromise, {
      pending: "In progress",
      success: "Success",
    });
    const docRef = await docRefPromise;
    // console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    toast.error(e.message);
  }
};
export const getAllBookAction = () => async (dispatch) => {
  try {
    const books = [];

    const querySnapshot = await getDocs(collection(db, "books"));
    querySnapshot.forEach((doc) => {
      const id = doc.id;
      const data = doc.data();
      books.push({ ...data, id });

      // console.log(`${doc.id} => ${doc.data()}`);
    });
    dispatch(setBook(books));
    // toast.promise(querySnapshot, {
    //   pending: "In progress",
    //   success: "Success",
    // });
    const docRef = await querySnapshot;
    // console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    toast.error(e.message);
  }
};

export const getBookAction = (id) => async (dispatch) => {
  try {
    const docRef = doc(db, "books", id);
    const docSnap = await getDoc(docRef);
    // console.log(docSnap);

    if (docSnap.exists()) {
      // console.log("Document data:", docSnap.data());
      const bookData = docSnap.data();
      dispatch(setSelectedBook({ ...bookData, id }));
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such files!");
      toast.error("No such files!");
    }
  } catch (e) {
    // console.log(e.message);

    toast.error(e.message);
  }
};

export const updateBookAction =
  ({ id, ...rest }) =>
  async (dispatch) => {
    try {
      // console.log(id, rest);
      const bookRef = doc(db, "books", id);
      const docRefPromise = setDoc(bookRef, rest, { merge: true });
      toast.promise(docRefPromise, {
        pending: "In progress",
        success: "Success",
      });
      const docRef = await docRefPromise;
      // console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      toast.error(e.message);
    }
  };

export const deleteBookAction = (id) => async (dispatch) => {
  try {
    console.log(id);
    const bookRef = doc(db, "books", id);
    const docRefPromise = deleteDoc(bookRef);
    toast.promise(docRefPromise, {
      pending: "In progress",
      success: "Success",
    });
    const docRef = await docRefPromise;
    // console.log("Document written with ID: ", docRef);
  } catch (e) {
    toast.error(e.message);
  }
};
