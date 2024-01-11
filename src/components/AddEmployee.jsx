import React, { useState } from 'react';

const AddEmployee = () => {
  const [employeeData, setEmployeeData] = useState({
    matricule: '',
    firstName: '',
    lastName: '',
    nationality: '',
    birthDay: '',
    address: '',  // Added field
    tel: '',
    cin: '',
    sexe: '',
    pays: '',
    status: '',
    urgenceId: '',  // Added field
    jobId: '',      // Added field
    bankId: '',     // Added field
    userId: '',     // Added field
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployeeData({ ...employeeData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8081/api/employee', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(employeeData),
      });

      if (response.ok) {
        window.location.href = "http://localhost:5173/employees";
        

      } else {
        console.error('Failed to add employee:', response.statusText);
      }
    } catch (error) {
      console.error('Error adding employee:', error);
    }
  };

  return (
    <>
      <div>
        <h2 className='text-center p-4'>Ajouter un employé</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="matricule" className="form-label">
            Matricule
          </label>
          <input
            type="text"
            className="form-control"
            id="matricule"
            name="matricule"
            value={employeeData.matricule}
            onChange={handleChange}
          />
        </div>
<div className="mb-3">
  <label htmlFor="tel" className="form-label">
    Téléphone
  </label>
  <input
    type="number"
    className="form-control"
    id="tel"
    name="tel"
    value={employeeData.tel}
    onChange={handleChange}
  />
</div>


<div className="mb-3">
  <label htmlFor="firstName" className="form-label">
  firstName
  </label>
  <input
    type="text"
    className="form-control"
    id="firstname"
    name="firstName"
    value={employeeData.firstName}
    onChange={handleChange}
  />
</div>


<div className="mb-3">
  <label htmlFor="lastName" className="form-label">
  lastName
  </label>
  <input
    type="text"
    className="form-control"
    id="lastName"
    name="lastName"
    value={employeeData.lastName}
    onChange={handleChange}
  />
</div>


<div className="mb-3">
  <label htmlFor="nationality" className="form-label">
  nationality
  </label>
  <input
    type="text"
    className="form-control"
    id="nationality"
    name="nationality"
    value={employeeData.nationality}
    onChange={handleChange}
  />
</div>


<div className="mb-3">
  <label htmlFor="address" className="form-label">
  address
  </label>
  <input
    type="text"
    className="form-control"
    id="address"
    name="address"
    value={employeeData.address}
    onChange={handleChange}
  />
</div>


<div className="mb-3">
  <label htmlFor="birthDay" className="form-label">
  birthDay
  </label>
  <input
    type="date"
    className="form-control"
    id="birthDay"
    name="birthDay"
    value={employeeData.birthDay}
    onChange={handleChange}
  />
</div>









<div className="mb-3">
  <label htmlFor="cin" className="form-label">
    CIN
  </label>
  <input
    type="text"
    className="form-control"
    id="cin"
    name="cin"
    value={employeeData.cin}
    onChange={handleChange}
  />
</div>
<div className="mb-3">
  <label htmlFor="sexe" className="form-label">
    Sexe
  </label>
  <select
    className="form-select"
    id="sexe"
    name="sexe"
    value={employeeData.sexe}
    onChange={handleChange}
  >
    <option value="" disabled>
      Sélectionner
    </option>
    <option value="Mâle">Mâle</option>
    <option value="Femelle">Femelle</option>
  </select>
</div>
<div className="mb-3">
  <label htmlFor="pays" className="form-label">
    Pays
  </label>
  <input
    type="text"
    className="form-control"
    id="pays"
    name="pays"
    value={employeeData.pays}
    onChange={handleChange}
  />
</div>
<div className="mb-3">
  <label htmlFor="status" className="form-label">
    Statut
  </label>
  <input
    type="text"
    className="form-control"
    id="status"
    name="status"
    value={employeeData.status}
    onChange={handleChange}
  />
</div>
<div className="mb-3">
  <label htmlFor="urgenceId" className="form-label">
    Urgence ID
  </label>
  <input
    type="text"
    className="form-control"
    id="urgenceId"
    name="urgenceId"
    value={employeeData.urgenceId}
    onChange={handleChange}
  />
</div>
<div className="mb-3">
  <label htmlFor="jobId" className="form-label">
    Job ID
  </label>
  <input
    type="text"
    className="form-control"
    id="jobId"
    name="jobId"
    value={employeeData.jobId}
    onChange={handleChange}
  />
</div>
<div className="mb-3">
  <label htmlFor="bankId" className="form-label">
    Bank ID
  </label>
  <input
    type="text"
    className="form-control"
    id="bankId"
    name="bankId"
    value={employeeData.bankId}
    onChange={handleChange}
  />
</div>
<div className="mb-3">
  <label htmlFor="userId" className="form-label">
    User ID
  </label>
  <input
    type="text"
    className="form-control"
    id="userId"
    name="userId"
    value={employeeData.userId}
    onChange={handleChange}
  />
</div>

{/* ... (other form fields) */}

<div className="mb-3">
  <button type="submit" className="btn btn-primary mb-3">
    Ajouter
  </button>
</div>
</form>
</>
);
};

export default AddEmployee;

