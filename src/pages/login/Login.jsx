import { useContext, useEffect, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../providers/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Seo from '../../shared-components/seo/Seo';
import toast from 'react-hot-toast';

const Login = () => {
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const navigate = useNavigate();

    const [isCaptchaValid, setIsCaptchaValid] = useState(false);
    const { signIn } = useContext(AuthContext);


    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const passward = form.password.value;
        console.log(email, passward);

        // sign in user 
        signIn(email, passward)
            .then(result => {
                const user = result.user;
                console.log("sign in user", user);
                navigate(from, {replace: true});
                toast.success("Login successful!");
            })
            .catch(err => {
                const errMessage = err.message;
                console.error(errMessage);
            })

    };

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, []);

    const handleValidateCaptcha = (e) => {
        e.preventDefault();
        const userCaptchaValue = e.target.value;
        const check = (validateCaptcha(userCaptchaValue, false));
        setIsCaptchaValid(check);
    }
    return (
        <>
            <Seo titleText="Login"/>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center w-full md:w-1/2 lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card shrink-0 w-full md:w-1/2 shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />

                            </div>
                            <LoadCanvasTemplate />
                            {/* <LoadCanvasTemplateNoReload/> */}
                            <div className="form-control">
                                <input onChange={handleValidateCaptcha} type="text" name="captcha" placeholder="captcha" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <button disabled={isCaptchaValid ? false : true} type="submit" className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <p className="p-8 text-center">New here? <Link to="/signup">create a new account</Link></p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;