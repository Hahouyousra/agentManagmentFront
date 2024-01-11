import React, { useState } from 'react';

const AddBank = () => {
  const [formData, setFormData] = useState({
    nom: '',
    address: '',
    rib: '',
    ville: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('http://localhost:8081/api/bank', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Add any additional headers if needed
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        window.location.href = "http://localhost:5173/banks";

      })
      .catch((error) => {
        console.error('Error:', error);
        // Handle errors here
      });
  };

  return (
    <>
      <div>
        <h2 className='text-center p-4'>Ajouter une banque</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput3" className="form-label">
            Nom
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput3"
            name="nom"
            value={formData.nom}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput4" className="form-label">
            Adresse
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput4"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput5" className="form-label">
            RIB
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput5"
            name="rib"
            value={formData.rib}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput6" className="form-label">
            Ville
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput6"
            name="ville"
            value={formData.ville}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <button type="submit" className="btn btn-primary mb-3">
            Ajouter
          </button>
        </div>
      </form>
    </>
  );
}

export default AddBank;
