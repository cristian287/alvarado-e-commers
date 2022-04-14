import { Link } from "react-router-dom";
import "./navbar.css";
const Logo = () => {
    return(
        <div>
           <Link to={"/"}><img src={require("./ouroboros.png")} alt="logo" className="logo"></img></Link> 
        </div>
    )
}
export default Logo