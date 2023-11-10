import Footer from "./Footer/Footer";
import Hero from "./Hero/Hero";
import Movies from "./Movie/Movies";
import Navbar   from "./Navbar/Navbar";


function Main() {
    return (
        <main>
            <Hero />
            <Movies />
        </main>
    );
}

function Home() {
    return (
        <>
          <Navbar />
          <Main />
          <Footer />
        </>
    );
}

export default Home;