import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import API from "../services/Api";

function Register() {
  const navigate = useNavigate(); // ✅ hook must be here

  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const submitHandler = async (e) => {
    e.preventDefault();

    const payload = {
      fullname: {
        firstname: form.firstname,
        lastname: form.lastname,
      },
      email: form.email,
      password: form.password,
    };

    try {
      await API.post("/auth/register", payload);
      alert("Registration successful!");
      navigate("/login"); // ✅ redirect after success
    } catch (error) {
      console.error(error);
      alert("Registration failed. Please try again.");
    }
  };

  
  return (
    <div className="register-page">
      <form className="register-card" onSubmit={submitHandler}>
        <h2>Create Account</h2>

        <input
          placeholder="First Name"
          value={form.firstname}
          onChange={(e) =>
            setForm({ ...form, firstname: e.target.value })
          }
          required
        />

        <input
          placeholder="Last Name"
          value={form.lastname}
          onChange={(e) =>
            setForm({ ...form, lastname: e.target.value })
          }
        />

        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) =>
            setForm({ ...form, password: e.target.value })
          }
          required
        />

        <button type="submit">Register</button>

        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
}

export default Register;
