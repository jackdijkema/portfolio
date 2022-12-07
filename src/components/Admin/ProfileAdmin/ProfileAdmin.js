import "./ProfileAdmin.css";
import { db } from "../../../store/firebase";
import { useState, useEffect, useRef } from "react";
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  setDoc,
} from "firebase/firestore";

const ProfileAdmin = () => {
  const [profile, setProfile] = useState([]);

  const FetchProfile = async () => {
    try {
      getDocs(collection(db, "profile")).then((querySnapshot) => {
        const newData = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setProfile(newData);
      });
    } catch (error) {
      alert(error);
    }
    console.log(profile);
  };

  const enteredNameRef = useRef();
  const enteredOccupationRef = useRef();
  const enteredBioRef = useRef();
  const enteredGithubRef = useRef();
  const enteredLinkedinRef = useRef();

  const editProfileHandler = async () => {
    const enteredName = enteredNameRef.current.value;
    const enteredOccupation = enteredOccupationRef.current.value;
    const enteredBio = enteredBioRef.current.value;
    const enteredGithub = enteredGithubRef.current.value;
    const enteredLinkedin = enteredLinkedinRef.current.value;

    try {
      const docRef = await setDoc(doc(db, "profile", profile[0]?.id), {
        name: enteredName,
        occupation: enteredOccupation,
        bio: enteredBio,
        github: enteredGithub,
        linkedin: enteredLinkedin,
      });
      FetchProfile();
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    FetchProfile();
  }, []);

  return (
    <section className="profile_container">
      <h2 className="profile__h1">Profile</h2>
      <section className="profile_preview">
        <label>Name</label>
        <input
          ref={enteredNameRef}
          type="text"
          defaultValue={profile[0]?.name}
        ></input>
        <label>Occupation</label>
        <input
          ref={enteredOccupationRef}
          type="text"
          defaultValue={profile[0]?.occupation}
        ></input>
        <label>Bio</label>
        <textarea
          ref={enteredBioRef}
          className="profile_textarea"
          type="text"
          defaultValue={profile[0]?.bio}
        ></textarea>
        <label>Github</label>
        <input
          ref={enteredGithubRef}
          type="text"
          defaultValue={profile[0]?.github}
        ></input>
        <label>LinkedIn</label>
        <input
          ref={enteredLinkedinRef}
          type="text"
          defaultValue={profile[0]?.linkedin}
        ></input>
      </section>
      <section className="profile_edit">
        <button className="button" onClick={editProfileHandler}>
          Save Profile
        </button>
      </section>
    </section>
  );
};

export default ProfileAdmin;
