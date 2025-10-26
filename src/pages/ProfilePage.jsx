import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProfile } from "../store/features/profileSlice";
import Button from "../components/Button";

const ProfilePage = () => {
	const dispatch = useDispatch();
	const accessToken = useSelector((state) => state.auth.accessToken); // Recuperiamo il token di accesso dallo stato Redux

	const [form, setForm] = useState({
		// Stato locale per il form del profilo
		firstName: "",
		lastName: "",
		maidenName: "",
		age: "",
		gender: "",
		email: "",
		image: "",
	});

	useEffect(() => {
		if (!accessToken) return; // Se non c'è il token, non facciamo nulla

		const fetchUserProfile = async () => {
			try {
				const response = await fetch("https://dummyjson.com/auth/me", {
					method: "GET",
					headers: {
						Authorization: `Bearer ${accessToken}`,
					},
				});

				if (response.ok) {
					const data = await response.json();
					dispatch(setProfile(data)); // Salviamo il profilo nel Redux store
					setForm({
						// Popoliamo il form con i dati ricevuti
						firstName: data.firstName || "", // data proviene dall'API
						lastName: data.lastName || "",
						maidenName: data.maidenName || "",
						age: data.age || "",
						gender: data.gender || "",
						email: data.email || "",
						image: data.image || "",
					});
				}
			} catch (error) {
				console.log("Errore nel recupero dei dati", error);
			}
		};

		fetchUserProfile();
	}, [accessToken, dispatch]);

	const handleChange = (event) => {
		const name = event.target.name;
		const value = event.target.value;
		setForm((form) => {
			return {
				...form,
				[name]: value,
			};
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		alert("Dati inviati con successo"); //simuliamo l'invio dei dati quando l'utente preme il pulsante Aggiorna
	};

	return (
		<>
			<div className="flex flex-col justify-center items-center p-6 bg-gray-100 min-h-screen">
				<div className="flex justify-center w-full mb-6">
					<h1 className="text-3xl font-semibold mb-2 text-center text-buttonHover-800">
						Profilo Utente
					</h1>
				</div>

				<form
					onSubmit={handleSubmit}
					className="flex flex-col gap-5 max-w-2xl w-full bg-white p-5 rounded shadow-md"
				>
					<div>
						<label
							htmlFor="image"
							className="block mb-1 font-medium text-gray-700"
						>
							Foto Profilo
						</label>
						<div>
							<img
								src={form.image}
								alt="Foto Profilo"
								className="w-20 h-20 object-cover rounded-full"
							/>
						</div>
					</div>
					<div className="flex-1">
						<label
							htmlFor="firstName"
							className="block mb-1 font-medium text-gray-700"
						>
							First Name
						</label>
						<div>
							<input
								type="text"
								id="firstName"
								name="firstName"
								onChange={handleChange}
								value={form.firstName}
								className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-1 focus:ring-buttonHover-800"
							/>
						</div>
					</div>
					<div className="flex-1">
						<label
							htmlFor="lastName"
							className="block mb-1 font-medium text-gray-700"
						>
							Last Name
						</label>
						<div>
							<input
								type="text"
								id="lastName"
								name="lastName"
								onChange={handleChange}
								value={form.lastName}
								className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-1 focus:ring-buttonHover-800"
							/>
						</div>
					</div>
					<div className="flex-1">
						<label
							htmlFor="maidenName"
							className="block mb-1 font-medium text-gray-700"
						>
							Maiden Name
						</label>
						<div>
							<input
								type="text"
								id="maidenName"
								name="maidenName"
								onChange={handleChange}
								value={form.maidenName}
								className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-1 focus:ring-buttonHover-800"
							/>
						</div>
					</div>
					<div className="flex-1">
						<label
							htmlFor="age"
							className="block mb-1 font-medium text-gray-700"
						>
							Age
						</label>
						<div>
							<input
								type="number"
								id="age"
								name="age"
								onChange={handleChange}
								value={form.age}
								className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-1 focus:ring-buttonHover-800"
							/>
						</div>
					</div>
					<div className="flex-1">
						<label
							htmlFor="gender"
							className="block mb-1 font-medium text-gray-700"
						>
							Gender
						</label>
						<div>
							<input
								type="text"
								id="gender"
								name="gender"
								onChange={handleChange}
								value={form.gender}
								className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-1 focus:ring-buttonHover-800"
							/>
						</div>
					</div>
					<div className="flex-1">
						<label
							htmlFor="email"
							className="block mb-1 font-medium text-gray-700"
						>
							Email
						</label>
						<div>
							<input
								type="email"
								id="email"
								name="email"
								onChange={handleChange}
								value={form.email}
								className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-1 focus:ring-buttonHover-800"
							/>
						</div>
					</div>

					<div className="flex justify-center">
						<Button type="submit">Aggiorna</Button>
					</div>
				</form>
			</div>
		</>
	);
};

export default ProfilePage;
