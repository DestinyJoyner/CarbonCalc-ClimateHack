import { Link } from "react-router-dom";
import { FcGlobe } from "react-icons/fc";
import homePage from "../assets/carbon-home.gif";
import "./Home.css";

function Home(props) {
  return (
    <div className="home">
      {/* <img src = {homePage} alt = "gif" /> */}
      <button className="start">
        <Link to="/transportation">Start the Quiz</Link>
      </button>

      {/* a tag to outside carbon link */}

      <a
        href="https://www.conservation.org/stories/what-is-a-carbon-footprint"
        target="_blank"
        rel="noreferrer"
      >
        What is a Carbon Footprint?
      </a>
    </div>
  );
}

export default Home;
