import React from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import hero_banner from "../../assets/hero_banner.jpg"; // Assuming you have a hero banner image in the assets folder
import play from "../../assets/play.jpeg";
import info from "../../assets/info.jpeg";
import TitleCards from "../../components/TitleCards/TitleCards";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="hero">
        <img src={hero_banner} alt="" className="banner-img" />
        <div className="hero-caption">
          {/* <img src={hero_title} alt="" className="caption img" /> */}
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
            quibusdam non eveniet hic dolore ex harum voluptatibus sit velit
            veniam.
          </p>
          <div className="hero-btns">
            <button className="btn">
              {" "}
              <img
                src={play}
                alt=""
                style={{ width: "25px", height: "25px" }}
              />
              Play
            </button>
            <button className="btn dark-btn">
              {" "}
              <img
                src={info}
                alt=""
                style={{ width: "23px", height: "23px" }}
              />
              more info
            </button>
          </div>
          <div className="title-cards">
            <TitleCards />
          </div>
        </div>
      </div>
      <div className="more-cards">
        <TitleCards title={"Blockbuster Movies"} catagory={"top_rated"} />
        <TitleCards title={"Only on Netflix"} catagory={"popular"} />
        <TitleCards title={"Upcoming"} catagory={"upcoming"} />
        <TitleCards title={"Top Pics for You"} catagory={"now_playing"} />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
