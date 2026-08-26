import logo from "../../assets/images/logo.png";
import { Button } from "../buttons/buttons";
import "./navbar.css";
import { Link } from "react-router-dom";

export function Navbar() {
    return (
        <div className="navbar">
            <img src={logo} className="logo" alt="logo" />

            <div className="nav-links">
                <Link to="/">HOME</Link>

                <Link to="/services">SERVICES</Link>

                <Button type="quote">
                    GET A FREE QUOTE
                </Button>
            </div>
        </div>
    );
}


