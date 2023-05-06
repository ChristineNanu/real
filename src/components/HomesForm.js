//add homes form

import React, { useState } from "react";
//import { useHistory } from "react-router";

function HomesForm({ onAddHome }) {
  //const history = useHistory();
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    location: "",
    bedrooms: "",
    bathrooms: "",
    livingroom: "",
    images: [],
    status: "",
  });

  function handleSubmitForm(event) {
    event.preventDefault();
    // TODO: Send form data to server

    const homesData = {
      title: formData.title,
      category: formData.category,
      location: formData.location,
      bedroom: formData.bedrooms,
      bathroom: formData.bathrooms,
      livingroom: formData.livingroom,
      images: formData.images,
      status: formData.status,
    };
    setFormData({
      title: "",
      category: "",
      location: "",
      bedroom: "",
      bathroom: "",
      livingroom: "",
      images: "",
      status: "",
    });
    // // navigate to view submitted form
    // history.push("/submitted-form");

    fetch("http://localhost:4300/homes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(homesData),
    })
      .then((r) => r.json())
      // call the onAddHome prop with the newHome
      .then((newHome) => onAddHome(newHome));
  }

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    const newValue = type === "checkbox" ? checked : value;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: newValue,
    }));
  }

  return (
    <div id="form-container">
      <form id="form" onSubmit={handleSubmitForm}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="category">Category:</label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
          >
            <option value="">--Please choose an option--</option>
            <option value="rental">Rent</option>
            <option value="sale">Sale</option>
          </select>
        </div>
        <div>
          <label htmlFor="location">Location:</label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="bedroom">Bedroom:</label>
          <input
            type="text"
            id="bedroom"
            name="bedroom"
            value={formData.bedrooms}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="bathroom">Bathroom:</label>
          <input
            type="text"
            id="bathroom"
            name="bathroom"
            value={formData.bathrooms}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="livingroom">Living Room:</label>
          <input
            type="checkbox"
            id="livingroom"
            name="livingroom"
            checked={formData.livingroom}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="images">Images:</label>
          <input
            type="text"
            id="images"
            name="images"
            value={formData.images}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="status">Status:</label>
          <select
            id="status"
            name="status"
            value={formData.status}
            onChange={handleChange}
          >
            <option value="">--Please choose an option--</option>
            <option value="Available">Available</option>
            <option value="Unavailable">Unavailable</option>
          </select>
        </div>
        <button type="submit">Add Home</button>
      </form>
    </div>
  );
}

export default HomesForm;