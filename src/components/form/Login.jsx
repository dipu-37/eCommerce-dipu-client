import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../context/authContext";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const { login } = useAuth();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      await login(data.email, data.password);
      navigate("/"); // redirect after login
    } catch (err) {
      console.error("Login failed:", err);
      alert("Invalid credentials");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded ">
      <h2 className="text-xl font-bold mb-4">Login</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <input
          {...register("email")}
          type="email"
          placeholder="Email"
          className="w-full p-2 border rounded"
        />
        <input
          {...register("password")}
          type="password"
          placeholder="Password"
          className="w-full p-2 border rounded"
        />
        <button className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600">
          Login
        </button>
      </form>

      {/* ✅ Create an account link */}
      <p className="text-sm mt-4 text-center">
        Don't have an account?{" "}
        <Link to="/register" className="text-green-600 hover:underline">
          Create an account
        </Link>
      </p>
    </div>
  );
};

export default Login;
