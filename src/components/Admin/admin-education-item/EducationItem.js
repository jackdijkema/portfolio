import "./EducationItem.css";
import "../ProfileAdmin/ProfileAdmin.css";
import {
  faPencil,
  faTrashCan,
  faFloppyDisk,
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { db } from "../../../store/firebase";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { useEffect } from "react";

library.add(faTrashCan);
library.add(faPencil);
library.add(faFloppyDisk);

const EducationItem = ({ education, fetchEducationData }) => {
  useEffect(() => {}, [fetchEducationData]);

  const removeEducationHandler = async (id) => {
    try {
      await deleteDoc(doc(db, "education", id));
      toast.success("Education Deleted Succesfully.");
      fetchEducationData();
    } catch (error) {
      toast.success(error, "education id:", id);
    }
  };

  const updateEducationHandler = async (id) => {
    try {
      const row = document.activeElement.closest("tr");

      const schoolCell = row.querySelector("#education-school");
      const bioCell = row.querySelector("#education-bio");
      const majorCell = row.querySelector("#education-major");
      const vanCell = row.querySelector("#education-van");
      const totCell = row.querySelector("#education-tot");

      const schoolInput = schoolCell.querySelector("input");
      const bioInput = bioCell.querySelector("input");
      const majorInput = majorCell.querySelector("input");
      const vanInput = vanCell.querySelector("input");
      const totInput = totCell.querySelector("input");

      const educationData = {
        school: schoolInput.value,
        bio: bioInput.value,
        major: majorInput.value,
        van: vanInput.value,
        tot: totInput.value,
        displayPosition: education.displayPosition,
      };

      const educationRef = doc(db, "education", id);
      await updateDoc(educationRef, educationData);

      schoolCell.textContent = schoolInput.value;
      bioCell.textContent = bioInput.value;
      majorCell.textContent = majorInput.value;
      vanCell.textContent = vanInput.value;
      totCell.textContent = totInput.value;

      const editButton = row.querySelector("#edit-button");
      const saveButton = row.querySelector("#save-button");

      saveButton.hidden = true;
      editButton.hidden = false;

      fetchEducationData();
      toast.success("Education Updated Successfully.");
    } catch (error) {
      console.error("Error updating education:", error);
      toast.error("Error updating education:", error);
    }
  };

  const editEducationHandler = async (id, event) => {
    try {
      const row = event.target.closest("tr");

      let editButton = row.querySelector("#edit-button");
      let saveButton = row.querySelector("#save-button");

      saveButton.hidden = false;
      editButton.hidden = true;

      const schoolCell = row.querySelector("#education-school");
      const bioCell = row.querySelector("#education-bio");
      const majorCell = row.querySelector("#education-major");
      const vanCell = row.querySelector("#education-van");
      const totCell = row.querySelector("#education-tot");

      const schoolInput = document.createElement("input");
      schoolInput.type = "text";
      schoolInput.id = "education-school";
      schoolInput.value = education.school;
      schoolInput.className = "admin__education_input middel_kolom_input";
      schoolInput.placeholder = "Education School";

      const bioInput = document.createElement("input");
      bioInput.type = "text";
      bioInput.id = "education-bio";
      bioInput.value = education.bio;
      bioInput.className = "admin__education_input grote_kolom_input";
      bioInput.placeholder = "Education Bio";

      const majorInput = document.createElement("input");
      majorInput.type = "text";
      majorInput.id = "education-major";
      majorInput.value = education.major;
      majorInput.classNeme = "admin__education_input middel_kolom_input";
      majorInput.placeholder = "education major";

      const vanInput = document.createElement("input");
      vanInput.type = "text";
      vanInput.id = "education-van";
      vanInput.value = education.van;
      vanInput.classNeme = "admin__education_input kleine_kolom_input";
      vanInput.placeholder = "education Van";

      const totInput = document.createElement("input");
      totInput.type = "text";
      totInput.id = "education-tot";
      totInput.value = education.tot;
      totInput.classNeme = "admin__education_input kleine_kolom_input";
      totInput.placeholder = "education Tot";

      schoolCell.textContent = "";
      schoolCell.appendChild(schoolInput);

      bioCell.textContent = "";
      bioCell.appendChild(bioInput);

      majorCell.textContent = "";
      majorCell.appendChild(majorInput);

      vanCell.textContent = "";
      vanCell.appendChild(vanInput);

      totCell.textContent = "";
      totCell.appendChild(totInput);

    } catch (error) {
      toast.error(error, "education id:", id);
    }
  };

  return (
    <tr>
      <td className="td-item">{education.displayPosition}</td>
      <td className="td-item" id="education-school">
        {education.school}
      </td>
      <td className="td-item" id="education-major">
        {education.major}
      </td>
          <td className="td-item" id="education-bio">
        {education.bio}
      </td>
         <td className="td-item kleinere_kolom" id="education-van">
        {education.van}
      </td>
         <td className="td-item kleinere_kolom" id="education-tot">
        {education.tot}
      </td>
      <td className="td-item">
        <button
          className="button"
          onClick={() => removeEducationHandler(education.id)}
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
          onClick={(event) => editEducationHandler(education.id, event)}
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
          onClick={(event) => updateEducationHandler(education.id)}
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

export default EducationItem;
