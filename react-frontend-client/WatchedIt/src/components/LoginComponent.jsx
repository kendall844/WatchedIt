import { useState } from "react";
import { login } from "../api/auth";
import { useNavigate } from "react-router-dom";

function LoginComponent() {
    const navigate = useNavigate();

    const [form, setForm] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await login(form);

        if (res?.message) {
            alert(res.message);
            return;
        }

        navigate("/");
    };

    return (
        <div>
            <h2>Login</h2>

            <input
                name="email"
                value={form.email}
                placeholder="Email"
                onChange={handleChange}
            />

            <input
                name="password"
                type="password"
                value={form.password}
                placeholder="Password"
                onChange={handleChange}
            />

            <button onClick={handleSubmit}>Login</button>
        </div>
    );
}

export default LoginComponent;