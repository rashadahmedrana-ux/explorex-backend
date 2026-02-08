import axios from "axios";
import { useState } from "react";

function Signup() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const submit = async () => {
    await axios.post("http://localhost:5000/api/auth/signup", form);
    alert("Signup successful");
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Signup</h2>

      <input className="border p-2 w-full mb-3"
        placeholder="Name"
        onChange={e => setForm({ ...form, name: e.target.value })}
      />

      <input className="border p-2 w-full mb-3"
        placeholder="Email"
        onChange={e => setForm({ ...form, email: e.target.value })}
      />

      <input className="border p-2 w-full mb-3"
        type="password"
        placeholder="Password"
        onChange={e => setForm({ ...form, password: e.target.value })}
      />

      <button onClick={submit} className="bg-blue-500 text-white px-4 py-2 w-full">
        Create Account
      </button>
    </div>
  );
}

export default Signup;
