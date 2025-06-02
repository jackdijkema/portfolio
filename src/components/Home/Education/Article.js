import "./Article.js";
import "./Education.css";

function Article(props) {
  return (
    <article className="project__article">
      <div className="project__header">{props.school}</div>
      <p className="project__paragraph">
        <b>{props.major}</b>
        <br />
        {props.bio}
        <p>
          {props.van} to {props.tot}
        </p>
      </p>
    </article>
  );
}

export default Article;
