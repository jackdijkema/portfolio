import "./ProjectAdmin.css";

import { useState, useEffect } from "react";
import { db } from "../../../store/firebase";
import { collection, getDocs } from "firebase/firestore";

const ProjectAdmin = () => {
  const [projects, setProjects] = useState([]);

  const FetchProjects = async () => {

    getDocs(collection(db, "projects"))
    .then((querySnapshot) => {

      const newData = querySnapshot.docs.map((doc) => ({...doc.data(), id: doc.id,}));
      setProjects(newData);
    });
  };
    useEffect(() => {
      FetchProjects();
    },[]); 

  return (
    <section className="projects_container">
      <h2 className="project__h1">Add/Edit/Remove project</h2>

      <button className="button" href={"#"}>
        Add new project.
      </button>
      <table className="project_table">
        <thead>
          <tr class="projects">
            <th class="column2">ID</th>
            <th class="column3">Name</th>
            <th class="column4">Bio</th>
            <th class="column5">Github</th>
            <th class="column6">Edit</th>
            <th class="column7">Remove</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project, i) => (
           <tr>
           <td class="column1">{project.id}</td>
           <td class="column2">{project.name}</td>
           <td class="column2">{project.description}</td>
           <td class="column2">{project.link}</td>
           <td class="column6">
              <button>Edit</button>
            </td>
            <td class="column7">
              <button>Remove</button>
            </td> 
          </tr> 
          ))}

        </tbody>
      </table>
    </section>
  );
};

export default ProjectAdmin;
