import Cover from "../../../shared-components/cover/Cover";
import Seo from "../../../shared-components/seo/Seo";
import menuBg from '../../../assets/menu/banner3.jpg';
import useMenu from "../../../hooks/use-menu/useMenu";
import SectionTitle from "../../../shared-components/section-title/SectionTitle";
import MenuCategory from "./menu-category/MenuCategory";
import dessertsCover from "../../../assets/menu/dessert-bg.jpeg"
import pizzasCover from "../../../assets/menu/pizza-bg.jpg"
import saladsCover from "../../../assets/menu/salad-bg.jpg"
import soupsCover from "../../../assets/menu/soup-bg.jpg"

const Menu = () => {
    const [menu] = useMenu();
    const offers = menu.filter(item => item.category === "offered");
    const desserts = menu.filter(item => item.category === "dessert");
    const pizzas = menu.filter(item => item.category === "pizza");
    const salads = menu.filter(item => item.category === "salad");
    const soups = menu.filter(item => item.category === "soup");
    return (
        <div>
            <Seo titleText="Menu"/>
            <Cover bgImg={menuBg} title="our menu"/>
            <SectionTitle heading="TODAY'S OFFER" subHeading="Don't miss"/>
            <MenuCategory items={offers}/>
            <MenuCategory items={desserts} title="desserts" coverImg={dessertsCover}/>
            <MenuCategory items={pizzas} title="pizzas" coverImg={pizzasCover}/>
            <MenuCategory items={salads} title="salads" coverImg={saladsCover}/>
            <MenuCategory items={soups} title="soups" coverImg={soupsCover}/>
        </div>
    );
};

export default Menu;