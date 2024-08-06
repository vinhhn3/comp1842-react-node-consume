// src/CategoriesList.js
import axios from "axios";
import React, { useEffect, useState } from "react";

function CategoriesList() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const token = localStorage.getItem("x-auth-token");
        const response = await axios.get("http://localhost:3000/categories", {
          headers: {
            "x-auth-token": token,
          },
        });
        setCategories(response.data);
      } catch (error) {
        alert("Failed to fetch categories");
      }
    };

    fetchCategories();
  }, []);

  return (
    <div>
      <h1>Categories List</h1>
      <ul>
        {categories.map((category) => (
          <li key={category._id}>{category.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default CategoriesList;
