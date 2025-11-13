import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SERVER_URL = "http://localhost:5000/api/auth/login"; // change if needed

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await axios.post(SERVER_URL, form, {
        withCredentials: true,
      });
      if (res.status === 200) {
        alert("Login successful!");
        navigate("/dashboard"); // or home page
      }
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full h-full flex items-center justify-center">
        <div className="px-8 py-30 rounded-xl w-full max-w-md border border-zinc-800">
      <h2 className="text-2xl font-bold mb-6 text-center">Welcome Back 👋</h2>
      {error && <p className="text-red-500 text-center mb-4">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full p-3 rounded bg-zinc-800"
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full p-3 rounded bg-zinc-800"
          onChange={handleChange}
          required
        />
        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 rounded transition"
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>

      <p className="text-gray-400 text-center mt-4">
        Don't have an account?{" "}
        <span
          className="text-indigo-400 cursor-pointer"
          onClick={() => navigate("/signup")}
        >
          Sign Up
        </span>
      </p>
    </div>
    </section>
  );
};

export default Login;
