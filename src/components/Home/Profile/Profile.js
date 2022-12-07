import "./Profile.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(faGithub);
library.add(faLinkedin);

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
          <a href="https://github.com/jackdijkema">
            <FontAwesomeIcon icon="fa-brands fa-github" size="1x" />
          </a>
        </div>
        <div className="profile_socials_link">
          <a href="https://google.com">
            <FontAwesomeIcon icon="fa-brands fa-linkedin" size="1x" />
          </a>
        </div>
      </ul>

      <div className="profile_about">
        <p className="about">{props.about}</p>
      </div>
    </section>
  );
}

export default Profile;
