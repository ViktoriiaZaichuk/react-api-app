import React from "react";
import FetchUserData from './apiArray.js';


function ArrayUserData(props) {
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
    

    /*ONCLICK - Function onClick for the buttons */    
    const funcOnClick = (idUser) => {
      console.log(props.arrayAssignments)
      let newArray = props.arrayAssignments.filter((task) => {
        if(task.userId === idUser){
          return task;
        }
      })
      props.setArrayAssignmentsFiltered(newArray);
      props.setGoBack(!props.goBack);
    } 


    /*BUTTON put url in the button */
    const ReturnDataUrl = (paramsButton) => {
      let returnButtonUrl = props.arrayUsers.map((buttonUrl) => {
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
              {ReturnData('name', props.arrayUsers)}
            </div>

            {/* User Name */}
            <div className="tbl-usern tbl-bl">
              <h2>User Name</h2>
              {ReturnData('username', props.arrayUsers)}
            </div>

            {/* Email */}
            <div className="tbl-email tbl-bl">
              <h2>Email</h2>
              {ReturnData('email', props.arrayUsers)}
            </div>

            {/* City */}
            <div className="tbl-city tbl-bl">
              <h2>City</h2>
              {ReturnData('city', props.arrayUsers)}
            </div>

            {/* Button */}
            <div className="tbl-button tbl-bl">
              <h2>Assignments</h2>
              {ReturnDataUrl('id')}
            </div>

          </div>
      </div>
    );
}

export default ArrayUserData;