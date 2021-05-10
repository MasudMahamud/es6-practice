const person = { name: 'Jack Willian', age: 24 , job:'Study', adress: 'USA'};

// const name = person.name;
// const age = person.age;
// const job = person.job;
// const adress = person.adress;
const { name, age, job, adress} = person;

console.log("Name:"+ " " +name , "Age:"+ " " +age , "job:"+ " " +job , "adress:"+ " " +adress);


const friend = ['Jony Liver', 'Sharuk khan', 'Amir khan', 'Salman khan'];
const [firstActor, nextActor, ...lastLineActors] = friend;

console. log(firstActor, nextActor, lastLineActors);