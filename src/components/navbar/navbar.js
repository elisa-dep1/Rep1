import logo from "../../assets/images/logo.png";
import { Button } from "../buttons/buttons";
import "./navbar.css";
export function Navbar() {
    return (
        <div className="navbar">
            <img src={logo} className="logo" alt="logo" />

            <div>
                <ul className="nav-links">
                    <li>HOME</li>
                    <li>SERVICES</li>
                    <li>
                        <Button type="quote">
                            GET A FREE QUOTE
                        </Button>
                    </li>
                </ul>
            </div>
        </div>
    );
}


