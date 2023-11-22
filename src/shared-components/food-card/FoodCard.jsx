import { useLocation, useNavigate } from "react-router-dom";
import UseAuth from "../../hooks/use-auth/UseAuth";
import toast from "react-hot-toast";
import UseAxiosSecure from "../../hooks/use-axios-secure/UseAxiosSecure";
import UseCart from "../../hooks/use-cart/UseCart";

const FoodCard = ({ itemData }) => {
    const { _id, image, name, price, recipe } = itemData;
    const { user } = UseAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = UseAxiosSecure();
    const [, refetch] = UseCart();
    const handleAddToCart = () => {
        // send add to cart request to server 
        if (user && user.email) {
            console.log(itemData, user.email);
            const cartItem = {
                menuId: _id,
                email: user.email,
                name,
                image,
                price
            };
            axiosSecure.post("/carts", cartItem)
                .then((res) => {
                    console.log(res.data);
                    if (res.data.insertedId) {

                        toast.success("Added to cart successfully!")
                        refetch();
                    }
                })
                .catch((err) => {
                    const errMessage = err.message;
                    console.error(errMessage);
                });
        }

        // redirect user if not logged in 
        else {
            navigate("/login", { state: { from: location } });
        }
    };

    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img src={image} alt="Food" /></figure>
            <p className="absolute right-10 top-10 py-2 px-3 bg-black text-white text-xl">${price}</p>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-center">
                    <button onClick={handleAddToCart} className="btn btn-outline border-0 bg-slate-200 border-orange-400 border-b-4">Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;