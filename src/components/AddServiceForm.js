import React, { useState } from "react";
import axios from "axios";
import "./../styles/AddServiceForm.css";

const AddServiceForm = ({ onAddService }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/services/", {
        name,
        price,
        description,
      });
      onAddService(response.data);
      setName("");
      setPrice("");
      setDescription("");
    } catch (error) {
      console.error("Failed to add service", error);
    }
  };

  return (
    <form className="add-service-form" onSubmit={handleSubmit}>
      <h2>Add New Service</h2>
      <input
        type="text"
        placeholder="Service Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      ></textarea>
      <button type="submit">Add Service</button>
    </form>
  );
};

export default AddServiceForm;
