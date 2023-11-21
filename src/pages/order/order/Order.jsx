import Cover from "../../../shared-components/cover/Cover";
import orderCoverBg from "../../../assets/shop/banner2.jpg"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from "../../../hooks/use-menu/useMenu";
import FoodCard from "../../../shared-components/food-card/FoodCard";
import OrderTabContent from "../order-tab-content/OrderTabContent";
import { useParams } from "react-router-dom";
import { useState } from "react";
import Seo from "../../../shared-components/seo/Seo";
const Order = () => {
    const [menu] = useMenu();
    const categories = ["salads", "pizzas", "soups", "desserts", "drinks"];
    const {category} = useParams();
    console.log({category});
    const categoryIndex = categories.indexOf(category);
    console.log(categoryIndex);
    const [tabIndex, setTabIndex] = useState(categoryIndex);
    const salads = menu.filter(item => item.category === "salad");
    const pizzas = menu.filter(item => item.category === "pizza");
    const soups = menu.filter(item => item.category === "soup");
    const desserts = menu.filter(item => item.category === "dessert");
    const drinks = menu.filter(item => item.category === "drinks");
    return (
        <div>
            <Seo titleText="Order Food"/>
            <Cover bgImg={orderCoverBg} title="Order Now" />
            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soups</Tab>
                    <Tab>Desserts</Tab>
                    <Tab>Drinks</Tab>
                </TabList>

                <TabPanel>
                    <OrderTabContent items={salads}/>
                </TabPanel>
                <TabPanel>
                    <OrderTabContent items={pizzas}/>
                </TabPanel>
                <TabPanel>
                    <OrderTabContent items={soups}/>
                </TabPanel>
                <TabPanel>
                    <OrderTabContent items={desserts}/>
                </TabPanel>
                <TabPanel>
                    <OrderTabContent items={drinks}/>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;