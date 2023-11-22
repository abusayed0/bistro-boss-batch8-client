import { FaTrash } from "react-icons/fa";
import UseCart from "../../../hooks/use-cart/UseCart";
import Swal from "sweetalert2";
import UseAxiosSecure from "../../../hooks/use-axios-secure/UseAxiosSecure";
import toast from "react-hot-toast";

const Cart = () => {
    const [cart, refetch] = UseCart();
    const totalPrice = cart.reduce((preTotal, currentItem) => preTotal + currentItem.price, 0);

    const axiosSecure = UseAxiosSecure();

    const handleDelete = (_id) => {
        console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {

            // if user conform send delete request to server 
            if (result.isConfirmed) {
                
                axiosSecure.delete(`/carts/${_id}`)
                .then(res => {
                    console.log(res.data);
                    if(res.data.deletedCount){
                        refetch();
                        toast.success("Deleted successfully!")
                    }
                })
                .catch(err => {
                    const errMessage = err.errMessage;
                    console.error(errMessage);
                })
            }
        });
    }

    return (
        <div>
            <div className="flex justify-between mb-8">
                <h2 className="text-3xl">Items - {cart.length}</h2>
                <h2 className="text-3xl">Total Price - {totalPrice}</h2>
                <button className="btn btn-primary">Pay</button>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>

                            <th></th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((item, index) => <tr key={item._id}>
                                <td>
                                    <span>{index + 1}</span>
                                </td>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <h2>{item.name}</h2>
                                </td>
                                <td>
                                    <p>${item.price}</p>
                                </td>
                                <th>
                                    <button onClick={() => handleDelete(item._id)} className="btn">
                                        <FaTrash className="text-red-600" />
                                    </button>
                                </th>
                            </tr>)
                        }
                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default Cart;