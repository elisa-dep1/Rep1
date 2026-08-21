import { Contact } from '../components/contact/contact';
import { Footer } from '../components/footer/footer';
import { Navbar } from '../components/navbar/navbar';
import { Reviews } from '../components/reviews/reviews';
import Work from '../sections/home/work/work'
import About from '../sections/home/about/about'
import Banner from '../sections/home/banner/banner';
import Services from '../sections/home/services/services';


export default function Home() {
    return (
        <div>
            <Navbar />
            <Banner/>
            <Services />
            <Reviews />
            <Work />
            <About/>
            <Contact />
            <Footer />
          

        </div>
    );
}

