import { Outlet, useLocation } from "react-router-dom";
import Footer from "../../shared-components/footer/Footer";
import Navbar from "../../shared-components/navbar/Navbar";
import { Toaster } from "react-hot-toast";

const Main = () => {
    const location = useLocation();
    const path = location.pathname;
    console.log(path);
    const hideHeaderFooter = path === "/login" || path === "/signup";
    console.log(hideHeaderFooter);
    return (
        <div>
            {!hideHeaderFooter && <Navbar />}
            <Outlet />
            {!hideHeaderFooter && <Footer />}
            <Toaster
                position="top-right"
                reverseOrder={false}
            />
        </div>
    );
};

export default Main;