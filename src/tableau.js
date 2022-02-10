import React from "react";
import FetchUserData from './apiArray.js';
import FetchUserAssignments from './apiToDo';

function Array() {

    /*USERS - take the API data */
    const[arrayToDo, setArrayToDo] = React.useState([]);

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
      setArrayToDo(arrayTemp);
    } 
    apiTakeData();
    }, []);

    /*ASSIGN USERS OR TASKS DATA - in the empty array */
    const ReturnData = (params, targetArray) => {
      let returnItem = targetArray.map((item) => {
        return (
          <div className='tbl-item'>
            {item[params]}
          </div>
        )
      }) 
      return returnItem;
    }


    /*TO DO ASSIGNMENTS - take the API data */
    const[arrayAssignments, setArrayAssignments] = React.useState([]);
    /* Second array for the click event */
    const [arrayAssignmentsFiltered, setArrayAssignmentsFiltered] = React.useState([])

    React.useEffect(() => {
    let apiAssignments = async() => {
      let data = await FetchUserAssignments();
      let arrayTempToDo = data.map((user) => {
        return {
          id: user.userId,
          taskid: user.id,
          username: user.username,
          title: user.title,
          status: user.completed === true ? "completed" : "not completed"
      }})
      setArrayAssignments(arrayTempToDo);
    } 
    apiAssignments();
    }, []);
    
    /*ONCLICK - Function onClick for the buttons */
    const [showResults, setShowResults] = React.useState(false)
    const funcOnClick = (idUser) => {
      let newArray = arrayAssignments.filter((task) => {
        if(task.id === idUser){
          return task
        }
      })

      setShowResults(true); 
      setArrayAssignmentsFiltered(newArray);
      
      return funcOnClick;
    }

    /*BUTTON put url in the button */
    const ReturnDataUrl = (paramsButton) => {
      let returnButtonUrl = arrayToDo.map((buttonUrl) => {
        return (
          <div>
            <button 
            className='tbl-item' 
            id={buttonUrl[paramsButton]}
            onClick={()=>funcOnClick(buttonUrl[paramsButton])}
            >
              Look up
            </button>
          </div>
        )
      }) 
      return returnButtonUrl;
    }
    
    /* RETURN */
    return (
      <div>
          {/* ARRAY */}
          <div className="array">
            {/* Name */}
            <div className="tbl-name tbl-bl">
              <h2>Name</h2>
              {ReturnData('name', arrayToDo)}
            </div>

            {/* User Name */}
            <div className="tbl-usern tbl-bl">
              <h2>User Name</h2>
              {ReturnData('username', arrayToDo)}
            </div>

            {/* Email */}
            <div className="tbl-email tbl-bl">
              <h2>Email</h2>
              {ReturnData('email', arrayToDo)}
            </div>

            {/* City */}
            <div className="tbl-city tbl-bl">
              <h2>City</h2>
              {ReturnData('city', arrayToDo)}
            </div>

            {/* Button */}
            <div className="tbl-button tbl-bl">
              <h2>Assignments</h2>
              {ReturnDataUrl('id')}
            </div>

          </div>

          {/* ON CLICK */}
          <div className="on-click">
            <div className="array-onClick">
              <div>
                <h3>ID</h3>
                {showResults ? ReturnData('id', arrayAssignmentsFiltered) : null}
              </div>
              <div>
                <h3>Title</h3>
                {showResults ? ReturnData('title', arrayAssignmentsFiltered) : null}
              </div>
              <div>
                <h3>Status</h3>
                {showResults ? ReturnData('status', arrayAssignmentsFiltered) : null}
              </div>
            </div>
          </div>
      </div>
    );
}

export default Array;