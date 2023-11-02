import data from "../data";
import Poster from "./Poster";
import Info from "./Info";
import "./Movie.css";

const Movie = () => {
  return (
    <div className="container">
      <div className="card">
        <Poster title={data[0].title} image={data[0].image} />
        <Info
          title={data[0].title}
          director={data[0].director}
          cast={data[0].cast}
        />
      </div>
      <div className="card">
        <Poster title={data[1].title} image={data[1].image} />
        <Info
          title={data[1].title}
          director={data[1].director}
          cast={data[1].cast}
        />
      </div>
      <div className="card">
        <Poster title={data[2].title} image={data[2].image} />
        <Info
          title={data[2].title}
          director={data[2].director}
          cast={data[2].cast}
        />
      </div>
    </div>
  );
};

export default Movie;
