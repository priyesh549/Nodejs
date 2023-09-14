// map function task
const fruits = ['apple','oranges','','mango','','lemon']

const newFruits = fruits.map((fruit)=>{
    if(fruit.length === 0){
        fruit = 'empty string'
    }
    return fruit;
})

console.log(newFruits)

// we can mutate the array in js using const because it stores the memory reference and not the values

// spread operators are used for the deep copy where we don't want the reference instead we want to copy for  manipulation and this way our orignal data won't change


// Rest operator is basically used to take the indefinite number of arguments as an array. They are also helpul in sorting,finding maximum and minimum in an array. Thus simplifies the javascript syntax

function sum(...params){
    // console.log(params); // as array
    // console.log(...params) 
    let total = params.reduce((accumulator,param)=>{
        return accumulator+param;
    })
    return total;

}

console.log(sum(1,2,3,4,5,6))


