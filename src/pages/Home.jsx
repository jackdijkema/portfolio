import "../App.css";

import Navbar from "../components/UI/Navbar/Navbar";
import Profile from "../components/Home/Profile/Profile";
import Project from "../components/Home/Projects/Project";

function Home() {
  document.title = "Jack's Portfolio";
  return (
    <main>
      <Navbar />
      <Profile />
      <Project />
    </main>
  );
}

export default Home;
