import React from "react";
import FetchUserData from './apiArray.js';
import FetchUserAssignments from './apiToDo';

function Array() {

    /*USERS - take the API data */
    const[arrayToDo, setArrayToDo] = React.useState([]);

    React.useEffect(() => {
    let apiBla = async() => {
      let data = await FetchUserData();
      /* console.log(data); */
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
    apiBla();
    }, []);


    /*ASSIGN USERS - in the empty array */
    const ReturnData = (params) => {
      let returnItem = arrayToDo.map((item) => {
        return (
          <div className='tbl-item'>
            {item[params]}
          </div>
        )
      }) 
      return returnItem;
    }


    /*TO DO - take the API data */
    const[arrayAssignments, setArrayAssignments] = React.useState([]);
    const [arrayAssignmentsFiltered, setArrayAssignmentsFiltered] = React.useState([])

    React.useEffect(() => {
    let apiAssignments = async() => {
      let data = await FetchUserAssignments();
      /* console.log(data); */
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


    /*ASSIGN TASKS - in the empty array */
    const ReturnDataAssign = (params) => {
      let returnItemTask = arrayAssignmentsFiltered.map((item) => {
        return (
          <div className='tbl-item'>
            {item[params]}
          </div>
        )
      }) 
      return returnItemTask;
    }





    /*ONCLICK - function onClick for button */
    const [showResults, setShowResults] = React.useState(false)
    const funcOnClick = (idUser) => {
/*       idUser === idTask ? setShowResults(true) : setShowResults(false) */
      console.log(idUser)
      let newArray = arrayAssignments.filter((task)=>{
        if(task.id === idUser){
          return task
        }
      })
      console.log(newArray)
      setShowResults(true) 
      setArrayAssignmentsFiltered(newArray)
      
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
            {/* {buttonUrl[paramsButton]} */} Look up
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
              {ReturnData('name')}
            </div>

            {/* User Name */}
            <div className="tbl-usern tbl-bl">
              <h2>User Name</h2>
              {ReturnData('username')}
            </div>

            {/* Email */}
            <div className="tbl-email tbl-bl">
              <h2>Email</h2>
              {ReturnData('email')}
            </div>

            {/* City */}
            <div className="tbl-city tbl-bl">
              <h2>City</h2>
              {ReturnData('city')}
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
                {showResults ? ReturnDataAssign('id') : null}
              </div>
              <div>
                <h3>Title</h3>
                {showResults ? ReturnDataAssign('title') : null}
              </div>
              <div>
                <h3>Status</h3>
                {showResults ? ReturnDataAssign('status') : null}
              </div>
            </div>
          </div>
      </div>
    );
}

export default Array;