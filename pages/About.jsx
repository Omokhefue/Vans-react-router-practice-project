import { Link } from "react-router-dom";
import bgImg from "../assets/images/about-hero.png";

const About = () => {
  return (
    <>
      <section className="about">
        <img src={bgImg} alt="img" />
        <div className="container">
          <h3>Don't squeeze into a sedn when you can relax in a van </h3>

          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Dignissimos nulla deleniti, eum eveniet quidem a? Aperiam cumque
            voluptatibus rem voluptatum. Adipisci dicta facilis, ex ab cumque
            sed incidunt quae molestias!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
            voluptatem.
          </p>
          <div className="explore">
            <p>Your destination is waiting</p>
            <p>Your van is ready</p>
            <Link className="link-button" to="/vans">
              Explore our Vans
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
export default About;
