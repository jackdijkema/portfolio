import "./ProfileAdmin.css";

const ProfileAdmin = () => {
 

  

  return (
    <section className="profile_container">
      <h2 className="profile__h1">Profile</h2>

      <section className="profile_preview">
        <h3 className="profile_preview_h3">Name:</h3>
        <p>Jack Dijkema</p>
        <h3>Occupation:</h3>
        <p>Software Developer</p>
        <h3>Bio:</h3>
        <p>I'm Jack – a developer from the Netherlands. Currently studying Software-Engineering at Hogeschool Leiden.</p>
      </section>
      <section className="profile_edit">
      <button className="button">Edit Profile</button> 
      </section>

    </section>
  );
};

export default ProfileAdmin;
