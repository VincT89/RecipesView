import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRecipes } from "../store/features/recipesSlice";
import { Link } from "react-router-dom";
import Card from "../components/Card";

const RecipesList = () => {
	const dispatch = useDispatch();
	const { items, status, error } = useSelector((state) => state.recipes);

	const [limit, setLimit] = useState(12);
	const [expandedId, setExpandedId] = useState(null);

	useEffect(() => {
		dispatch(fetchRecipes(limit));
	}, [limit, dispatch]);

	const toggleExpand = (id) => {
		setExpandedId(expandedId === id ? null : id);
	};

	if (status === "loading")
		return <p style={{ padding: "2rem" }}>Caricamento ricette...</p>;
	if (status === "failed")
		return <p style={{ padding: "2rem", color: "red" }}>Errore: {error}</p>;

	return (
		<>
			{/* Input per modificare il numero di ricette */}
			<div className="flex items-center justify-between p-4">
				<div>
					<label htmlFor="limit">Numero di ricette: </label>
					<input
						id="limit"
						type="number"
						value={limit}
						min={1}
						max={50}
						onChange={(e) => setLimit(Number(e.target.value))}
						className="ml-2 px-2 py-1 rounded outline-none"
						style={{
							border: "2px solid var(--color-button-500)",
							borderRadius: "8px",
						}}
					/>
				</div>

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
				{items.map((recipe) => (
					<Card
						key={recipe.id}
						recipe={recipe}
						isExpanded={expandedId === recipe.id}
						onToggle={toggleExpand}
					/>
				))}
			</div>
		</>
	);
};

export default RecipesList;
