import React from "react";
import { 
  BrowserRouter
} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import FetchUserData from './apiArray.js';
import FetchUserAssignments from './apiToDo';
import ArrayUserData from './UserData.js';
import ArrayTaskData from './TaskData.js';


function App() {

  const [arrayAssignments, setArrayAssignments] = React.useState([])
  const [arrayAssignmentsFiltered, setArrayAssignmentsFiltered] = React.useState([])
  const [goBack, setGoBack] = React.useState(false);
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
    let apiAssignments = async() => {
      let data = await FetchUserAssignments();
      let arrayTempToDo = data.map((task) => {
          return {
              id: task.id,
              userId: task.userId,
              title: task.title,
              status: task.completed === true ? "completed" : "not completed"
          }})
          console.log(arrayTempToDo)
          setArrayAssignments(arrayTempToDo);
      } 
    apiTakeData();
    apiAssignments(); 
    }, []);

  /* Switch Visibility of components on click */
  const switchFunction = () => {
    if (goBack) {
      return(<ArrayTaskData 
        arrayUsers={arrayUsers}
        arrayAssignmentsFiltered={arrayAssignmentsFiltered}
        setArrayAssignments={setArrayAssignments}
        setGoBack={setGoBack}
        goBack={goBack}
      />)
    } else {
      return (<ArrayUserData 
        arrayUsers={arrayUsers}
        setArrayAssignmentsFiltered={setArrayAssignmentsFiltered}
        arrayAssignments={arrayAssignments}
        goBack={goBack}
        setGoBack={setGoBack}
      />)
    }
  }
  /* switchFunction(); */

  return (
    <BrowserRouter>

{/*       <div>
        <ArrayUserData 
          setShowResults={setShowResults} 
          setArrayAssignmentsFiltered={setArrayAssignmentsFiltered}
          arrayAssignments={arrayAssignments}
          goBack={goBack}
          setGoBack={setGoBack}
        />
      </div>

      <div>
        <ArrayTaskData 
          showResults={showResults}
          arrayAssignmentsFiltered={arrayAssignmentsFiltered}
          setArrayAssignments={setArrayAssignments}
          setGoBack={setGoBack}
          goBack={goBack}
        />
      </div> */}
      {switchFunction()}

    </BrowserRouter>
  );
}

export default App;
