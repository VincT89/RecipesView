import { Routes, Route } from "react-router-dom";
import PublicLayout from "./layout/PublicLayout";
import HomePage from "./pages/Homepage";
import { LoginPage } from "./pages/LoginPage";
import DashboardRicette from "./pages/DashboardRicette";
import DashboardProfile from "./pages/DashboardProfile";

function App() {
  return (
    <Routes>
      <Route path="/" element={<PublicLayout />}>
        <Route index element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="dashboard/ricette" element={<DashboardRicette />} />
        <Route path="dashboard/profile" element={<DashboardProfile />} />
      </Route>
    </Routes>
  );
}

export default App;
