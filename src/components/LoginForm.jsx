// LoginForm.jsx
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import companyLogo from "../assets/companyLogo.jpg";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const onSubmit = (data) => {
    console.log(data);

    navigate("/home");
  };

  const handleForgotPassword = () => {
    alert("Password resetting link sent to your email");
  };

  return (
    <div className="right-section w-[50vh]   overflow-hidden bg-white">
      <div className="login-form  w-full max-w-md p-6 ">
        <img
        className="max-w-xs flex justify-start mb-4 "
          src={companyLogo}
          alt="Company Logo"
          
        />
        <h1 className="text-2xl font-bold mb-2 text-gray-800">Welcome Back 👋</h1>
        <p className="text-sm font-semibold text-gray-800 mb-6">
          Today is a new day. It's your day. You shape it.
          <br /> Sign in to start managing your projects.
        </p>

        <form onSubmit={handleSubmit(onSubmit)}>
          <label
            className="block mb-1 text-xs  font-bold text-gray-800"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="w-full p-2 mb-2 border border-gray-300 rounded-md text-xs bg-gray-200"
            type="email"
            placeholder="Example@email.com"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
                message: "Invalid email format",
              },
            })}
          />
          {errors.email && (
            <span className="text-red-500 text-xs">{errors.email.message}</span>
          )}

          <label
            className="block mb-1 mt-4 text-xs font-bold text-gray-800"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="w-full p-2 mb-2 border border-gray-300 rounded-md text-xs bg-gray-200"
            type="password"
            placeholder="At least 8 characters"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters",
              },
            })}
          />
          {errors.password && (
            <span className="text-red-500 text-xs">
              {errors.password.message}
            </span>
          )}

          <a
            className="text-xs text-blue-400 block mt-1 mb-2.5 text-right"
            onClick={handleForgotPassword}
          >
            Forgot Password?
          </a>

          <button className="w-full py-2 bg-blue-400 text-white rounded-md text-lg cursor-pointer text-[14px]">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}
