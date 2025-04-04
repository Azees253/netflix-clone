import React, { useEffect, useRef, useState } from "react";
import "./TitleCards.css";
import cards_data from "../../assets/Cards/Cards_data";
import { Link } from "react-router-dom";

const TitleCards = ({ title, catagory }) => {
  const [apiData, setapiData] = useState([]);
  const cardRef = useRef();

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYmNhNTBkODUxOTViMmMxZjY4ZjBjMzJjYTI4NjFjOCIsIm5iZiI6MTc0MzY2MjY1NS40MDk5OTk4LCJzdWIiOiI2N2VlMmUzZjU0ZjU5NWJiNTVhNzkyMjUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.aBMd248RBp1xdx_HT1tP9jRupswOxHcPbq0vbSE2CIg",
    },
  };

  const handleWheel = (event) => {
    event.preventDefault();
    cardRef.current.scrollLeft += event.deltaY;
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${
        catagory ? catagory : "now_playing"
      }?language=en-US&page=1`,
      options
    )
      .then((res) => res.json())
      .then((res) => setapiData(res.results))
      .catch((err) => console.error(err));

    cardRef.current.addEventListener("wheel", handleWheel);
  }, []);
  return (
    <div className="title-cards">
      <h2>{title ? title : "Popular on Netflix"}</h2>
      <div className="card-list" ref={cardRef}>
        {apiData.map((card, index) => {
          return (
            <Link to={`/player/${card.id}`} className="card" key={index}>
              <img
                src={`https://image.tmdb.org/t/p/w500` + card.backdrop_path}
                alt=""
              />
              <p>{card.original_title}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default TitleCards;
