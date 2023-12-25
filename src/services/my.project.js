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

const ProCollRef = collection(db, "myproject");
class MyProjectData {
  addProject = (newDetail) => {
    return addDoc(ProCollRef, newDetail);
  };

  updateProject = (id, updatedDetail) => {
    const projectDoc = doc(db, "myproject", id);
    return updateDoc(projectDoc, updatedDetail);
  };

  deleteProject = (id) => {
    const projectDoc = doc(db, "myproject", id);
    return deleteDoc(projectDoc);
  };

  getAllProject = () => {
    return getDocs(ProCollRef);
  };

  getProject = (id) => {
    const projectDoc = doc(db, "myproject", id);
    return getDoc(projectDoc);
  };
}
export default new MyProjectData();
