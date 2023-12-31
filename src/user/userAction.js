import { doc, getDoc } from "firebase/firestore";
import { db } from "../config/firebase-config";
import { setAdmin } from "./userSlice";
import { toast } from "react-toastify";

export const gerUserAction = (uid) => async (dispatch) => {
  try {
    const docRef = doc(db, "users", uid);
    const docSnap = await getDoc(docRef);
    console.log(docSnap);

    if (docSnap.exists()) {
      // console.log("Document data:", docSnap.data());
      const userData = docSnap.data();
      dispatch(setAdmin({ ...userData, uid }));
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
      toast.error();
    }
  } catch (e) {
    toast.error(e.message);
  }
};
