import "./index.css";

import Header from './components/header'
import Section from "./components/section";
import Section2 from "./components/section2";
import Section3 from "./components/section3";
import Section4 from "./components/section4";
import Footer from "./components/footer";

const Home = () => {
    return (
    <div className="App">
      <Header />
    
    <main>
      <Section />
      

    </main>
    <Section2 />
    <Section3 />
    <Section4 />

    <Footer />

    </div>
  );
}
 
export default Home;


