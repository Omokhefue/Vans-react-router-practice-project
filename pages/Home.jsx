import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <section className="homepage">
        <h2>You got the travel plans, we got the travel vans</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum soluta
          odit inventore fugit assumenda magni. Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Dolorem, labore. Esse totam dolorem
          accusamu
        </p>
        <Link className="link-button" to="/vans">
          Find your van
        </Link>
      </section>
    </>
  );
};
export default Home;
