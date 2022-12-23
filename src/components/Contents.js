import { useState, useEffect } from "react";
function Contents() {
  const [movies, setMovies] = useState([]);
  const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
  const url =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1";

  const getMovies = async () => {
    const response = await fetch(url);
    const responseJson = await response.json();

    const data = Object.entries(responseJson);

    setMovies(data[1]);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="row">
      {movies.map((data) =>
        Object.entries(data).map((element) => (
          <Frame
            name={element[1].title}
            ImgPath={IMG_PATH + element[1].poster_path}
          />
        ))
      )}
    </div>
  );
}

const Frame = ({ name, ImgPath }) => {
  return (
    <div className="col">
      <div className="thumbnail">
        <a href="#">
          <img src={ImgPath} alt=" to display" style={{ width: 100 }} />
          <div className="caption">
            <p>{name}</p>
          </div>
        </a>
      </div>
    </div>
  );
};
export default Contents;
