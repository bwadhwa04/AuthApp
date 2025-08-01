import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import OAuth from "../components/OAuth.jsx";

export default function Signup() {
  const [formData, setFormData] = useState({});
  const [error, setError]= useState(false);
  const [loading, setLoading]=useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError(false);
      const res = await fetch("/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = await res.json();
    
    console.log(data);
    setLoading(false);
    if (data.success === false) {
      setError(true);
      return;
    }
    navigate('/sign-in');
    setError(false);
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  };
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Sign Up</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Username"
          id="username"
          className="bg-slate-100 p-3 rounded-lg"
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="Email"
          id="email"
          className="bg-slate-100 p-3 rounded-lg"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          id="password"
          className="bg-slate-100 p-3 rounded-lg"
          onChange={handleChange}
        />
        <button  disabled={loading} className="bg-slate-700 p-3 text-white rounded-lg uppercase hover:opacity-95 hover:cursor-pointer disabled:opacity-80">
          {loading?"Loading...":"Sign UP"}
        </button>
        <OAuth />
      </form>
      <div className="mt-5">
        <p>
          Have an account?
          <Link to="/sign-in">
            <span className="text-blue-600"> Sign in</span>
          </Link>
        </p>
      </div>
      <p className="text-red-700 mt-5">{error && 'Something went wrong!'}</p>
    </div>
  );
}
