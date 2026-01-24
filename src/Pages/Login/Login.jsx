import { useForm } from "react-hook-form";
import registerImg from "../../assets/register.jpg";
import { Link } from "react-router";
import SocialLogin from "../../CustomItems/SocialLogin";

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    refetch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="flex justify-center items-center bg-secondary">
      <div className="flex flex-col-reverse lg:flex-row justify-between items-start gap-6">
        {/* left */}
        <div className="flex-1">
          <img src={registerImg} alt="" />
        </div>

        {/* right */}
        <div
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="100"
          data-aos-duration="1000"
          className="flex-1 p-6 lg:py-20"
        >
          <h2 className="text-3xl lg:text-4xl font-bold  py-6">Welcome Back</h2>
          <p className="text-transparent bg-linear-to-r from-primary to-accent bg-clip-text">
            Login With FLWR
          </p>

          {/* Form */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4 bg-transparent pt-10"
          >
            {/* Email */}
            <input
              type="email"
              placeholder="Email Address"
              className="input input-bordered bg-transparent border-0 border-b-2  rounded-0 w-full"
              {...register("email", { required: true })}
            />
            {errors.email?.type === "required" && (
              <p
                role="alert"
                className=" font-semibold px-2 text-[14px] text-red-500"
              >
                Email is required
              </p>
            )}

            {/* Password */}
            <input
              type="password"
              placeholder="Password"
              className="input input-bordered bg-transparent border-0 border-b-2  rounded-0 w-full"
              {...register("password", {
                required: true,
                minLength: 6,
                pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
              })}
            />
            {errors.password?.type === "required" && (
              <p
                role="alert"
                className=" font-semibold px-2 text-[14px] text-red-500"
              >
                Password is required
              </p>
            )}

            {errors.password?.type === "minLength" && (
              <p
                role="alert"
                className=" font-semibold px-2 text-[14px] text-red-500"
              >
                Password should have 6 digits or more
              </p>
            )}

            {errors.password?.type === "pattern" && (
              <p
                role="alert"
                className=" font-semibold px-2 text-[14px] text-red-500"
              >
                Password must have 1 uppercase, 1 lowercase and 1 special
                character.
              </p>
            )}

            {/* Login Button */}
            <button
              type="submit"
              className="btn btn-block mt-4 btn-primary font-bold shadow-2xl shadow-primary border-0  text-white "
            >
              Login Now
            </button>
          </form>

          {/* Already have account */}
          <p className="mt-6 text-sm text-center">
            Don't have any account?{" "}
            <Link
              to="/register"
              className="inline text-primary cursor-pointer hover:underline"
            >
              Register
            </Link>
          </p>

          {/* Divider */}
          <div className="divider">OR</div>

          {/* Google Login */}
          <SocialLogin></SocialLogin>
        </div>
      </div>
    </div>
  );
};

export default Login;
