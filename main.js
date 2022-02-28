

//Obtenir tot

// Async await --> Funciona!
const url = 'https://jsonplaceholder.typicode.com/users'
async function getData() {
    
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
}
//getData();


//PROMISE --> Funciona!
// HTTP Request to TODO API
fetch('https://jsonplaceholder.typicode.com/todos')
// HTTP Response to JSON
.then( (response) => { 
  return response.json();
})
// JSON process
.then( (json) => { 
  console.log(json)
})



//Obtenir nomes el nom de cada usuari

// Async await --> Funciona!
const url = 'https://jsonplaceholder.typicode.com/users'
async function getData() {
    
    const response = await fetch(url);
    const data = await response.json();
    data.forEach(function(users) {
        console.log(users.name);
    }); 
}
getData();


//PROMISE --> Funciona!
fetch('https://jsonplaceholder.typicode.com/users')
.then( (response) => { 
    return response.json();
})
.then( (json) => { 
        console.log(json)
        // Filter by completed
        const completedTasks = json.filter( todo => todo.completed == true);
        console.log(completedTasks)
})



// Filtrar per els ID's que siguin superiors a 5

// Async await --> Funciona!
const url = 'https://jsonplaceholder.typicode.com/users'
async function getData() {
    
    const response = await fetch(url);
    const data = await response.json();
    const idEven = data.filter( i => i.id>5);
    console.log(idEven);
    //console.log(idEven.name); --> si nomes volem el nom del usuari
}
getData();


//PROMISE --> Funciona!
fetch('https://jsonplaceholder.typicode.com/users')
.then( (response) => { 
    return response.json();
})
.then( (json) => { 
        console.log(json)
        // Filter by completed
        const idEven = json.filter( i => i.id>5);
        console.log(idEven)
})



//MAPEJAR per NOM [CARRER-CIUTAT]

// Async await --> Funciona!
const url = 'https://jsonplaceholder.typicode.com/users'
async function getData() {
    
    const response = await fetch(url);
    const data = await response.json();
    const testmap = data.map(function(m){
        return `${m.name} [${m.address.street} - ${m.address.city}]`;
    });
    // En una linia --> const testMap = data.map(m => `${m.name} [${m.address.street} - ${m.address.city}]`);
    console.log(testmap);
}
getData();


//PROMISE --> Funciona!
fetch('https://jsonplaceholder.typicode.com/users')
.then( (response) => { 
    return response.json();
})
.then( (json) => { 
    const testmap = json.map(function(m){
        return `${m.name} [${m.address.street} - ${m.address.city}]`;
    });
    console.log(testmap)
})



//ORDENAR per ID al inrreves

// Async await --> Funciona!
const url = 'https://jsonplaceholder.typicode.com/users'
async function getData() {
    
    const response = await fetch(url);
    const data = await response.json();
    const sort = data.sort((a, b) => (a.id > b.id ? -1 : 1));
    console.log(sort);
}
getData();


//PROMISE --> Funciona!
fetch('https://jsonplaceholder.typicode.com/users')
.then( (response) => { 
    return response.json();
})
.then( (json) => { 
    const sort = json.sort((a, b) => (a.id > b.id ? -1 : 1));
    console.log(sort);
})



//REDUCE 

// Async await --> Funciona!
const url = 'https://jsonplaceholder.typicode.com/users'
async function getData() {
    
    const response = await fetch(url);
    const data = await response.json();
    const total = data.reduce(function(t, i){
        return t + i.id;
    }, 0);
    console.log(total);
}
getData();


//PROMISE --> Funciona!
fetch('https://jsonplaceholder.typicode.com/users')
.then( (response) => { 
    return response.json();
})
.then( (json) => { 
    const total = json.reduce(function(t, i){
        return t + i.id;
    }, 0);
    console.log(total);
})



 