import React, { useEffect, useState } from "react";
import axios from "./LocalAxios";
import userrequest from "./Request";
import "./css/banner.css";
function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(userrequest.fetchNetflixOriginals);
      console.log(request.data.results);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
    }

    fetchData();
  }, []);

  return (
    <div
      className="banner"
      style={{
        backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="banner_content">
        <h1 className="banner_title">
          {movie?.title || movie?.original_name || movie?.name}
        </h1>

        <div className="banner_button">
          <button>Play</button>
          <button>My list</button>
        </div>

        <div className="banner_desc">
          <p>{movie?.overview}</p>
        </div>
      </div>
      <div className="banner_fade"></div>
    </div>
  );
}

export default Banner;
