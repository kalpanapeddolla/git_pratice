const people = [
    {
        name: 'Raju',
        age:28,
        occupation: 'web devloper'
    },
    {
        name: 'Sai',
        age:26,
        occupation: 'nurse'
    },
    {
        name: 'Siva',
        age:35,
        occupation: 'Doctor'
    }
];
function isnurse (person){
    return person.occupation==='nurse';
}

console.log(people.find(isnurse).name);