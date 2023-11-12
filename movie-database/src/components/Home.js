import Footer from "./Footer/Footer";
import Hero from "./Hero/Hero";
import Navbar   from "./Navbar/Navbar";


function Main() {
    return (
        <main>
            <Hero />
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