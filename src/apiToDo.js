/* GET users' to do assignments data */
function FetchUserAssignments() {
    
    return fetch('https://jsonplaceholder.typicode.com/todos',
    {
        method: 'GET',
        headers: {}
    }
    )

        .then((response) => { return response.json()})
        .then(json => { 
            console.log(json);
            return json;
        }
        
        ) 
        .catch(error => console.log(error))
}

export default FetchUserAssignments;