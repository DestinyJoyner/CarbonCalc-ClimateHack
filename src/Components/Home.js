import { Link } from "react-router-dom";
import {FcGlobe} from "react-icons/fc"
import homePage from "../assets/carbon-home.gif"
import "./Home.css"

function Home(props) {
    return (
        <div className='home'>
        {/* <img src = {homePage} alt = "gif" /> */}
        <button 
        className="start">
            <Link to = "/transportation">START</Link>
        </button>

        {/* a tag to outside carbon link */}
        <Link className= "link" to= "/">What is Carbon Footprint?</Link>
        </div>
    );
}

export default Home;