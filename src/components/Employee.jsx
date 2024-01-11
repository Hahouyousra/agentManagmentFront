import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';

const Employee = ({ links }) => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8081/api/employee/all');
        const data = await response.json();
        setEmployees(data);
      } catch (error) {
        console.error('Error fetching employee data:', error);
      }
    };

    fetchData();
  }, []);

  const deleteEmployee = (id) => {
    // Show a confirmation dialog
    const confirmDelete = window.confirm('Are you sure you want to delete this employee?');

    if (confirmDelete) {
      fetch(`http://localhost:8081/api/employee/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          // Handle success or further logic here
          console.log('Employee deleted successfully');
        })
        .catch(error => {
          console.error('Error:', error);
          // Handle errors here
        });
    }
  };

  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Les Employés</h1>
        <div className="btn-toolbar mb-2 mb-md-0">
          <Link
            type="button"
            className="btn btn-sm btn-outline-secondary d-flex align-items-center gap-1"
            to={links.addemployee}
          >
            <svg className="bi">
              <use xlinkHref="#plus-circle" />
            </svg>
            Ajouter un employé
          </Link>
        </div>
      </div>
      <div className="table-responsive">
        <table className="table table-striped table-sm">
          <thead className="table-secondary">
            <tr>
           
              <th scope="col">Matricule</th>
              <th scope="col">Prénom</th>
              <th scope="col">Nom</th>
              <th scope="col">Nationalité</th>
              <th scope="col">Date de naissance</th>
              

              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.employeeId}>
                <td>{employee.matricule}</td>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.nationality}</td>
                <td>{employee.birthDay}</td>
                

                <td>

                  <Link to={links.viewemployee.replace(':id', employee.employeeId)} className="px-2">
                    <svg className="bi">
                      <use xlinkHref="#view" />
                    </svg>
                  </Link>

                  <Link className='px-2'>
                  <svg onClick={() => deleteEmployee(employee.employeeId)} className='bi'>
                  <use xlinkHref="#delete" />
                  </svg>
                  </Link>

                  <Link to={`/updateEmployee/${employee.employeeId}`} className="px-2">
        <FontAwesomeIcon icon={faPencilAlt} />
      </Link>
            
                  </td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Employee;
