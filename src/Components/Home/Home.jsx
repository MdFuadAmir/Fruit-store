import Banner2 from "../../Banner2/Banner2";
import Banner3 from "../../Banner3/Banner3";
import Banner from "../Banner/Banner";
import Hero from "../Hero/Hero";
import Menu from "../Menu/Menu";

const Home = () => {
    return (
        <div>
           <Hero/>
           <Menu/>
           <Banner/>
           <Banner2/>
           <Banner3/>
        </div>
    );
};

export default Home;