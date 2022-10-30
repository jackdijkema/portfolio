import "./Profile.css";

function Profile() {
  return (
    <section className="profile">
      <figure className="profile_figure">
        <img
          className="profile_picture"
          src={require("./img/selfie.png")}
          alt="selfie of Jack"
        ></img>
      </figure>
      <h1 className="profile_name">Jack Dijkema</h1>
      <h2 className="profile_title">Software Engineer</h2>

      <ul className="profile_socials">
        <div className="profile_socials_link">
          <li>
            <i className="fa-brands fa-github"></i>
            <a href="blog.html">Github</a>
          </li>
        </div>
        <div className="profile_socials_link">
          <li>
            <i className="fa-brands fa-linkedin-in"></i>
            <a href="blog.html">LinkedIn</a>
          </li>
        </div>
      </ul>

      <div className="profile_about">
        <p className="about">
          born in 2001
          <br />
          in Amsterdam.
          <br />
          trying to change the world one line at a time.
        </p>
      </div>
    </section>
  );
}

export default Profile;
