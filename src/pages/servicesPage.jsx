import { Contact } from '../components/contact/contact';
import { Footer } from '../components/footer/footer';
import { Navbar } from '../components/navbar/navbar';
import { Reviews } from '../components/reviews/reviews';
import BannerServices from '../sections/home/banner/bannerServices';
import AllServices from '../sections/services/allServices/allServices';


export default function ServicesPage() {
    return (
        <div>
            <Navbar />
            <BannerServices/>
            <AllServices/>
            <Reviews />
            <Contact />
            <Footer />


        </div>
    );
}

