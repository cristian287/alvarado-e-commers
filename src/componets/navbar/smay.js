import "./navbar.css";
import { Link } from "react-router-dom";
const Smay = () => {
    return(
        <div>
         <Link to={"./"}><img src={require("./lsd smaily.png")} alt="smay" className="smay"></img> </Link>  
        </div>
    )
}
export default Smay