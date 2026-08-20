import serviring from "../../assets/images/serviring.png";
import email from "../../assets/images/email.png";
import call from "../../assets/images/call.png";
import fully from "../../assets/images/fully.png";
import './contact.css';

export function Contact() {
    return (

        <div className="contact">
            <div className="items">
                <img className="icon" src={serviring} alt="icon" />
                <p className="title"> SERVING THE GTA</p>
                <div>
                    <span className="subtitle">Toronto · Mississauga · Brampton</span> <br />
                    <span className="subtitle">and surrounding areas</span>
                </div>

            </div>
            <div className="items">
                <img className="icon" src={call} alt="icon" />
                <p className="title">CALL US </p>
                <div>
                    <span className="subtitle">+1 (437) 335 6635</span> <br />
                    <span className="subtitle"> MON - SAT: 08:00 - 19:00 hrs</span>
                </div>
            </div>
            <div className="items">
                <img className="icon" src={email} alt="icon" />
                <p className="title">EMAIL US </p>
                <div>
                    <span className="subtitle">info@alturalandscapes.ca  </span> <br />
                    <span className="subtitle">We reply within 24 hours</span>
                </div>

            </div>
            <div className="items">
                <img className="icon" src={fully} alt="icon" />
                <p className="title">FULLY INSURED </p>
                <div>
                    <span className="subtitle">WSIB Compliant </span> <br />
                    <span className="subtitle">Liability Insurance</span>
                </div>

            </div>
        </div>
    )
}