import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from 'react-router-dom';

const PublicLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 bg-gray-100 py-8 px-4 md:px-8">
        <Outlet /> {/* Renderizza le pagine */}
      </main>
      <Footer />
    </div>
  );
};

export default PublicLayout;
