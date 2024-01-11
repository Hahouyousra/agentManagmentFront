import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';

const Banks = ({ links }) => {
  const [banks, setBanks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8081/api/bank/all');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setBanks(data);
      } catch (error) {
        console.error('Error fetching bank data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array to run the effect only once when the component mounts

  const deleteBank = async (id) => {
    try {
      const response = await fetch(`http://localhost:8081/api/bank/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          // Add any additional headers if needed
        },
        // You can add a body here if your API expects one for DELETE requests
        // body: JSON.stringify({}),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      // Update the state to reflect the changes after successful deletion
      setBanks((prevBanks) => prevBanks.filter((bank) => bank.bankId !== id));
    } catch (error) {
      console.error('Error deleting bank:', error);
      // Handle errors here
    }
  };

  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Les Banques</h1>
        <div className="btn-toolbar mb-2 mb-md-0">
          <Link
            type="button"
            className="btn btn-sm btn-outline-secondary d-flex align-items-center gap-1"
            to={links.addbank}
          >
            <svg className="bi">
              <use xlinkHref="#plus-circle" />
            </svg>
            Ajouter une banque
          </Link>
        </div>
      </div>
      <div className="table-responsive">
        <table className="table table-striped table-sm">
          <thead className="table-secondary">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nom</th>
              <th scope="col">Adresse</th>
              <th scope="col">RIB</th>
              <th scope="col">Ville</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {banks.map((bank) => (
              <tr key={bank.bankId}>
                <td>{bank.bankId}</td>
                <td>{bank.nom}</td>
                <td>{bank.address}</td>
                <td>{bank.rib}</td>
                <td>{bank.ville}</td>
                <td>
                  <Link onClick={() => deleteBank(bank.bankId)}>
                    <svg className="bi">
                      <use xlinkHref="#delete" />
                    </svg>
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

export default Banks;
