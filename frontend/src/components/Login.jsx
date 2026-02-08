import axios from "axios";
import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    const res = await axios.post("http://localhost:5000/api/auth/login", { email, password });
    localStorage.setItem("token", res.data.token);
    alert("Login successful");
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Login</h2>

      <input className="border p-2 w-full mb-3"
        placeholder="Email"
        onChange={e => setEmail(e.target.value)}
      />

      <input className="border p-2 w-full mb-3"
        type="password"
        placeholder="Password"
        onChange={e => setPassword(e.target.value)}
      />

      <button onClick={login} className="bg-green-500 text-white px-4 py-2 w-full">
        Login
      </button>
    </div>
  );
}

export default Login;
