import "../App.css";

import Navbar from "../components/UI/Navbar/Navbar";
import Profile from "../components/Home/Profile/Profile";
import Project from "../components/Home/Projects/Project";
import Education from "../components/Home/Education/Education";

function Home() {
  document.title = "Jack's Portfolio";
  return (
    <main>
      <Navbar />
      <Profile />
      <Education />
      <Project />
    </main>
  );
}

export default Home;
