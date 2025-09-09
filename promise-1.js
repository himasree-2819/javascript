// // const promise = new Promise ((resolve,reject) => {
//A Promise is an object that represents the result of an asynchronous operation.     // javascript  promise object future result of asynchronous operation
// }) synchronous :Waits until current task finishes
// asynchronous:there is a failure in asynchronous that represent promise(Doesn’t wait, moves to next task)
//resolve:- called when the operation is successful
//reject :- called when operation is failed
// .Then:- it executes when the promise is resolved 
// .catch :- it executes the promise is reject
// .finally:- its execute when resolve and reject(it always executes)
// // const promise = new Promise ((resolve,reject) => {
//     //asynchronous operation
// })
//resolve:- called when the operation is successful
//reject :- called when operation is failed
// .Then:- it executes when the promise is resolved 
// .catch :- it executes the promise is reject
// .finally:- its execute when resolve and reject


let myPromise = new Promise((resolve, reject) => {
    let success = false;

    setTimeout(() => {
        if (success) {
            resolve('Promise resolved successfully!')
        } else {
            reject('Promise rejected')
        }
    }, 2000)
})

myPromise
    .then(result => console.log(result)) //then is the promise is resolved
    .catch(error => console.log(error)) 
    .finally(() => console.log("promise exicution finished!"))


