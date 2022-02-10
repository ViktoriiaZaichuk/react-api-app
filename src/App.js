import React from "react";
import logo from './logo.svg';
import './App.css';
import ArrayUserData from './UserData.js';
import ArrayTaskData from './TaskData.js';


function App() {


  /* On Click */
/*   const [showResults, setShowResults] = React.useState(false)
  const funcOnClick = (idUser) => {
    let newArray = arrayAssignments.filter((task) => {
      if(task.id === idUser){
        return task
      }
    })

    setShowResults(true); 
    setArrayAssignmentsFiltered(newArray);
    
    return funcOnClick;
  } */

  /* Filter Array */
/*   const [arrayAssignmentsFiltered, setArrayAssignmentsFiltered] = React.useState([])

 */
/*   const [UserId, setUserId] = React.useState(0); */
    const [showResults, setShowResults] = React.useState(false)
    const [arrayAssignments, setArrayAssignments] = React.useState([])
    const [arrayAssignmentsFiltered, setArrayAssignmentsFiltered] = React.useState([])

  return (
    <div>

      <div>
        <ArrayUserData 
          setShowResults={setShowResults} 
          setArrayAssignmentsFiltered={setArrayAssignmentsFiltered}
          arrayAssignments={arrayAssignments}
        />
      </div>

      <div>
        <ArrayTaskData 
          setArrayAssignments={setArrayAssignments}
          showResults={showResults}
          arrayAssignmentsFiltered={arrayAssignmentsFiltered}
        />
      </div>

    </div>
  );
}

export default App;
