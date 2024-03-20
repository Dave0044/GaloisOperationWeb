import About from "../Components/About";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Work1 from "../Components/Work1";


export default function Home () {
    return (
        <>
            <Navbar />
            <About />
            <Work1 />
            <Contact />
            <Footer />
        </>
    )
}