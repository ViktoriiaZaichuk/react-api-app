import React from "react";
import { useNavigate } from "react-router-dom";
import CheckCircleTwoToneIcon from '@mui/icons-material/CheckCircleTwoTone';
import DoNotDisturbAltTwoToneIcon from '@mui/icons-material/DoNotDisturbAltTwoTone';

function ArrayTaskData(props) {
  /* REACT STATES */
  const [arrayAssignments, setArrayAssignments] = React.useState([]);
  const [arrayUserName, setArrayUserName] = React.useState([]);

  /* GET THE URL TASK ID */
  let getIdApiPageUrl = () => {
    let currentUrl = window.location.href;
    let theIdUrl = currentUrl.split('http://localhost:3000/usertasks/');
    return theIdUrl[1];
  }

  /* GET TASK FROM JSONPLACEHOLDER */
  const fetchData = (userId) => {
    return fetch(`https://jsonplaceholder.typicode.com/users/${userId}/todos`,
    {
    method: 'GET',
    headers: {}
    })
    .then((response) => { return response.json()})
    .then(data => { 
        return data;
    }) 
    .catch(error => console.log(error))
  };

  React.useEffect(() => {
    let apiAssignments = async() => {
      let userId = getIdApiPageUrl()
      let data = await fetchData(userId);
      let arrayTempToDo = data.map((task) => {
        return {
            id: task.id,
            userId: task.userId,
            title: task.title,
            status: task.completed
        }
      })
      setArrayAssignments(arrayTempToDo);
  } 
  
  apiAssignments();
  }, []);

  /*ASSIGN ICONS TO THE TASKS - in the empty array */
  let ReturnDataStatus = (params, targetArray) => {
    let returnItem = targetArray.map((item) => {
      if(item.status === true) {
        return(
          <div className="tbl-item">
            <CheckCircleTwoToneIcon style={{ 'color': '#1BC90A' }}/>
          </div>
        )
      }
      else {
        return(
          <div className="tbl-item">
            <DoNotDisturbAltTwoToneIcon style={{ 'color': 'red'}} />
          </div>
        )
      }
    }) 
    return returnItem;
  }   

  /* GET USER NAME FROM JSONPLACEHOLDER */
  const fetchDataUserName = () => {
    let userId = getIdApiPageUrl()
    return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`,
    {
      method: 'GET',
      headers: {}
    })
    .then((response) => { return response.json()})
    .then(data => { 
      console.log(data); 
      return data;
    }) 
    .catch(error => console.log(error))
  };

  React.useEffect(() => {
    let apiUserName = async() => {
      let dataName = await fetchDataUserName();
      let userName = dataName.name; 
      setArrayUserName(userName);
    } 
    apiUserName();
  }, []);

  /*ASSIGN USERS - in the empty array */
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

  /* NAVIGATE */
  const navigate = useNavigate();

  /* RETURN */
  return (
    <div className="on-click">
        <div>
          {/* BUTTON */}
          <button onClick={() => navigate("/")}>Go Back</button>
          {/* USER NAME */}
          {arrayUserName}
        </div>

        {/* ARRAY */}
        <div className="array-onClick">
          <div>
            <h3>ID</h3>
              {ReturnData('userId', arrayAssignments)}
          </div>
          <div>
            <h3>Title</h3>
            {ReturnData('title', arrayAssignments)}
          </div>
          <div>
            <h3>Status</h3>
            {ReturnDataStatus('status', arrayAssignments)}
          </div>
        </div>
    </div>
  )
}

export default ArrayTaskData;