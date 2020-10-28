import React, { useEffect } from "react";
import axios from "axios";

const Pelicula = ({ id }) => {
  const [title, setTitle] = React.useState("");
  const [img, setImg] = React.useState("");
  useEffect(() => {
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=b67547c76e0dfd494f62c63f827e73f7&language=en-US`;
    axios
      .get(url)
      .then((res) => {
        setTitle(res.data.title);
        setImg(res.data.poster_path);
      })
      .catch((err) => {
        console.error(err);
      });
  });
  return (
    <div className="post">
      <div className="titulo">{title}</div>
      {/* <div className="bueno">{props.puntaje}</div> */}
      <div className="subtitle">{}</div>
      <img src={"https://image.tmdb.org/t/p/original" + img} />
    </div>
  );
};

export default Pelicula;
