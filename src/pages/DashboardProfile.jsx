import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { setUserProfile } from "../store/features/profileSlice";

const DashboardProfile = () => {
	const dispatch = useDispatch();
	const accessToken = useSelector((state) => state.auth.accessToken); // Prendiamo il token di accesso dallo stato auth
	const user = useSelector((state) => state.profile.user); // Prendiamo i dati del profilo utente dallo stato profile cioe lo slice creato

	useEffect(() => {
		if (!accessToken) return; // Se non c'è il token, non fare nulla

		const fetchUserProfile = async () => {
			try {
				const response = await fetch("https://dummyjson.com/auth/me", {
					method: "GET",
					headers: {
						Authorization: `Bearer ${accessToken}`,
						"Content-Type": "application/json",
					},
				});
        // Controlla se la risposta è andata a buon fine
				if (!response.ok) {
					throw new Error("Errore nel recupero del profilo");
				}

				const data = await response.json();
				dispatch(setUserProfile(data)); // Aggiorna lo stato del profilo con i dati ricevuti
			} catch (error) {
				console.error("Errore nella fetch:", error);
				setError("Impossibile caricare i dati del profilo. Riprova più tardi.");
			}
		};

		fetchUserProfile();
	}, [accessToken, dispatch]);

	// Mostra un messaggio di caricamento fino a quando l'utente non è disponibile
	if (!user) {
		return (
			<div className="flex justify-center items-center space-x-2">
				<span>Caricamento...</span>
			</div>
		);
	}

	return (
		<div className="space-y-4 p-6 max-w-xl mx-auto bg-white rounded-lg shadow-md">
			<div>
				<label className="block text-sm font-medium text-gray-700">
					Nome Completo
				</label>
				<div className="flex space-x-2">
					<p className="border border-gray-300 rounded px-4 py-2 w-full">
						{user.firstName} {user.lastName}
					</p>
				</div>
			</div>
			<div>
				<label className="block text-sm font-medium text-gray-700">
					Username
				</label>
				<p className="border border-gray-300 rounded px-4 py-2 w-full">
					{user.username}
				</p>
			</div>
			<div>
				<label className="block text-sm font-medium text-gray-700">Email</label>
				<p className="border border-gray-300 rounded px-4 py-2 w-full">
					{user.email}
				</p>
			</div>
			<div>
				<label className="block text-sm font-medium text-gray-700">
					Telefono
				</label>
				<p className="border border-gray-300 rounded px-4 py-2 w-full">
					{user.phone}
				</p>
			</div>
			<div>
				<label className="block text-sm font-medium text-gray-700">
					Indirizzo
				</label>
				<p className="border border-gray-300 rounded px-4 py-2 w-full">
					{user.address?.address}
				</p>
			</div>
			<div>
				<label className="block text-sm font-medium text-gray-700">Città</label>
				<p className="border border-gray-300 rounded px-4 py-2 w-full">
					{user.address?.city}
				</p>
			</div>
			<div>
				<label className="block text-sm font-medium text-gray-700">Stato</label>
				<p className="border border-gray-300 rounded px-4 py-2 w-full">
					{user.address?.state}
				</p>
			</div>
			<div>
				<label className="block text-sm font-medium text-gray-700">
					Data di Nascita
				</label>
				<p className="border border-gray-300 rounded px-4 py-2 w-full">
					{user.birthDate ? new Date(user.birthDate).toLocaleDateString() : ""}
				</p>
			</div>
			<div>
				<label className="block text-sm font-medium text-gray-700">
					Genere
				</label>
				<p className="border border-gray-300 rounded px-4 py-2 w-full">
					{user.gender === "male"
						? "Maschio"
						: user.gender === "female"
						? "Femmina"
						: ""}
				</p>
			</div>
		</div>
	);
};

export default DashboardProfile;
