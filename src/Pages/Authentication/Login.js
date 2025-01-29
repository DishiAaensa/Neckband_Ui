import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (credentials.username === "admin" && credentials.password === "1234") {
      localStorage.setItem("authenticated", "true");
      navigate("/home");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="login_wrapper">
      <div className="bg-video">
        <img
          src="../assets/image.jpg"
          alt="Background"
          className="object-cover w-full h-screen"
        />
        <div className="p-6 log absolute inset-0 flex justify-center items-center">
          <div className="max-w-xl mx-auto bg-white rounded-lg shadow-xl dark:bg-gray-800">
            <div className="p-6 sm:p-12">
              <h1 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">
                Login
              </h1>
              <form onSubmit={handleSubmit}>
                <label className="block text-sm">
                  <span className="text-gray-700 dark:text-gray-400">Username</span>
                  <input
                    className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                    placeholder="Enter your username"
                    type="text"
                    name="username"
                    value={credentials.username}
                    onChange={handleChange}
                  />
                </label>

                <label className="block mt-4 text-sm">
                  <span className="text-gray-700 dark:text-gray-400">Password</span>
                  <div className="flex items-center">
                    <input
                      className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                      placeholder="*************"
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={credentials.password}
                      onChange={handleChange}
                    />
                    <button
                      type="button"
                      className="px-4 py-2 bg-purple-600 text-white rounded-lg"
                      onClick={handleTogglePassword}
                    >
                      {showPassword ? (
                        <svg
                          width="20"
                          height="17"
                          fill="#ffffff"
                          className="bi bi-eye-slash-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="m10.79 12.912..." />
                        </svg>
                      ) : (
                        <svg
                          width="20"
                          height="17"
                          fill="#ffffff"
                          className="bi bi-eye-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                          <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
                        </svg>
                      )}
                    </button>
                  </div>
                </label>

                <button
                  type="submit"
                  className="block w-full px-4 py-2 mt-4 text-white bg-purple-600 rounded-lg hover:bg-purple-700"
                >
                  Log In
                </button>
              </form>

              <hr className="my-6" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
