import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from 'react-router-dom';

const PublicLayout = () => {
	return (
		<>
			<Navbar />
      <main>
        <Outlet /> {/* Renderizza le pagine */}
      </main>
			<Footer />
		</>
	);
};

export default PublicLayout;
