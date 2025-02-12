import "./Project.css";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import Article from "./Article";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../store/firebase";
import { useState, useEffect } from "react";
library.add(faArrowRight);

function Project() {
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
  useEffect(() => {
    FetchProjects();
  }, []);

  return (
    <div className="project">
      <h1 className="project__title">Projects</h1>
      <div className="columns_container">
        <div className="columns">
          {projects
            .sort((a, b) => a.displayPosition - b.displayPosition)
            .map((project, i) => (
              <Article
                key={i}
                name={project.name}
                bio={project.description}
                link={project.link}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
export default Project;
