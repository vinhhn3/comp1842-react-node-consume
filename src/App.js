import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import CategoriesList from "./CategoriesList";
import CreateCategory from "./CreateCategory";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/categories" element={<CategoriesList />} />
        <Route path="/create-category" element={<CreateCategory />} />
      </Routes>
    </Router>
  );
}

export default App;
