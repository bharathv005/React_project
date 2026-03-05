import React, { useState } from "react";
import {z} from "zod";
const loginSchema = z.object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters long")
});
const Login = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const [errors, setErrors] = useState({});

    const changeHandle = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        const result = loginSchema.safeParse(formData);
        if (!result.success) {
            const errorField = result.error.flatten().fieldErrors;
            setErrors(errorField);
            return;
        }
        setErrors({});
        // TODO: authentication logic
        console.log("Login successful", formData);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <form
                onSubmit={handleSubmit}
                className="bg-white p-8 rounded-lg shadow-md flex flex-col gap-5 w-full max-w-sm" 
            >
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="border px-4 py-2 rounded-lg"
                    value={formData.email}
                    onChange={changeHandle}
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email[0]}</p>}
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="border px-4 py-2 rounded-lg"
                    value={formData.password}
                    onChange={changeHandle}
                />
                {errors.password && <p className="text-red-500 text-sm">{errors.password[0]}</p>}
                <button className="bg-blue-500 text-white px-6 py-2 rounded-lg">
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;