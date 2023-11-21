import Seo from "../../../shared-components/seo/Seo";
import Banner from "../banner/Banner";
import Categories from "../categories/Categories";
import Featured from "../featured/Featured";
import PopularItems from "../popular-items/PopularItems";
import Testimonials from "../testimonials/Testimonials";

const Home = () => {
    return (
        <div>
            <Seo titleText="Home"/>
           <Banner/>
           <Categories/>
           <PopularItems/>
           <Featured/>
           <Testimonials/>
        </div>
    );
};

export default Home;