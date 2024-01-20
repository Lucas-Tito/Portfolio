import About from "./components/about/About";
import Articles from "./components/articles/Articles";
import Contact from "./components/contact/Contact";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Portfolio from "./components/portfolio/Portfolio";

export default function App(){
    return(
        <>
            <Header/>
            <Home/>
            <About/>
            <Portfolio/>
            <Articles/>
            <Contact/>
        </>
    )
}