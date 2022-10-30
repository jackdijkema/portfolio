import "./Project.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(faArrowRight);

function Project() {
  return (
    <div className="project">
      <h1 className="project__title">Projects</h1>
      <div className="columns">
        <div className="left_column">
          <article className="project__article">
            <div className="project__header">
              <a href="#project">
                DungeonOfGame
                <FontAwesomeIcon
                  icon="fa-solid fa-arrow-right"
                  size={"xl"}
                  className="icon"
                />
              </a>
            </div>
            <p className="project__paragraph">
              This is my project have a look, because I really like this
              project. Let me know if you like it too!
            </p>
          </article>
          <article className="project__article">
            <div className="project__header">
              <a href="https://github.com/jackdijkema/dungeonofgame">
                DungeonOfGame
                <FontAwesomeIcon
                  icon="fa-solid fa-arrow-right"
                  size={"xl"}
                  className="icon"
                />
              </a>
            </div>
            <p className="project__paragraph">
              This is my project have a look, because I really like this
              project. Let me know if you like it too! This is my project have a
              look, because I really like this project. Let me know if you like
              it too!
            </p>
          </article>
        </div>

        <div className="right_column">
          <article className="project__article">
            <div className="project__header">
              <a href="#project">
                DungeonOfGame
                <FontAwesomeIcon
                  icon="fa-solid fa-arrow-right"
                  size={"xl"}
                  className="icon"
                />
              </a>
            </div>
            <p className="project__paragraph">
              This is my project have a look, because I really like this
              project. Let me know if you like it too! This is my project have a
              look, because I really like this project. Let me know if you like
              it too!
            </p>
          </article>
          <article className="project__article">
            <div className="project__header">
              <a href="#project">
                DungeonOfGame
                <FontAwesomeIcon
                  icon="fa-solid fa-arrow-right"
                  size={"xl"}
                  className="icon"
                />
              </a>
            </div>
            <p className="project__paragraph">
              This is my project have a look, because I really like this
              project. Let me know if you like it too! This is my project have a
              look, because I really like this project. Let me know if you like
              it too!
            </p>
          </article>
        </div>
      </div>
    </div>
  );
}
export default Project;
