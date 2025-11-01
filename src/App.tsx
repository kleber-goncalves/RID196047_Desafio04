import { About } from "./componests/About/About";
import { Footer } from "./componests/Footer/Footer";
import { Header } from "./componests/Header/Header";
import { Hero } from "./componests/Hero/Hero";
import { Projects } from "./componests/Projects/Projects";
import Technologies from "./componests/Technologies/Technologies";

export default function App() {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <Projects />
                <Technologies />
                <About />
            </main>
            <Footer />
        </>
    );
}
