import { Routes, Route } from "react-router-dom";
import { Card } from "./components/Card";
import ProfilePage from "./pages/ProfilePage"; 
import ProtectedRoute from "./components/auth/ProtectedRoute";


function App() {

  return (
    <Routes>
         <Route path="/" element={<Card  image='https://cdn.dummyjson.com/recipe-images/1.webp' name='pizza' description='loremiopuoihl'></Card>} />
         {/*<Route path="/login" element={<LoginPage />} />
        <Route path="/dashboardRicette" element={<RecipesViewPage />} /> */}
        <Route path="/dashboardProfilo" element={<ProtectedRoute><ProfilePage /></ProtectedRoute>} />
      </Routes>
  )
}

export default App
