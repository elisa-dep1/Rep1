import './bannerServ.css'
import banner from '../../../assets/images/8.jpg';
import reliable from '../../../assets/images/reliable.png';
import premium from '../../../assets/images/premium.png';
import quality from '../../../assets/images/quality.png';
import { Button } from "../../../components/buttons/buttons";

export default function BannerServices() {
    return (
        <div className="bannerServ">
            <img className="bannerServ-image" src={banner} alt="Banner image" />
            <div className='blurS' />
            <div className='container-bannerServ'>
                <span id='text1'>OUR SERVICES</span>
                <br />
                <span id='text2'>BUILT FOR EVERY SEASON</span>
                <hr className='line' />
                <span id='text3'>Reliable residential and commercial solutions designed to elevate and maintain your outdoor spaces.</span>
            </div>
        </div>
    );
}