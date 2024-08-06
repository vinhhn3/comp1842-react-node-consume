// src/CreateCategory.js
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateCategory() {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("x-auth-token");
      await axios.post(
        "http://localhost:3000/categories",
        { name },
        {
          headers: {
            "x-auth-token": token,
          },
        }
      );
      navigate("/categories");
    } catch (error) {
      alert("Failed to create category");
    }
  };

  return (
    <div>
      <h1>Create Category</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Category Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Create Category</button>
      </form>
    </div>
  );
}

export default CreateCategory;
