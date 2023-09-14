// using Promises

// code 1:-

// const promise1 = new Promise((resolve,reject)=>{
//     resolve('a');
// })

// const promise2 = new Promise((resolve,reject)=>{
//     resolve('b');
// })

// const promise3 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve('c')
//     },1000)
// })

// const promise4 = new Promise((resolve,reject)=>{
//     resolve('d');
// })


// promise1.then((res)=>{
//     console.log(res);
//     return promise2;
// })
// .then((res)=>{
//     console.log(res);
//     return promise3;
// })
// .then((res)=>{
//     console.log(res);
//     return promise4;
// })
// .then((res)=>{
//     console.log(res);
// })


// code 2 :-

// const promise1 = new Promise((resolve,reject)=>{
//     resolve('a');
// })

// const promise2 = new Promise((resolve,reject)=>{
//     resolve('b');
// })

// const promise3 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve('c')
//     },3000)
// })

// const promise4 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve('d')
//     })
// })

// const promise5 = new Promise((resolve,reject)=>{
//     resolve('e');
// })

// promise1.then((res)=>{
//     console.log(res);
//     return promise2;
// })
// .then((res)=>{
//     console.log(res);
//     return promise3;
// })
// .then((res)=>{
//     console.log(res);
//     return promise4;
// })
// .then((res)=>{
//     console.log(res);
//     return promise5;
// })
// .then((res)=>{
//     console.log(res);
// })



// using async await

// code 1
// const printa = (a) =>{
//     console.log(a);
// }

// const printb = (b) =>{
//     console.log(b);
// }

// const printc = (c) => {
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log(c);
//             resolve()
//         },1000)
//     })
// }

// const printd = (d) =>{
//     console.log(d);
// }


// const printInOrder1 = async() => {
//     printa('a')
//     printb('b');
//     await printc('c');
//     printd('d');
// }

// printInOrder1()


// code 2:-
// const printa = (a) =>{
//     console.log(a);
// }

// const printb = (b) =>{
//     console.log(b);
// }

// const printc = (c) => {
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log(c);
//             resolve()
//         },3000)
//     })
// }

// const printd = (d) =>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log(d);
//             resolve()
//         })
//     })
// }


// const printe = (e) =>{
//     console.log(e);
// }

// const printInOrder2 = async() => {
//     printa('a')
//     printb('b');
//     await printc('c');
//     await printd('d');
//     printe('e');
// }

// printInOrder2()