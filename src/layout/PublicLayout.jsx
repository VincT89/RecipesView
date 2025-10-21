import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from 'react-router-dom';

const PublicLayout = () => {
	return (
		<div className="flex flex-col min-h-screen">
			<Navbar />
      <main>
        <Outlet /> {/* Renderizza le pagine */}
      </main>
			<Footer />
		</div>
	);
};

export default PublicLayout;
