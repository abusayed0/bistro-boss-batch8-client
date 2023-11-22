import { useNavigate } from "react-router-dom";
import Cover from "../../../../shared-components/cover/Cover";
import MenuItem from "../../../../shared-components/menu-item/MenuItem";

const MenuCategory = ({ items, title, coverImg }) => {
    const navigate = useNavigate();
    return (
        <div className="pt-8">
            {title && <Cover bgImg={coverImg} title={title} />}

            <div className="my-16 grid grid-cols-1 md:grid-cols-2 gap-8">
                {
                    items.map(item => <MenuItem key={item._id} itemData={item} />)
                }
            </div>
            <button onClick={() => navigate(`/order/${title? title: "salads"}`)} className="btn btn-outline border-0 border-b-4">Order Now</button>

        </div>
    );
};

export default MenuCategory;