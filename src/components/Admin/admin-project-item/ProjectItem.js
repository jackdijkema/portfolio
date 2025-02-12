import "./ProjectItem.css";
import "../ProfileAdmin/ProfileAdmin.css";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { db } from "../../../store/firebase";
import { deleteDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";
import { useEffect } from "react";

library.add(faTrashCan);

const ProjectItem = ({ project, fetchProjects }) => {
  useEffect(() => {
    fetchProjects();
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

  return (
    <tr>
      <td className="td-item">{project.displayPosition}</td>
      <td className="td-item">{project.name}</td>
      <td className="td-item">{project.description}</td>
      <td className="td-item">{project.link}</td>
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
  );
};

export default ProjectItem;
