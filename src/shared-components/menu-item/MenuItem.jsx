
const MenuItem = ({itemData}) => {
    console.log(itemData);
    const {image, name, price, recipe} = itemData;
    return (
        <div className="flex gap-2">
           <img className="w-[120px] h-[120px] rounded-full rounded-tl-none" src={image} alt="" />
           <div>
                <h3 className="uppercase">{name} -------</h3>
                <p>{recipe}</p>
           </div>
           <h5 className="text-yellow-500">${price}</h5>
        </div>
    );
};

export default MenuItem;