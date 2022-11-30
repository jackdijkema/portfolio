import "./Article.js";
import "./Project.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(faArrowRight);

function Article(props) {
  return (
    <article className="project__article">
      <div className="project__header">
        <a href={props.link}>
         {props.name} 
          <FontAwesomeIcon
            icon="fa-solid fa-arrow-right"
            size={"1x"}
            className="icon"
          />
        </a>
      </div>
      <p className="project__paragraph">
        {props.bio}
      </p>
    </article>
  );
}

export default Article;
