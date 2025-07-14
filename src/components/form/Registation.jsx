import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Register = () => {
  const { register: registerInput, handleSubmit } = useForm();
  const { register: registerUser } = useAuth();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      console.log(data);
      await registerUser(data);
      alert("Registered successfully!");
      navigate("/login");
    } catch (err) {
      console.error("Registration failed:", err);
      alert("Registration failed");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded">
      <h2 className="text-xl font-bold mb-4">Register</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <input
          {...registerInput("name")}
          type="text"
          placeholder="Name"
          className="w-full p-2 border rounded"
        />
        <input
          {...registerInput("email")}
          type="email"
          placeholder="Email"
          className="w-full p-2 border rounded"
        />
        <input
          {...registerInput("password")}
          type="password"
          placeholder="Password"
          className="w-full p-2 border rounded"
        />
        <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
          Register
        </button>
      </form>

      {/* ✅ Already have an account link */}
      <p className="text-sm mt-4 text-center">
        Already have an account?{" "}
        <Link to="/login" className="text-blue-600 hover:underline">
          Click here
        </Link>
      </p>
    </div>
  );
};

export default Register;
