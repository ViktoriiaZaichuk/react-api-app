function FetchUserData() {
    
    return fetch('https://jsonplaceholder.typicode.com/users/',
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


export default FetchUserData;