import "./Project.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import Article from "./Article";
library.add(faArrowRight);

function Project() {
  return (
    <div className="project">
      <h1 className="project__title">Projects</h1>
      <div className="columns">
        <div className="left_column">
          <Article
            name="DungeonOfGameBro"
            bio="this is a game..."
            link="https://google.com"
          />
          <Article
            name="DungeonOfGameBro"
            bio="this is a game..."
            link="https://google.com"
          />
          <Article
            name="DungeonOfGameBro"
            bio="this is a game..."
            link="https://google.com"
          />
        </div>

        <div className="right_column">
          <Article
            name="DungeonOfGameBro"
            bio="this is a game..."
            link="https://google.com"
          />
          <Article
            name="DungeonOfGameBro"
            bio="this is a game..."
            link="https://google.com"
          />
          <Article
            name="DungeonOfGameBro"
            bio="this is a game..."
            link="https://google.com"
          />
        </div>
      </div>
    </div>
  );
}
export default Project;
