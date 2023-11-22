import UseAuth from "../use-auth/UseAuth";
import UseAxiosSecure from "../use-axios-secure/UseAxiosSecure";
import {
   useQuery
  } from '@tanstack/react-query'
const UseCart = () => {
    const {user} = UseAuth();
    const axiosSecure = UseAxiosSecure();
    const {data:cart=[], refetch} = useQuery({
        queryKey: ["cart", user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/carts?email=${user.email}`);
            return res.data;
        }
    })
   return [cart, refetch];
};

export default UseCart;