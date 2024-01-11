
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const updateEmployee = () => {
    const { id } = useParams();
  
    const [employeeData, setEmployeeData] = useState({
      matricule: '',
      firstName: '',
      lastName: '',
      nationality: '',
      birthDay: '',
      address: '',
      tel: '',
      cin: '',
      sexe: '',
      pays: '',
      status: '',
      urgenceId: '',
      jobId: '',
      bankId: '',
      userId: '',
    });
  
    useEffect(() => {
      const fetchEmployeeData = async () => {
        try {
          const response = await fetch(`http://localhost:8081/api/employee/${id}`);
          if (response.ok) {
            const data = await response.json();
            setEmployeeData(data);

          } else {
            console.error('Failed to fetch employee data:', response.statusText);
          }
        } catch (error) {
          console.error('Error fetching employee data:', error);
        }
      };
  
      fetchEmployeeData();
    }, [id]);
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setEmployeeData({ ...employeeData, [name]: value });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try  {
        const response = await fetch(`http://localhost:8081/api/employee/${id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(employeeData),
        });
  
        if (response.ok) {
            window.location.href = "http://localhost:5173/employees";
        } else {
          console.error('Failed to update employee:', response.statusText);
        }
      } catch (error) {
        console.error('Error updating employee:', error);
      }
    };
  
    return (
      <>
        <div>
          <h2 className='text-center p-4'>Modifier un employé</h2>
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
              Prénom
            </label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              name="firstName"
              value={employeeData.firstName}
              onChange={handleChange}
            />
          </div>
  
         
          <div className="mb-3">
            <label htmlFor="lastName" className="form-label">
              Nom
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
              Nationalité
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
            <label htmlFor="tel" className="form-label">
            tel
            </label>
            <input
              type="text"
              className="form-control"
              id="tel"
              name="tel"
              value={employeeData.tel}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="cin" className="form-label">
            cin
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
            pays
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
            <label htmlFor="job" className="form-label">
            job
            </label>
            <input
              type="text"
              className="form-control"
              id="job"
              name="job"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="urgence" className="form-label">
            urgence
            </label>
            <input
              type="text"
              className="form-control"
              id="urgence"
              name="urgence"
              onChange={handleChange}
            />
          </div>
          
          <div className="mb-3">
            <label htmlFor="user" className="form-label">
            user
            </label>
            <input
              type="text"
              className="form-control"
              id="user"
              name="user"
              onChange={handleChange}
            />
          </div>
  
        
  
          
  
          <div className="mb-3">
            <button type="submit" className="btn btn-primary mb-3">
              Modifier
            </button>
          </div>
        </form>
      </>
    );
  };
  
  export default updateEmployee;
  