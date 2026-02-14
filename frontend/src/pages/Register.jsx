import { useState } from "react";

const Register = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    console.log(form);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white w-[420px] p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-[#0b1f4b] mb-6">
          Sign Up
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Username */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Username
            </label>
            <input
              name="username"
              type="text"
              className="w-full h-11 px-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0b1f4b]"
              onChange={handleChange}
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Email
            </label>
            <input
              name="email"
              type="email"
              className="w-full h-11 px-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0b1f4b]"
              onChange={handleChange}
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Password
            </label>
            <input
              name="password"
              type="password"
              className="w-full h-11 px-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0b1f4b]"
              onChange={handleChange}
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Confirm Password
            </label>
            <input
              name="confirmPassword"
              type="password"
              className="w-full h-11 px-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0b1f4b]"
              onChange={handleChange}
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full h-11 bg-[#0b1f4b] text-white rounded-lg font-medium hover:bg-[#091a3a] transition"
          >
            Register
          </button>
        </form>

        <p className="text-sm mt-6 text-[#0b1f4b] cursor-pointer">
          I already had an account.
        </p>
      </div>
    </div>
  );
};

export default Register;
