import "./about.styles.scss";
import AboutImage from "../../Assets/blue12.jpeg";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-heading">
        <h1>About</h1>
      </div>

      <div className="wrapper">
        <div className="wrapper-description">
          <div className="description-wrapper">
            <h2>
              Weight: <span>Small</span>
            </h2>

            <h2>
              Height: <span>Small</span>
            </h2>

            <h2>
              Age: <span>Small</span>
            </h2>

            <h2>
              Chickens: <span>Over beyond</span>
            </h2>
          </div>
        </div>

        <div className="wrapper-image">
          <img src={AboutImage} alt="" />
          <h2>This me!</h2>
        </div>

        <div className="wrapper-aboutme">
          <h2 className="aboutme-heading">My name is Blue</h2>
          <h2 className="aboutme-heading-span">I am small (smoll) cat :3</h2>
          <p className="aboutme-para">
            I love chichen and my parents, and screaming
          </p>
          <p className="aboutme-para">
            I love chichen and my parents, and screaming
          </p>
          <p className="aboutme-para">
            I love chichen and my parents, and screaming
          </p>
          <p className="aboutme-para">
            I love chichen and my parents, and screaming
          </p>
          <p className="aboutme-para">
            I love chichen and my parents, and screaming
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
