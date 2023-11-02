import "./Info.css";

const Info = (props) => {
  const title = props.title;
  const director = props.director;
  const cast = props.cast.map((element) => {
    return <p className="cast">{element}</p>;
  });

  return (
    <div>
      <p className="title">Movie Title: {title}</p>
      <p className="director">Director: {director}</p>
      {cast}
    </div>
  );
};

export default Info;
