import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const { signup } = useAuth(); // ✅ use signup from context
  const [form, setForm] = useState({
    username: "",
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    gender: "",
  });
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
      await signup(
        form.email,
        form.username,
        form.firstName,
        form.lastName,
        form.password,
        form.gender
      );
      alert("Signup successful!");
      navigate("/login");
    } catch (err) {
      setError("Signup failed — please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-zinc-900 p-8 rounded-xl w-[90%] max-w-md border border-zinc-800">
      <h2 className="text-2xl font-bold mb-6 text-center">Create Account ✨</h2>
      {error && <p className="text-red-500 text-center mb-4">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="username"
          placeholder="Username"
          className="w-full p-3 rounded bg-zinc-800"
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full p-3 rounded bg-zinc-800"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          className="w-full p-3 rounded bg-zinc-800"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          className="w-full p-3 rounded bg-zinc-800"
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full p-3 rounded bg-zinc-800"
          onChange={handleChange}
          required
        />
        <select
          name="gender"
          className="w-full p-3 rounded bg-zinc-800"
          onChange={handleChange}
          required
        >
          <option value="">Select Gender</option>
          <option value="male">Male ♂️</option>
          <option value="female">Female ♀️</option>
          <option value="other">Other 🧬</option>
        </select>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 rounded transition"
        >
          {loading ? "Signing up..." : "Sign Up"}
        </button>
      </form>

      <p className="text-gray-400 text-center mt-4">
        Already have an account?{" "}
        <span
          className="text-indigo-400 cursor-pointer"
          onClick={() => navigate("/login")}
        >
          Login
        </span>
      </p>
    </div>
  );
};

export default Signup;
