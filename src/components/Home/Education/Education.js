import "./Education.css";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import Article from "./Article";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../store/firebase";
import { useState, useEffect } from "react";
library.add(faArrowRight);

function Education() {
  const [educationData, setEducation] = useState([]);

  const fetchEducationData = async () => {
    getDocs(collection(db, "education")).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setEducation(newData);
    });
  };
  useEffect(() => {
    fetchEducationData();
  }, []);

  return (
    <div className="project">
      <h1 className="project__title">Education</h1>
      <div className="columns_container">
        <div className="columns">
          {educationData
            .sort((a, b) => a.displayPosition - b.displayPosition)
            .map((education, i) => (
              <Article
                key={i}
                school={education.school}
                bio={education.bio}
                van={education.van}
                tot={education.tot}
                major={education.major}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
export default Education;
