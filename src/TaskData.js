import React from "react";
import FetchUserAssignments from './apiToDo';

function ArrayTaskData(props) {
    
    
    /*TO DO ASSIGNMENTS - take the API data */
    /* const[arrayAssignments, setArrayAssignments] = React.useState([]); */
    /* Second array for the click event */
    /* const [arrayAssignmentsFiltered, setArrayAssignmentsFiltered] = React.useState([])  */
    
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
                props.setArrayAssignments(arrayTempToDo);
            } 
            apiAssignments();
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
    
    return (
        <div className="on-click">
            <div className="array-onClick">
              <div>
                <h3>ID</h3>
                    {props.showResults ? ReturnData('id', props.arrayAssignmentsFiltered) : null}
                {/* {ReturnData('id', arrayAssignments)} */}
              </div>
              <div>
                <h3>Title</h3>
              {/*   {showResults ? ReturnData('title', arrayAssignmentsFiltered) : null} */}
              {props.showResults ? ReturnData('title', props.arrayAssignmentsFiltered) : null}
              </div>
              <div>
                <h3>Status</h3>

               {/*  {showResults ? ReturnData('status', arrayAssignmentsFiltered) : null} */}
               {props.showResults ? ReturnData('status', props.arrayAssignmentsFiltered) : null}
              </div>
            </div>
        </div>
    )
}

export default ArrayTaskData;