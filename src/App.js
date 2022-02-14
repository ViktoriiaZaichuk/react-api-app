import React from "react";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import FetchUserData from './apiArray.js';
import ArrayUserData from './UserData.js';
import ArrayTaskData from './usertasks.js';

function App() {
  const [arrayUsers, setArrayUsers] = React.useState([]);

  React.useEffect(() => {
    let apiTakeData = async() => {
      let data = await FetchUserData();
      let arrayTemp = data.map((user) => {
        return {
          id: user.id,
          name: user.name,
          username: user.username,
          email: user.email,
          city: user.address.city
      }})
      setArrayUsers(arrayTemp);
    }
    apiTakeData();
  }, []);

  /* RETURN */
  return (
    <BrowserRouter>
      <Routes>
        {/* USER DATA */}
        <Route path="/" element={<ArrayUserData   
            arrayUsers={arrayUsers}
          />} exact={true}>
          {/* TASK DATA */}
          </Route>
          <Route path="/usertasks/:id"  element={<ArrayTaskData 
              arrayUsers={arrayUsers}
          />}>
          </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
