import "../App.css"

import Navbar from "../components/Navbar/Navbar";
import Profile from "../components/Profile/Profile";
import Project from "../components/Projects/Project";

function Home() {
  return (
    <main>
      <Navbar />
      <Profile
        name="Jack Dijkema"
        title="Software Developer"
        about="changing the world one line at a time."
        ghlink="https://github.com/jackdijkema"
        lilink="https://linkedin.com/jackdijkema"
      />
      <Project />
    </main>
  );
}

export default Home;
