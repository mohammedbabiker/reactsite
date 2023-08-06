import Header from "../../components/Header";
import HeaderImage from "../../images/header_bg_1.jpg";
import StoryImage from "../../images/about1.jpg";
import VisionImage from "../../images/about2.jpg";
import MissionImage from "../../images/about3.jpg";
import "./about.css";

const About = () => {
  return (
    <>
      <Header title="About Us" image={HeaderImage}>
        Lerom ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incidid do eiusmod tempor incididunt ut labore aliqua.
      </Header>
      <section className="about__story">
        <div className="container about__story-container">
          <div className="about__section-image">
            <img src={StoryImage} alt="Out Story Img" />
          </div>
          <div className="about__section-content">
            <h1>Our Story</h1>
            <p>
              Leromatorem ipsum dolor sit amet, consectet null am Lorem ipsum
              dolor sit amet et lore mauris sed diam non proident. Lorem ipsum
              dolor sit amet et lore mauris sed diam non proident. Lorem ipsum
              dolor sit amet et lo re mauris sed diam non proident. Lorem ipsum
              dolor sit amet et lore maur
            </p>
            <p>
              Leromatorem ipsum dolor sit amet, consectet null am Lorem ipsum
              dolor sit amet et lore mauris sed diam non proident. Lorem ipsum
              dolor sit amet et lore mauris sed diam non proident. Lorem ipsum
              dolor sit amet et lo re mauris sed diam non proident. Lorem ipsu.
            </p>
            <p>
              Leromatorem ipsum dolor sit amet, consectet null am Lorem ipsum
              dolor sit amet et lore mauris sed diam non proident. Lorem ipsum
              dolor sit amet et lore mauris
            </p>
          </div>
        </div>
      </section>
      <section className="vision__story">
        <div className="container about__vision-container">
          <div className="about__section-content">
            <h1>Our Vision</h1>
            <p>
              Leromatorem ipsum dolor sit amet, consectet null am Lorem ipsum
              dolor sit amet et lore mauris sed diam non proident. Lorem ipsum
              dolor sit amet et lore mauris sed diam non proident. Lorem ipsum
              dolor sit amet et lo re mauris sed diam non proident. Lorem ipsum
              dolor sit amet et lore maur
            </p>
            <p>
              Leromatorem ipsum dolor sit amet, consectet null am Lorem ipsum
              dolor sit amet et lore mauris sed diam non proident. Lorem ipsum
              dolor sit amet et.
            </p>
          </div>
          <div className="about__section-image">
            <img src={VisionImage} alt="Out vision Img" />
          </div>
        </div>
      </section>
      <section className="about__mission">
        <div className="container about__mission-container">
          <div className="about__section-image">
            <img src={MissionImage} alt="Out mission Img" />
          </div>
          <div className="about__section-content">
            <h1>Our Mission</h1>
            <p>
              Leromatorem ipsum dolor sit amet, consectet null am Lorem ipsum
              dolor sit amet et lore mauris sed diam non proident. Lorem ipsum
              dolor sit amet et lore mauris sed diam non proident. Lorem ipsum
              dolor sit amet et lo re mauris sed diam non proident. Lorem ipsum
              dolor sit amet et lore maur
            </p>
            <p>
              Leromatorem ipsum dolor sit amet, consectet null am Lorem ipsum
              dolor sit amet et lore mauris sed diam non proident. Lorem ipsum
              dolor sit amet et lore mauris sed diam non proident. Lorem ipsum
              dolor sit amet et lo re mauris sed diam non proident. Lorem ipsu.
            </p>
            <p>
              Leromatorem ipsum dolor sit amet, consectet null am Lorem ipsum
              dolor sit amet et lore mauris sed diam non proident. Lorem ipsum
              dolor sit amet et lore mauris
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
