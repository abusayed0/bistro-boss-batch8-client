import { useEffect, useState } from "react";
import SectionTitle from "../../../shared-components/section-title/SectionTitle";
import MenuItem from "../../../shared-components/menu-item/MenuItem";

const PopularItems = () => {
    const [menu, setMenu] = useState([]);
    useEffect(() => {
        fetch("menu.json")
            .then(res => res.json())
            .then(data => {
                const popularItems = data.filter(item => item.category === "popular");
                setMenu(popularItems);
            })
    }, []);
    return (
        <section className="mb-12">
            <SectionTitle
                subHeading="Popular items"
                heading="FROM OUR MENU"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {
                    menu.map(item => <MenuItem key={item._id} itemData={item} />)
                }
            </div>
            <button className="block mx-auto btn btn-outline border-0 border-b-4">View Full Menu</button>

        </section>
    );
};

export default PopularItems;