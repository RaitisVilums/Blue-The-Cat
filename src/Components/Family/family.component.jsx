import "./family.styles.scss";
import sister from "../../Assets/image0.jpeg";
import mom from "../../Assets/image-2.jpeg";
import dad from "../../Assets/image-1.jpeg";
import parents from "../../Assets/image-3.jpeg";

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
            <img src={mom} alt="" />
          </div>
          <div className="family-wrapper-description">
            <p>Me and my Mom</p>
          </div>
        </div>
        <div>
          <div className="family-wrapper-image">
            <img src={dad} alt="" />
          </div>
          <div className="family-wrapper-description">
            <p>Me and my Dad</p>
          </div>
        </div>
        <div>
          <div className="family-wrapper-image">
            <img src={parents} alt="" />
          </div>
          <div className="family-wrapper-description">
            <p>Me and my Parents</p>
          </div>
        </div>
        <div>
          <div className="family-wrapper-image">
            <img src={sister} alt="" />
          </div>
          <div className="family-wrapper-description">
            <p>Me and my Sister</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Family;
