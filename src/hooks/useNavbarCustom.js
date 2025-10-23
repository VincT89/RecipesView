import { useLocation } from "react-router-dom";
import heroImage from "../assets/images/heroImage.jpg";
import login from "../assets/images/login.jpg";
import dashboardRicette from "../assets/images/dashboardRicette.jpg";
import dashboardProfile from "../assets/images/dashboardProfile.jpg";

const navbarCustom = () => {
	// useLocation di react-router-dom per sapere in quale pagina sono
	const location = useLocation();

	// personalizza l'immagine e il testo in base alla pagina
	switch (location.pathname) {
		case "/":
			return {
				image: heroImage,
				title: "Cucina con Passione, Gusta con Amore",
				paragraph:
					"Scopri ricette semplici e deliziose per ogni occasione, create per soddisfare ogni palato.",
			};
		case "/login":
			return {
				image: login,
				title: "Cominciare a cucinare!!",
				paragraph:
					"Entra nel tuo account per accedere alla vasta raccolta di ricette",
			};
		case "/dashboard/ricette":
			return {
				image: dashboardRicette,
				title: "Esplora il Mondo delle Ricette",
				paragraph:
					"Scopri una vasta collezione di piatti per ogni occasione. Ogni ricetta è pensata per soddisfare ogni gusto.",
			};
		case "/dashboardProfilo":
			return {
				image: dashboardProfile,
				title: "Benvenuto nel Tuo Profilo",
				paragraph: "Qui puoi gestire le tue informazioni.",
			};
		case "/searchRecipes":
			return {
				image: dashboardRicette,
				title: "Cerca Ricette",
				paragraph: "Trova le ricette che meglio si adattano ai tuoi gusti.",
			};
		default:
			return {
				image: heroImage,
				title: "Cucina con Passione, Gusta con Amore",
				paragraph:
					"Scopri ricette semplici e deliziose per ogni occasione, create per soddisfare ogni palato.",
			};
	}
};

export default navbarCustom;