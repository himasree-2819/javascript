const students = [
    { name: "hima", age: 21, grade: "A" },
    { name: "reshma", age: 22, grade: "A+" },
    { name: "eza", age: 3, grade: "A+" },

]

//accessing data
console.log(students[1].name);
console.log(students[1].grade);
console.log(students[1].age);

//looping through object array
students.forEach(stdnt =>{
   console.log(`${stdnt.name}is ${stdnt.age})years old `);
   
   
})


