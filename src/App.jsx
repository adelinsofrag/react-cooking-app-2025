import { BrowserRouter, Route, Routes } from "react-router";
import { HomePage } from "./components/pages/HomePage";
import { MealPage } from "./components/pages/MealPage";
import { FavoritesPage } from "./components/pages/FavoritesPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/meal/:mealId" element={<MealPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
