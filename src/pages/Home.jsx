import "../App.css"

import Navbar from "../components/UI/Navbar/Navbar";
import Profile from "../components/Home/Profile/Profile";
import Project from "../components/Home/Projects/Project";

function Home() {
  document.title = "Jack's Portfolio";
  return (
    <main>
      <Navbar />
      <Profile
        name="Jack Dijkema"
        title="Software Developer"
        about="I'm Jack – a developer from the Netherlands. Currently studying Software-Engineering at Hogeschool Leiden."
        ghlink="https://github.com/jackdijkema"
        lilink="https://linkedin.com/jackdijkema"
      />
      <Project />
    </main>
  );
}

export default Home;
