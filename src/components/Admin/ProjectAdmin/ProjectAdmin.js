import "./ProjectAdmin.css";
import { faTrashCan, faPencil } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect, useRef } from "react";
import { db } from "../../../store/firebase";
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { toast } from "react-toastify";
library.add(faTrashCan, faPencil);

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
      await FetchProjects();
      toast.success("Project added succesfully.", "id:", docRef.id);
    } catch (error) {
      toast.error(error);
    }
  };

  const removeProjectHandler = async (id) => {
    try {
      console.log(id);
      await deleteDoc(doc(db, "projects", id));
      toast.success("Project Deleted Succesfully.");
      FetchProjects();
    } catch (error) {
      toast.success(error, "project id:", id);
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
            <th></th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project, i) => (
            <tr>
              <td>{project.name}</td>
              <td>{project.description}</td>
              <td>{project.link}</td>
              <td>
                <button
                  className="button"
                  onClick={() => removeProjectHandler(project.id)}
                >
                  <FontAwesomeIcon
                    icon="fa-solid fa-trash-can"
                    size={"1x"}
                    className="icon"
                  />{" "}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default ProjectAdmin;
