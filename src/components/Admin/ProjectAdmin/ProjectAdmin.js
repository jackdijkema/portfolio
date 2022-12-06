import "./ProjectAdmin.css";

import { useState, useEffect, useRef } from "react";
import { db } from "../../../store/firebase";
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

const ProjectAdmin = () => {
  const [projects, setProjects] = useState([]);

  const FetchProjects = async () => {
    getDocs(collection(db, "projects")).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setProjects(newData);
    });
  };

  const enteredNameRef = useRef();
  const enteredDescriptionRef = useRef();
  const enteredLinkRef = useRef();

  const addProjectHandler = async () => {
    const enteredName = enteredNameRef.current.value;
    const enteredDescription = enteredDescriptionRef.current.value;
    const enteredLink = enteredLinkRef.current.value;

    try {
      const docRef = await addDoc(collection(db, "projects"), {
        name: enteredName,
        description: enteredDescription,
        link: enteredLink,
      });
      FetchProjects();
      alert("Project added succesfully.", "id:", docRef.id);
    } catch (error) {
      alert(error);
    }
  };

  const removeProjectHandler = async (id) => {
    try {
     console.log(id); 
      await deleteDoc(doc(db, "projects", id ));
      alert("Project Deleted Succesfully.");
      FetchProjects();
    } catch (error) {
      alert(error,'project id:', id);
    }
  };

  useEffect(() => {
    FetchProjects();
  }, []);

  return (
    <section className="projects_container">
      <h2 className="project__h1">Projects</h2>
      <section className="add_project">
        <input
          ref={enteredNameRef}
          className="admin__project_input"
          placeholder="Project Name"
        ></input>
        <input
          ref={enteredDescriptionRef}
          className="admin__project_input"
          placeholder="Project Description"
        ></input>
        <input
          ref={enteredLinkRef}
          className="admin__project_input"
          placeholder="Project link"
        ></input>

        <button className="button" onClick={addProjectHandler}>
          Add New Project 
        </button>
      </section>

      <table className="project_table">
        <thead>
          <tr className="projects">
            <th>Name</th>
            <th>Description</th>
            <th>Link</th>
            <th>Edit</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project, i) => (
            <tr>
              <td>{project.name}</td>
              <td>{project.description}</td>
              <td>{project.link}</td>
              <td>
                <button className="button">Edit</button>
              </td>
              <td>
                <button  className="button" onClick={() => removeProjectHandler(project.id)}>Remove </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default ProjectAdmin;
