import { db } from "../firebase";

import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

const collectionRef = collection(db, "mydetails");
class MyDataService {
  addDetails = (newDetail) => {
    return addDoc(collectionRef, newDetail);
  };

  updateDetails = (id, updatedDetail) => {
    const detailDoc = doc(db, "mydetails", id);
    return updateDoc(detailDoc, updatedDetail);
  };

  deleteDetails = (id) => {
    const detailDoc = doc(db, "mydetails", id);
    return deleteDoc(detailDoc);
  };

  getAllDetails = () => {
    return getDocs(collectionRef);
  };

  getDetails = (id) => {
    const detailDoc = doc(db, "mydetails", id);
    return getDoc(detailDoc);
  };
}
export default new MyDataService();
