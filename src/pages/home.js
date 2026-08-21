import { Contact } from '../components/contact/contact';
import { Footer } from '../components/footer/footer';
import { Navbar } from '../components/navbar/navbar';
import { Reviews } from '../components/reviews/reviews';
import Banner from '../sections/home/banner/banner';


export default function Home() {
    return (
        <div>
            <Navbar />
            <Banner/>
            <Reviews />
            <Contact />
            <Footer />

        </div>
    );
}

