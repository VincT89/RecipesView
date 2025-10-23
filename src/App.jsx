import { Routes, Route } from "react-router-dom";
import PublicLayout from "./layout/PublicLayout";
import HomePage from "./pages/Homepage";
import LoginPage from "./pages/LoginPage";
import DashboardProfile from "./pages/DashboardProfile";
import RecipesList from "./pages/RecipesList";
import RecipesSearch from "./pages/RecipesSearch";

function App() {
  return (
    <Routes>
      <Route path="/" element={<PublicLayout />}>
        <Route index element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="dashboard/ricette" element={<RecipesList />} />
        <Route path="dashboardProfilo" element={<DashboardProfile />} />
        <Route path="searchRecipes" element={<RecipesSearch />} />
      </Route>
    </Routes>
  );
}

export default App;
