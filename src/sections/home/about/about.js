import ticket from '../../../assets/images/ticket.png';
import firma from '../../../assets/images/firma.png';
import equ from '../../../assets/images/3.JPEG';
import './about.css'

function Title({text}) {
    return (
        <div className='container-icon'>
            <img className="icon-about" src={ticket} />
            <span>
                {text}
            </span>
        </div>
    )
}
export default function About() {
    return (
        <div className="about-seccion">
            <img className='img-work' src={equ} />
            <div className='container-about'>
                <span> ABOUT ALTURA LANDSCAPES</span> <br/>
                <span> Built on Trust.</span> <br />
                <span>Focused on Quality.</span>
                <hr />
                <span>
                    Altura Landscapes is a GTA-based landscaping company dedicated to creating beautiful, functional, and long-lasting outdoor spaces. From design to completion, we take pride in every detail and treat your property like our own.
                </span>
                <Title text={'Experienced & Skilled Team'} />
                <Title text={'High Quality Materials'} />
                <Title text={'Attention to Detail'} />
                <Title text={'100% Satisfaction Guaranteed'} />
                <img className='firma' src={firma} />
            </div>
        </div>
    )
}