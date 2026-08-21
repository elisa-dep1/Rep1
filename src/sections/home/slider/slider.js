import { Button } from "../../../components/buttons/buttons"
import './slider.css'

function Image({ number, index }) {
    return (
        <div className="image"> </div>
        /*<img classname='image'
            src={`/images/slider/slider-${number}.jpg`}
            alt=""
            style={{ "--i": index }}
        />*/
    );
}


export default function BannerGreen() {
    return (
        <div className="bannerGreen">
            <div className="textBn">
                <span id="title">
                    READY TO GET STARTED?
                </span>
                <span id="subtitle">
                    Let’s turn your ideas into a space you'll enjoy for years.
                </span>
                <span id="subtitle2">
                    Planning a project in the GTA?
                </span>
                <Button type="estimate-white">
                    GET A FREE ESTIMATE
                </Button>
            </div>
            <div className="slider">


                <div className="sliderColumn sliderColumnUp">
                    <div className="sliderTrack">
                        <Image number={1} index={0} />
                        <Image number={2} index={1} />
                        <Image number={3} index={2} />
                        <Image number={4} index={3} />
                        <Image number={5} index={4} />

                        <Image number={1} index={0} />
                        <Image number={2} index={1} />
                        <Image number={3} index={2} />
                        <Image number={4} index={3} />
                        <Image number={5} index={4} />
                    </div>
                </div>

                <div className="sliderColumn sliderColumnDown">
                    <div className="sliderTrack">
                        <Image number={6} index={0} />
                        <Image number={7} index={1} />
                        <Image number={8} index={2} />
                        <Image number={9} index={3} />
                        <Image number={10} index={4} />

                        <Image number={6} index={0} />
                        <Image number={7} index={1} />
                        <Image number={8} index={2} />
                        <Image number={9} index={3} />
                        <Image number={10} index={4} />
                    </div>
                </div>

            </div>
        </div>

    )
}
