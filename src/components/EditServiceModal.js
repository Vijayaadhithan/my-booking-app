import React, { useState } from "react";
import axios from "axios";
import "./../styles/EditServiceModal.css";

const EditServiceModal = ({ service, onClose, onEdit }) => {
  const [name, setName] = useState(service.name);
  const [price, setPrice] = useState(service.price);
  const [description, setDescription] = useState(service.description);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`/api/provider/services/${service.id}/`, {
        name,
        price,
        description,
      });
      onEdit(response.data);
      onClose();
    } catch (error) {
      console.error("Failed to edit service", error);
    }
  };

  return (
    <div className="edit-service-modal">
      <form onSubmit={handleSubmit}>
        <h2>Edit Service</h2>
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
        <button type="submit">Save Changes</button>
        <button type="button" onClick={onClose}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default EditServiceModal;
