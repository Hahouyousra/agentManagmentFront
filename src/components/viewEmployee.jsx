import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const ViewEmployee = () => {
  const { id } = useParams(); // ID of the Employee
  const [employeeData, setEmployeeData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:8081/api/employee/${id}`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setEmployeeData(data);
      } catch (error) {
        console.error('Error fetching employee data:', error);
      }
    };

    fetchData();
  }, [id]); // Fetch data when the id changes

  if (!employeeData) {
    // Data is still being loaded
    return <p>Loading...</p>;
  }

  return (
    <>
      <div>
        <h2 className="text-center p-4">Détails de l'employé</h2>
      </div>
      <table className="table">
        <tbody>
         
          <tr>
            <th scope="row">Matricule</th>
            <td>{employeeData.matricule}</td>
          </tr>
          
          
          <tr>
            <th scope="row">Prénom</th>
            <td>{employeeData.firstName}</td>
          </tr>
          <tr>
            <th scope="row">Nom</th>
            <td>{employeeData.lastName}</td>
          </tr>
          <tr>
            <th scope="row">Nationalité</th>
            <td>{employeeData.nationality}</td>
          </tr>
          <tr>
            <th scope="row">date de naissance</th>
            <td>{employeeData.birthDay}</td>
          </tr>
          <tr>
            <th scope="row">date de naissance</th>
            <td>{employeeData.address}</td>
          </tr>
          <tr>
            <th scope="row">Adresse</th>
            <td>{employeeData.address}</td>
          </tr>
          <tr>
            <th scope="row">Telephone</th>
            <td>{employeeData.tel}</td>
          </tr>
          <tr>
            <th scope="row">CIN</th>
            <td>{employeeData.cin}</td>
          </tr>
          <tr>
            <th scope="row">Sexe</th>
            <td>{employeeData.sexe}</td>
          </tr>
          <tr>
            <th scope="row">Pays</th>
            <td>{employeeData.pays}</td>
          </tr>
          <tr>
            <th scope="row">Status</th>
            <td>{employeeData.status}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default ViewEmployee;
