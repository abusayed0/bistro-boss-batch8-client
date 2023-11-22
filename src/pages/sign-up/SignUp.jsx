import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Seo from "../../shared-components/seo/Seo";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import toast from "react-hot-toast";

const SignUp = () => {
    const {createUser, updateUserProfile} = useContext(AuthContext);
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
        reset
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        const {email, password, name, photoURL} = data;
       
        createUser(email, password)
        .then(result => {
            const user = result.user;
            console.log("created user", user);

            // update user name and photo 
            updateUserProfile(name, photoURL)
            .then(() => {
                console.log("Profile updated!");
                toast.success("User profile successfully updated!")
                reset();
                navigate("/");

            })
            .catch(err => {
                const errMessage = err.message;
                console.error(errMessage);
            })
        })
        .catch(err => {
            const errMessage = err.message;
            console.error(errMessage);
        })

    };

    return (
        <>
            <Seo titleText="Sign Up" />
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center w-full md:w-1/2 lg:text-left">
                        <h1 className="text-5xl font-bold">Sign up now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card shrink-0 w-full md:w-1/2 shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input {...register("name", { required: true })} type="text" placeholder="name" className="input input-bordered" />
                                {errors.name?.type === "required" && <span className="text-red-600">This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label"> 
                                    <span className="label-text">Photo</span>
                                </label>
                                <input {...register("photoURL", { required: true })} type="text" placeholder="photo url" className="input input-bordered" />
                                {errors.photoURL?.type === "required" && <span className="text-red-600">This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input {...register("email", { required: true })} type="email" placeholder="email" className="input input-bordered" />
                                {errors.email?.type === "required" && <span className="text-red-600">This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input {...register("password", {
                                    required: true,
                                    maxLength: 20,
                                    minLength: 6,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*%^])(?=.*[0-9])(?=.*[a-z])/
                                })}
                                    aria-invalid={errors.name ? true : false} type="password" placeholder="password" className="input input-bordered" />

                                {errors.password?.type === "required" && <span className="text-red-600">This field is required</span>}
                                {errors.password?.type === "maxLength" && <span className="text-red-600">Password must be less than 20 character</span>}
                                {errors.password?.type === "minLength" && <span className="text-red-600">Pasword must be grater than 6 character</span>}
                                {errors.password?.type === "pattern" && <span className="text-red-600">Password must contain uppercase, lowercase, number and special character</span>}

                            </div>
                            <div className="form-control mt-6">
                                <button type="submit" className="btn btn-primary">Register</button>
                            </div>
                        </form>
                        <p className="p-8 text-center">Already registered? <Link to="/login">Go to log in</Link></p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;