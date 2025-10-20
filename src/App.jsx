import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboardRicette" element={<RecipesViewPage />} />
        <Route path="/dashboardProfilo" element={<ProfilePage />} />
      </Routes>
  )
}

export default App
