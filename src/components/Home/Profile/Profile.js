import "./Profile.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { db } from "../../../store/firebase";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { toast } from "react-toastify";

library.add(faGithub);
library.add(faLinkedin);

function Profile() {
  const [profile, setProfile] = useState([]);

  const FetchProfile = async () => {
    try {
      getDocs(collection(db, "profile")).catch((querySnapshot) => {
        const newData = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setProfile(newData);
      });
    } catch (error) {
      toast.error(error);
    }
  };

  useEffect(() => {
    FetchProfile();
  }, []);
  return (
    <section className="profile">
      <figure className="profile_figure">
        <img
          className="profile_picture"
          src={require("./img/selfie.png")}
          alt="selfie of {props.name}"
        ></img>
      </figure>
      <h1 className="profile_name">{profile[0]?.name}</h1>
      <h2 className="profile_title">{profile[0]?.occupation}</h2>

      <ul className="profile_socials">
        <div className="profile_socials_link">
          <a href={profile[0]?.github}>
            <FontAwesomeIcon icon="fa-brands fa-github" size="1x" />
          </a>
        </div>
        <div className="profile_socials_link">
          <a href={profile[0]?.linkedin}>
            <FontAwesomeIcon icon="fa-brands fa-linkedin" size="1x" />
          </a>
        </div>
      </ul>

      <div className="profile_about">
        <p className="about">{profile[0]?.bio}</p>
      </div>
    </section>
  );
}

export default Profile;
