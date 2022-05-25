import bird from '../../bird.png';
import {Link} from "react-router-dom";

function Header() {
    return (<div className="header">
        <img src={bird} className="App-logo" alt="logo" />
        <nav>
            <Link to="/login"><button>Login</button></Link> |{" "}
        </nav>
    </div>);
}

export default Header;