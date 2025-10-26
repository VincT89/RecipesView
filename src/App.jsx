import { Routes, Route } from "react-router-dom";
import PublicLayout from "./layout/PublicLayout";
import HomePage from "./pages/Homepage";
import LoginPage from "./pages/LoginPage";
import RecipesList from "./pages/RecipesList";
import SearchInput from "./pages/SearchInput";
import ProfilePage from "./pages/ProfilePage";
import ProtectedRoute from "./components/auth/ProtectedRoute";

function App() {
  return (
    <Routes>
      <Route path="/" element={<PublicLayout />}>
        <Route index element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="dashboard/ricette" element={<ProtectedRoute><RecipesList /></ProtectedRoute>} />
        <Route path="dashboard/profilo" element={<ProtectedRoute><ProfilePage /></ProtectedRoute>} />
        <Route path="searchInput" element={<ProtectedRoute><SearchInput /></ProtectedRoute>} />
      </Route>
    </Routes>
  );
}

export default App;
