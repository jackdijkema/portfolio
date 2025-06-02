import "./EducationAdmin.css";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect, useRef } from "react";
import { db } from "../../../store/firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import EducationItem from "../admin-education-item/EducationItem";

library.add(faTrashCan);

const EducationAdmin = () => {
  const [educationData, setEducation] = useState([]);

  useEffect(() => {
    fetchEducationData();
  }, []);

  const fetchEducationData = async () => {
    getDocs(collection(db, "education")).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setEducation(newData);
    });
  };

  const enteredSchool = useRef();
  const enteredBio = useRef();
  const enteredMajor = useRef();
  const enteredVan = useRef();
  const enteredTot = useRef();

  const addEducationHandler = async () => {
    const enteredName = enteredSchool.current.value;
    const enteredDescription = enteredBio.current.value;
    const enteredMajorValue = enteredMajor.current.value;
    const enteredVanValue = enteredVan.current.value;
    const enteredTotValue = enteredTot.current.value;

    try {
      const docRef = await addDoc(collection(db, "education"), {
        school: enteredName,
        major: enteredMajorValue,
        bio: enteredDescription,
        van: enteredVanValue,
        tot: enteredTotValue,
        displayPosition: educationData.length + 1,
      });
      await fetchEducationData();
      toast.success(`Education added successfully. id: ${docRef.id}`);
    } catch (error) {
      toast.error(error.message || error);
    }
  };

  return (
    <section className="projects_container">
      <h2 className="project__h1">Education</h2>
      <section className="add_project">
        <input
          ref={enteredSchool}
          className="admin__project_input"
          placeholder="Schoolname"
        ></input>
        <input
          ref={enteredBio}
          className="admin__project_input"
          placeholder="Education bio"
        ></input>
        <input
          ref={enteredMajor}
          className="admin__project_input"
          placeholder="Major"
        ></input>
        <input
          ref={enteredVan}
          className="admin__project_input"
          placeholder="Van datum"
        ></input>
        <input
          ref={enteredTot}
          className="admin__project_input"
          placeholder="Tot datum"
        ></input>

        <button className="button" onClick={addEducationHandler}>
          Add New Education
        </button>
      </section>

      <table className="project_table">
        <thead>
          <tr className="projects">
            <th>Position</th>
            <th>School</th>
            <th>Major</th>
            <th>Bio</th>
            <th>Van</th>
            <th>Tot</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {educationData
            .sort((a, b) => a.displayPosition - b.displayPosition)
            .map((education) => (
              <EducationItem
                key={education.id}
                education={education}
                fetchEducationData={fetchEducationData}
              />
            ))}
        </tbody>
      </table>
    </section>
  );
};

export default EducationAdmin;
