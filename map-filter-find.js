const students = [
    {name: "Justin Bieber" , id: 21},
    {name: "Charlie Puth" , id: 51},
    {name: "Selena Gomez" , id: 101}
]
const names = students.map(s => s.name);
console.log(names);

const bigger = students.filter(s => s.id>40);
console.log(bigger);

const bigOne = students.find(s => s.id > 21);
console.log(bigOne);