import "./ProjectItem.css";
import "../ProfileAdmin/ProfileAdmin.css";
import { faPencil, faTrashCan, faFloppyDisk } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { db } from "../../../store/firebase";
import { deleteDoc, doc, updateDoc} from "firebase/firestore";
import { toast } from "react-toastify";
import { useEffect } from "react";

library.add(faTrashCan);
library.add(faPencil);
library.add(faFloppyDisk);

const ProjectItem = ({ project, fetchProjects }) => {
  useEffect(() => {
  }, [fetchProjects]);

  const removeProjectHandler = async (id) => {
    try {
      await deleteDoc(doc(db, "projects", id));
      toast.success("Project Deleted Succesfully.");
      fetchProjects();
    } catch (error) {
      toast.success(error, "project id:", id);
    }
  };

    const updateProjectHandler = async (id) => {
    try {
      const row = document.activeElement.closest("tr");
      const nameCell = row.querySelector("#project-name");
      const descCell = row.querySelector("#project-description");
      const linkCell = row.querySelector("#project-link");

      const nameInput = nameCell.querySelector("input");
      const descInput = descCell.querySelector("input");
      const linkInput = linkCell.querySelector("input");

      const projectData = {
        id: id,
        name: nameInput.value,
        description: descInput.value,
        link: linkInput.value, 
        displayPosition: project.displayPosition,
      };

      const projectRef = doc(db, "projects", id);
      await updateDoc(projectRef, projectData);

      // Replace inputs with plain text
      nameCell.textContent = nameInput.value;
      descCell.textContent = descInput.value;
      linkCell.textContent = linkInput.value;

      // Toggle buttons
      const editButton = row.querySelector("#edit-button");
      const saveButton = row.querySelector("#save-button");
      saveButton.hidden = true;
      editButton.hidden = false;

      fetchProjects();
      toast.success("Project Updated Successfully.");
    } catch (error) {
      console.error("Error updating project:", error);
      toast.error("Error updating project:", error);
    }
  }

    const editProjectHandler = async (id, event) => {
      try {
        const row = event.target.closest("tr");

        let editButton = row.querySelector("#edit-button");
        let saveButton = row.querySelector("#save-button");

        saveButton.hidden = false;
        editButton.hidden = true;

        const nameCell = row.querySelector("#project-name");
        const descCell = row.querySelector("#project-description");
        const linkCell = row.querySelector("#project-link");

        const nameInput = document.createElement("input");
        nameInput.type = "text";
        nameInput.id = "project-name";
        nameInput.value = project.name;
        nameInput.className = "admin__project_input_flex";

        const descInput = document.createElement("input");
        descInput.type = "text";
        descInput.id = "project-description";
        descInput.value = project.description;
        descInput.className = "admin__project_input_flex";
        descInput.placeholder = "Project Description";

        const linkInput = document.createElement("input");
        linkInput.type = "text";
        linkInput.id = "project-link";
        linkInput.value = project.link;
        linkInput.className = "admin__project_input_flex";
        linkInput.placeholder = "Project Link";

        nameCell.textContent = "";
        nameCell.appendChild(nameInput);

        descCell.textContent = "";
        descCell.appendChild(descInput);

        linkCell.textContent = "";
        linkCell.appendChild(linkInput);

      } catch (error) {
        toast.error(error, "project id:", id);
      }
  };

  return (
    <tr>
      <td className="td-item">{project.id}</td>
      <td className="td-item">{project.displayPosition}</td>
      <td className="td-item" id="project-name">{project.name}</td>
      <td className="td-item" id="project-description">{project.description}</td>
      <td className="td-item" id="project-link">{project.link}</td>
      <td className="td-item">
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
         <button
          className="button"
          id="edit-button"
          onClick={(event) => editProjectHandler(project.id, event)}
        >
          <FontAwesomeIcon
            icon="fa-solid fa-pencil"
            size={"1x"}
            className="icon"
          />{" "}
        </button>
            <button
          className="button"
          id="save-button"
          hidden
          onClick={(event) => updateProjectHandler(project.id)}
        >
          <FontAwesomeIcon
            icon="fa-solid fa-floppy-disk"
            size={"1x"}
            className="icon"
          />{" "}
        </button>
      </td>
    </tr>
  );
};

export default ProjectItem;
