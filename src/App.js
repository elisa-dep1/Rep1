import './App.css';

import { Contact } from './components/contact/contact';
import { Footer } from './components/footer/footer';
import { Navbar } from './components/navbar/navbar';
import { Reviews } from './components/reviews/reviews';


export default function App() {
  return (

    <div className="App">

      <Navbar />
      <Reviews />
      <Contact />
      <Footer />
     
    </div>
  );
}

