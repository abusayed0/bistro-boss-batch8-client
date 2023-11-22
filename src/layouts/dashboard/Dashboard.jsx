import { NavLink, Outlet } from "react-router-dom";
import { FaAd, FaCalendar, FaHome, FaList, FaSearch, FaShoppingBag, FaShoppingCart } from "react-icons/fa";

const Dashboard = () => {
    return (
        <div className="flex gap-7">
            <div className="w-64 bg-orange-400 min-h-screen">
                <ul className="menu">
                    <li>
                        <NavLink to="/dashboard/userHome"><FaHome />User Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/reservation"><FaCalendar /> Reservation</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/cart"><FaShoppingCart /> My Cart</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/review"><FaAd /> Add Review</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/bookings"><FaList /> My Bookings</NavLink>
                    </li>
                    <div className="divider"></div>
                    <li>
                        <NavLink to="/"><FaHome />Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/menu"><FaSearch/> Our Menu</NavLink>
                    </li>
                    <li>
                        <NavLink to="/order/salads"><FaShoppingBag/> Order Food</NavLink>
                    </li>
                </ul>
            </div>
            <div className="flex-1 p-8">
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;