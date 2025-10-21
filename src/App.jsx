import { Routes, Route } from "react-router-dom";
import Button from "./components/Button";
import { Card } from "./components/Card";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";

function App() {

  return (
    <Routes>
        <Route path="/" element={<Card  image='https://cdn.dummyjson.com/recipe-images/1.webp' name='pizza' description='loremiopuoihl'></Card>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboardProfilo" element={<ProfilePage />} />
        {/* 
        <Route path="/dashboardRicette" element={<RecipesViewPage />} />
         */}
      </Routes>
  )
}

export default App
