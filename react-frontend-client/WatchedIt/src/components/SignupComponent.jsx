import { useState } from "react";
import { signup } from "../api/auth";
import { useNavigate } from "react-router-dom";

function SignupComponent() {
    const navigate = useNavigate();

    const [form, setForm] = useState({
        email: "",
        password: "",
        displayname: ""
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await signup(form);

        if (res?.message) {
            alert(res.message);
            return;
        }

        navigate("/");
    };

     return (
        <form onSubmit={handleSubmit}>
            <h2>Sign Up</h2>

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

            <input
                name="displayname"
                value={form.displayname}
                placeholder="Display Name"
                onChange={handleChange}
            />

            <button type="submit">Sign Up</button>
        </form>
    );
}

export default SignupComponent;