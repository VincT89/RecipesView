import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRecipes } from "../store/features/recipesSlice";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import Button from "../components/Button";

// Per la paginazione optato per l'utilizzo di uno slice dell'array delle ricette, in pratica fetchiamo
// tutte le ricette una volta e poi mostriamo solo una parte dell'array in base a limit e start.

const RecipesList = () => {
	const dispatch = useDispatch();
	const { items, status, error } = useSelector((state) => state.recipes);

	const [limit, setLimit] = useState(10); // Numero di ricette per pagina 
	const [start, setStart] = useState(0); // Indice di partenza per slice
	const [expandedId, setExpandedId] = useState(null);

	useEffect(() => {
		dispatch(fetchRecipes()); // Fetch delle ricette dallo store
	}, [dispatch]);

	const toggleExpand = (id) => {
		setExpandedId(expandedId === id ? null : id);
	};

	if (status === "loading")
		return <p style={{ padding: "2rem" }}>Caricamento ricette...</p>;

	if (status === "failed")
		return <p style={{ padding: "2rem", color: "red" }}>Errore: {error}</p>;

	// Crea lo slice dell'array con il limite e il punto di partenza
	const arraySlice = items.slice(start, start + limit);

	// Funzione per andare avanti (incrementare start)
	const vaiAvanti = () => {
		if (start + limit < items.length) {
			// Verifica che ci siano altre ricette da caricare
			setStart(start + limit);
		}
	};

	// Funzione per andare indietro (decrementare start)
	const vaiIndietro = () => {
		if (start - limit >= 0) {
			// Verifica che non andiamo oltre il primo set
			setStart(start - limit);
		}
	};

	return (
		<>
			<div className="flex items-center justify-between p-4">
				<span className="p-4 font-bold">
					Pagina: {start / limit + 1} {/* Calcola il numero di pagina */}
				</span>
				<Link
					to="/searchRecipes"
					className="px-6 py-2 bg-button-500 text-buttonHoverText rounded-full font-bold hover:bg-buttonHover-500"
				>
					Cerca Ricette
				</Link>
			</div>

			{/* Griglia delle card */}
			<div
				style={{
					display: "grid",
					gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
					gap: "2rem",
					padding: "2rem",
					backgroundColor: "#f9f9f9",
				}}
			>
				{arraySlice.map((recipe) => (
					<Card
						key={recipe.id}
						recipe={recipe}
						isExpanded={expandedId === recipe.id}
						onToggle={toggleExpand}
					/>
				))}
			</div>

			{/* Paginazione */}
			<div className="flex justify-center items-center mt-4">
				<Button
					onClick={vaiIndietro}
					disabled={start === 0} // Disabilita il pulsante se siamo alla prima pagina
				>
					Precedente
				</Button>

				<Button
					onClick={vaiAvanti}
					disabled={start + limit >= items.length} // Disabilita il pulsante se siamo all'ultima pagina
				>
					Successivo
				</Button>
			</div>
		</>
	);
};

export default RecipesList;
