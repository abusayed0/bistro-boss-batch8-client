
const FoodCard = ({ itemData }) => {
    const { image, name, price, recipe } = itemData;

    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img src={image} alt="Food" /></figure>
            <p className="absolute right-10 top-10 py-2 px-3 bg-black text-white text-xl">${price}</p>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-center">
                    <button className="btn btn-outline border-0 bg-slate-200 border-orange-400 border-b-4">Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;