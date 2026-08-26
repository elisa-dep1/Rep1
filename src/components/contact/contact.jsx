import serviring from "../../assets/images/serviring.png";
import email from "../../assets/images/email.png";
import call from "../../assets/images/call.png";
import fully from "../../assets/images/fully.png";
import './contact.css';

export function Contact() {
    return (

        <div className="contact">
            <div className="items">
                <div className="title-box">
                    <img className="icon" src={serviring} alt="icon" />
                    <span className="title"> SERVING THE GTA</span>

                </div>

                <div className="info">
                    <span className="subtitle">Toronto · Mississauga · Brampton</span> <br />
                    <span className="subtitle">and surrounding areas</span>
                </div>

            </div>
            <div className="items">
                <div className="title-box">
                    <img className="icon" src={call} alt="icon" />
                    <span className="title">CALL US </span>
                </div>

                <div className="info">
                    <span className="subtitle">+1 (437) 335 6635</span> <br />
                    <span className="subtitle"> MON - SAT: 08:00 - 19:00 hrs</span>
                </div>
            </div>
            <div className="items">
                <div className="title-box">
                    <img className="icon" src={email} alt="icon" />
                    <span className="title">EMAIL US </span>
                </div>

                <div className="info">
                    <span className="subtitle">info@alturalandscapes.ca  </span> <br />
                    <span className="subtitle">We reply within 24 hours</span>
                </div>
            </div>
            <div className="items">
                <div className="title-box">
                    <img className="icon" src={fully} alt="icon" />
                    <span className="title">FULLY INSURED </span>
                </div>
                <div className="info">
                    <span className="subtitle">WSIB Compliant </span> <br />
                    <span className="subtitle">Liability Insurance</span>
                </div>

            </div>
        </div>
    )
}