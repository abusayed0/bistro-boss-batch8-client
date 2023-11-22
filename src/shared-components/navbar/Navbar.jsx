import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(() => {
                console.log("log out successfull");
            })
            .catch(err => {
                const errMessage = err.message;
                console.error(errMessage);
            })
    }
    const navOptions = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/menu">Our Menu</Link></li>
        <li><Link to="/order/salads">Order Food</Link></li>
        <li><Link to="/secret">Secret</Link></li>

        {
            user ?
                <>
                    <span>{user.displayName}</span>
                    <li><button onClick={handleLogOut}>Logout</button></li>
                </>
                :
                <li><Link to="/login">Login</Link></li>
        }

    </>;

    return (
        <div className="navbar fixed  z-10  bg-slate-600 text-white max-w-screen-xl mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="dropdown-content mt-3 z-[1] p-2 shadow bg-slate-600 rounded-box w-52">
                        {navOptions}
                    </ul>
                </div>
                <a className="text-xl">Bistro Boss</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="flex gap-3">
                    {navOptions}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Button</a>
            </div>
        </div>
    );
};

export default Navbar;