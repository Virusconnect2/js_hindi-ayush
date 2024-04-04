// const jsuser = {
//     name : "ayush",
//     age : 21,
//     emailid :"ayush@gmail.com",


// }
// console.log(jsuser.emailid);



// const tinderuser = {
//     fullname : {
//         username :"ayush",
//         lastname : "vashistha"
//     }
// }
// console.log(tinderuser.fullname.username);

// const obj1 = {1:"a" ,2:"b" ,3:"c" }
// const obj2 = {4:"d" ,5:"e" ,6:"f" }
//  const obj3 = object.assign({}, obj1, obj2)
// const obj3 = {...obj1,...obj2}
// console.log(obj3);


const course = {
    coursename : "js_hindi",
    Price : "999",
    courseInstructor : "ayush "
}
const {courseInstructor:instructor} = course
console.log(instructor); 