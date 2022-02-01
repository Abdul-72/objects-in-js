//  "OBJECTS "

//  objects are non premetive data types 

//  it contains data in key value players 

//  it can defined using {}


// let a = {
//     rollnumer : 101,
//     student : "abdul" ,
//     class : 12 
// }

// console.log(a);


//  to access the values individual you have to use variable name then . key name EXAMPLE a.rollnumber 



// console.log(a.rollnumer);      // first method  of accessing the individual elemants 


// console.log(a["student"]);      // secound way of accessing the individual elements use [] and inside it use double qotetion and then key

// reason behind using the double qotetion in secound method is that the browser convert the keys into strings

//  METHOD AND FUNCTION 


//  function is a regular function 

//  method is a funcion which is actually a property of an object 



// let b = {
//     employee : "asrsalan",

//     salary : 30000,

//     employedetails : function () {   // method which means function inside an object 
//             console.log(this.employee);
//     }
// }



// b.employedetails()



let obj1 = {
    name: "Abdul" ,

    salary : 30000 , 

    job : "developer" , 
    my : function () {
       console.log(this.name,"is","earning",this.salary, " at " , this.job);
    }
  }

  obj1.my()




// secound way of creating an object is by using constructer object 

let m = new Object()


// to add elements to object you have to write like variable name.key 


m.city = "ajmeer"

m["state"] = "rajhistan"

console.log(m);




//  how to retrive all the objects and keys 



// use objects.keys to get all the objects 


//  use object.values to get all the values of the object 



let v = Object.values(m)

console.log(v);

let g = Object.keys(m)
console.log(g);


//  SPREAD OPERATERS 


//  it helps you to destructure the elemements 





let z = {...m,...obj1}   // to destructure the elements 

console.log(z);


let array = [1,2,3,4,5]

console.log(array);

// let newarray = [array]       // the zerro index of the array will become the entirre array 

let newarray = [...array]       // if you use spred operator then it will return you the same array 
console.log(newarray);




//  object.create() function 



let merge = {

    names : ["shaik","abdul","razzak"] , 

    namesdetails : function () {
        console.log(this.names);
    }

    


}


merge.namesdetails()








//  "object.create () function" allows you to create an object by taking refrence from another object 



var objectfunction = Object.create(merge)
console.log(objectfunction);
































//   let g = 

















