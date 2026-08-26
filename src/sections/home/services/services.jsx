import './services.css'
import {Button} from '../../../components/buttons/buttons'
function Cards({ title, subtitle }) {
    return (
        <div className='card'>
            <span className='title'>{title}</span>
            <span className='subtitle'>{subtitle}</span>
        </div>
    )

}

export default function Services() {
    return (
        <div className="serv-seccion">
          
            <span id='text1'>OUR SERVICES</span>
            <span id='text2'>Explore outdoor solutions designed for you</span>
            <hr className='line'/>
            <div className='container-cards'>
                <Cards title={'LANDSCAPING'} subtitle={'Custom landscaping desings to enhance the beauty of your property.'} />
                <Cards title={'INTERLOCKING & PAVERS'} subtitle={'Detable and elegant paver installations for driveways, patios, walways & more.'} />
                <Cards title={'RETAINING WALLS'} subtitle={'Strong and stylish retaining walls built to last and add value to your yard.'} />
                <Cards title={'DECKS & STAIRS'} subtitle={'Custom decks and stair designed for comfort, function and style.'} />
                <Cards title={'FENCES'} subtitle={'Privacy and security fences with quality craftsmanship and premium materials.'} />
                <Cards title={'SOD & GRADIND'} subtitle={'Healthy sod installation and grading for a clean, perfect finish.'} />
            </div>
            <Button type="services">
                View all services
            </Button>

        </div>
    )

}