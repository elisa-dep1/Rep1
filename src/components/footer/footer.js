import './footer.css'
import insta from "../../assets/images/instagram.png";
import google from "../../assets/images/google.png";
import yotu from "../../assets/images/youtube.png";
export function Footer() {
    return (
        <div className="footer">
            <span className="copyright">© 2026 Altura Landscapes</span>
            <div className="icons">
                <img className="iconFooter" src={yotu} alt="icon" />
                <img className="iconFooter" src={insta} alt="icon" />
                <img className="iconFooter" src={google} alt="icon" />
            </div>

        </div>

    )
}