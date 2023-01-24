import "./home.styles.scss";
import homeimage from "../../Assets/home.jpeg";

const Home = () => {
  return (
    <section id="home" className="home">
      <div className="home-aside-left" />
      <div className="home-aside-rigth" />
      <div className="home-heading">
        <h1>My name is Blue</h1>
      </div>
      <div className="home-image">
        <img src={homeimage} alt="" />
      </div>
      <div className="home-description">
        <h2 className="home-description-heading">I'm a Mekong bobtail</h2>
        <p className="home-desription-para">
          I really love <span className="home-descirption-span">chicken</span>{" "}
          and <span className="home-descirption-span">screaming</span>
        </p>
      </div>
    </section>
  );
};

export default Home;
