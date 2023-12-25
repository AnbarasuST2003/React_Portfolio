import { db } from "../firebase";

import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  query,
  orderBy,
  doc,
} from "firebase/firestore";

const skillsColRef = collection(db, "Skills");
class MySkillService {
  addSkills = (newSkill) => {
    return addDoc(skillsColRef, newSkill);
  };

  updateSkills = (id, updatedSkill) => {
    const skillDoc = doc(db, "Skills", id);
    return updateDoc(skillDoc, updatedSkill);
  };

  deleteSkills = (id) => {
    const skillDoc = doc(db, "Skills", id);
    return deleteDoc(skillDoc);
  };

  //   getAllSkills = () => {
  //     return getDocs(skillsColRef);
  //   };

  getAllSkills = () => {
    const detailsQuery = query(
      skillsColRef,
      orderBy("index") // Replace 'fieldName' with the field you want to order by
    );
    return getDocs(detailsQuery);
  };

  getSkills = (id) => {
    const skillDoc = doc(db, "Skills", id);
    return getDoc(skillDoc);
  };
}
export default new MySkillService();
