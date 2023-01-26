import "./family.styles.scss";
import sister from "../../Assets/image0.jpeg";

const Family = () => {
  return (
    <section id="family" className="family">
      <div className="heading">
        <h1>Family</h1>
      </div>
      <div className="family-heading">
        <h2>This is my family.</h2>
      </div>

      <div className="family-wrapper">
        <div>
          <div className="family-wrapper-image">
            <img src={sister} alt="" />
          </div>
          <div className="family-wrapper-description">
            <p>Parents and Me</p>
          </div>
        </div>
        <div>
          <div className="family-wrapper-image">
            <img src={sister} alt="" />
          </div>
          <div className="family-wrapper-description">
            <p>Sister and Me</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Family;
