import "./Poster.css";

const Poster = (props) => {
  const image = props.image;
  const title = props.title;
  return <img src={image} alt={title} />;
};

export default Poster;
