//let a = +prompt("¿Primer número?", 1);
//let b = +prompt("¿Segundo número?", 2);

//console.log(a / (b^2));
//tarea 2
let { name, email } = { name: "John", email: "john@example.com" }
console.log(name) // "John" console.log(email) // "john@example.com" 

let { nombre,correoelectrónico, resto} = { nombre: "John",correoelectrónico: "john@example.com", city: "Phoenix", state: "AZ",
country: "USA"};
resto === { city: "Phoenix", state: "AZ", country: "USA"}; // true
const user = { nombre: "John",correoelectrónico: "john@example.com",city: "Phoenix", state: "AZ", country: "USA"};
const str = ({ nombre,correoelectrónico, resto} = user );  
console.log(user)