import "./Profile.css";

function Profile(props) {
  return (
    <section className="profile">
      <figure className="profile_figure">
        <img
          className="profile_picture"
          src={require("./img/selfie.png")}
          alt="selfie of {props.name}"
        ></img>
      </figure>
      <h1 className="profile_name">{props.name}</h1>
      <h2 className="profile_title">{props.title}</h2>

      <ul className="profile_socials">
        <div className="profile_socials_link">
          <li>
            <i className="fa-brands fa-github"></i>
            <a href="{ props.ghlink }">Github</a>
          </li>
        </div>
        <div className="profile_socials_link">
          <li>
            <i className="fa-brands fa-linkedin-in"></i>
            <a href="{props.lilink}">LinkedIn</a>
          </li>
        </div>
      </ul>

      <div className="profile_about">
        <p className="about">
        {props.about}
        </p>
      </div>
    </section>
  );
}

export default Profile;
