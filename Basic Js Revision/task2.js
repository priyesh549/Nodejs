

// product of two numbers using arrow function
// let product = (a,b) => {
//     return a * b;
// }

// let ans = product(5,6)
// console.log(ans)


// Student Obj

class Student{
    constructor(name,age,marks){
        this.name = name;
        this.age = age;
        this.marks = marks;
    }

    getStudentData(){
        return `${this.name} is ${this.age} old and has marks ${this.marks}`
    }
}

const Priyesh = new Student('Priyesh',18,40); // name,age,marks
const Ayush = new Student('Ayush',19,49);

console.log(Priyesh.getStudentData())