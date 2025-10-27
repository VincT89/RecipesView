import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/features/authSlice";
import navbarCustom from "../hooks/useNavbarCustom";
import { resetRecipes } from "../store/features/recipesSlice";
import { clearProfile } from "../store/features/profileSlice";

const Navbar = () => {
	// Dati utente
	const { user, accessToken } = useSelector((state) => state.auth);

	const dispatch = useDispatch();
	const navigate = useNavigate();

	// ottiene tutto dall'hook personalizzato
	const { image, title, paragraph } = navbarCustom();

	const handleLogout = () => {
		dispatch(logout());
		dispatch(resetRecipes());
		dispatch(clearProfile());
		navigate("/");
	};

	// appoggio per gestire la navbar dinamica
	const isLogged = user && accessToken;

	// Funzione per determinare il messaggio di benvenuto in base al genere
  const welcomeMessage = user?.gender === "male" 
    ? `Benvenuto, ${user?.username}!`
    : user?.gender === "female" 
    ? `Benvenuta, ${user?.username}!`
    : `Benvenuto, ${user?.username}!`; // caso generico, nel caso non ci fosse il dato sul genere

	return (
		<div>
		
			<nav className="bg-navbar sticky z-20 w-full top-0 left-0 px-6 py-4 shadow-md">
				<div className="max-w-screen-xl mx-auto flex justify-between items-center">
					<Link to="/" className="text-3xl font-bold text-white">
						Ricettario
					</Link>
						{/* Operatore ternario per la navbar dinamica */}
					{isLogged ? (
						<div className="flex items-center space-x-4">
							<span className="text-white font-semibold">
								{welcomeMessage}
							</span>
							<Link
								to="/dashboard/ricette"
								className="px-6 py-2 bg-button-500 text-buttonHoverText rounded-full font-bold hover:bg-buttonHover-500"
							>
								Le Ricette
							</Link>
							<Link
								to="/dashboard/profilo"
								className="px-6 py-2 bg-button-500 text-buttonHoverText rounded-full font-bold hover:bg-buttonHover-500"
							>
								Profilo
							</Link>
							<button
								onClick={handleLogout}
								className="px-4 py-2 bg-[#4A5D4B] text-white rounded-full font-bold hover:bg-red-600"
							>
								Logout
							</button>
						</div>
					) : (
						<Link
							to="/login"
							className="px-6 py-2 bg-button-500 text-buttonHoverText rounded-full font-bold hover:bg-buttonHover-500"
						>
							Login
						</Link>
					)}
				</div>
			</nav>

			<section
				className="relative w-full h-[40vh] bg-cover bg-center"
				style={{ backgroundImage: `url(${image})` }}
			>
				<div className="relative z-10 text-center text-white flex items-center justify-center h-full px-6">
					<div className="bg-gradient-to-b from-black to-transparent bg-opacity-40 p-8 rounded">
						<h1 className="text-5xl font-bold mb-6">{title}</h1>
						<p className="text-xl mb-8">{paragraph}</p>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Navbar;
