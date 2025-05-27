import "./ProjectAdmin.css";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect, useRef } from "react";
import { db } from "../../../store/firebase";
import {
  collection,
  getDocs,
  addDoc,
} from "firebase/firestore";
import { toast } from "react-toastify";
import ProjectItem from "../admin-project-item/ProjectItem";

library.add(faTrashCan);

const ProjectAdmin = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
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
        displayPosition: projects.length + 1,
      });
      await fetchProjects();
      toast.success("Project added succesfully.", "id:", docRef.id);
    } catch (error) {
      toast.error(error);
    }
  };

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
            <th>ID</th>
            <th>Position</th>
            <th>Name</th>
            <th>Description</th>
            <th>Link</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {projects
            .sort((a, b) => a.displayPosition - b.displayPosition)
            .map((project) => (
              <ProjectItem key={project.id} project={project} fetchProjects={fetchProjects} />
            ))}
        </tbody>
      </table>
    </section>
  );
};

export default ProjectAdmin;
