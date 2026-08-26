import './banner.css';
import banner from '../../../assets/images/36.JPEG';
import reliable from '../../../assets/images/reliable.png';
import premium from '../../../assets/images/premium.png';
import quality from '../../../assets/images/quality.png';
import { Button } from "../../../components/buttons/buttons";
export default function Banner() {
    return (
        <div className="banner">

            <img className="banner-image" src={banner} alt="Banner image" />
            <div className='blur' />
            <div className='container-banner'>
                <div>
                    <span id='text1'> ELEVATING</span> <br/>
                    <span id='text2'>OUTDOOR LIVING</span>
                </div>
                <span id='text3'>Professional landscaping services in the GTA built with quality & precision.</span>
                <Button type="estimate-green">
                    GET A FREE ESTIMATE
                </Button>
                <div className='banner-icons'>
                    <div className='item-icon'>
                        <img className="banner-icon" src={quality} alt="Banner" />
                        <div>
                            QUALITY <br />
                            WORKMANSHIP
                        </div>

                    </div>
                    <div className='item-icon'>
                        <img className="banner-icon" src={premium} alt="Banner" />
                        <div>
                            PREMIUM  <br />
                            MATERIALS
                        </div>
                    </div>
                    <div className='item-icon'>
                        <img className="banner-icon" src={reliable} alt="Banner" />
                        <div>
                            RELIABLE &  <br />
                            PROFESSIONAL
                        </div>

                    </div>



                </div>

            </div>
        </div>
    );
}
