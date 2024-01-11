import { BrowserRouter, Routes, Route } from "react-router-dom";

import Employee from "./components/Employee";
import viewEmployee from "./components/viewEmployee";
import AddEmployee from "./components/AddEmployee";
import Banks from "./components/Banks";
import AddBank from "./components/AddBank";
import Logout from "./components/Logout";
import Login from "./components/Login";
import Layout from "./components/Layout";
import updateEmployee from "./components/UpdateEmployee";



import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import 'bootstrap/dist/js/bootstrap.min';


const App = () => {

  const websiteName = 'Gestion des Employés';

  const websiteLinks = {
    employees: '/employees',
    viewemployee:'/employee/:id',
    addemployee: '/addemployee',
    banks: '/banks',
    addbank: '/addbank',
    login: '/login',
    logout: '/logout',
    updateEmployee: '/updateEmployee/:id'
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout title={websiteName} links={websiteLinks} />}>
            <Route path={websiteLinks.employees} element={<Employee links={websiteLinks} />} />
            <Route path={websiteLinks.login} element={<Employee links={websiteLinks} />} />
            <Route path={websiteLinks.addemployee} element={<AddEmployee links={websiteLinks} />} />
            <Route path={websiteLinks.banks} element={<Banks links={websiteLinks} />} />
            <Route path={websiteLinks.addbank} element={<AddBank links={websiteLinks} />} />
            <Route path={websiteLinks.logout} element={<Logout links={websiteLinks} />} />
            <Route path={websiteLinks.viewemployee} Component={viewEmployee} />
            <Route path={websiteLinks.updateEmployee} Component={updateEmployee}/>
          </Route>
          <Route index element={<Login />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}
 
export default App;