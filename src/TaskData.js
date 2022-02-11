import React from "react";
import FetchUserAssignments from './apiToDo';

function ArrayTaskData(props) {
        /*ASSIGN USERS OR TASKS DATA - in the empty array */
        let ReturnData = (params, targetArray) => {
            let returnItem = targetArray.map((item) => {
              return (
                <div className='tbl-item'>
                  {item[params]}
                </div>
              )
            }) 
            return returnItem;
        }    
    

        /* GO BACK BUTTON Function*/
        const funcGoBack = () => {
          props.setGoBack(!props.goBack);
        } 


        /* GET the USER NAME DATA */
        const getUserName = (tasksArray) => {
          console.log(props.arrayAssignmentsFiltered)
          let newArrayName = props.arrayUsers.filter((user) => {
            if(user.id === tasksArray[0].userId){
              return user; 
            }
          })
          console.log(props.arrayAssignmentsFiltered)
          if(newArrayName.length> 0){
            return newArrayName[0].name
          }
        }
        let actualNameUser = getUserName(props.arrayAssignmentsFiltered);

    /* RETURN */
    return (
        <div className="on-click">
            <div>
              {/* BUTTON */}
              <button onClick={funcGoBack}>Go Back</button>
              {/* USER NAME */}
              {actualNameUser}
            </div>

            {/* ARRAY */}
            <div className="array-onClick">
              <div>
                <h3>ID</h3>
                  {ReturnData('id', props.arrayAssignmentsFiltered)}
              </div>
              <div>
                <h3>Title</h3>
                {ReturnData('title', props.arrayAssignmentsFiltered)}
              </div>
              <div>
                <h3>Status</h3>
                {ReturnData('status', props.arrayAssignmentsFiltered)}
              </div>
            </div>
        </div>
    )
}

export default ArrayTaskData;