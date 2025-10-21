import { useState } from "react";
import Button from "../components/Button";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../store/features/authSlice";

const LoginPage = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [form, setForm] = useState({
        username: "",
        password: ""
    });

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setForm((form) => {
            return {
                ...form,
                [name]: value
            };
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch("https://dummyjson.com/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form)
            });

            if (!response.ok) {
                throw new Error("Internal server error")
            };

            const data = await response.json();

            const { accessToken, refreshToken, ...user } = data;

            dispatch(login({ user, accessToken }));
            navigate("/dashboardProfilo");

        } catch (error) {
            console.log(error)
        };
    };

    return (
        <>
            <div className="flex flex-col justify-center items-center  min-h-auto m-30 px-4">
                <div className="mb-8 text-center">
                    <h2 className="text-3xl font-semibold mb-2">Accedi</h2>
                    <p className="text-gray-600">Inserisci le tue credenziali</p>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-10 justify-center items-center w-full">
                    <div className="w-full sm:w-1/3">
                        <label className="block mb-1 text-gray-700 text-center sm:text-left">Username</label>
                        <input
                            type="text"
                            name="username"
                            value={form.username}
                            onChange={handleChange}
                            required
                            placeholder="Inserisci il tuo Username"
                                className="w-full px-4 py-2 border-b border-[#b6ccb2] focus:outline-none"
                        />
                    </div>

                    <div className="w-full sm:w-1/3">
                        <label className=" text-gray-700 text-center sm:text-left">Password</label>
                        <input
                            type="password"
                            name="password"
                            value={form.password}
                            onChange={handleChange}
                            required
                            placeholder="Inserisci la tua Password"
                            className="w-full px-4 py-2 border-b border-[#b6ccb2] focus:outline-none"
                        />
                    </div>

                    <div className="w-full sm:w-auto text-center">
                        <Button type="submit" className="w-[200px]">
                            Accedi
                        </Button>
                    </div>
                </form>
            </div>

        </>
    )
}

export default LoginPage;
