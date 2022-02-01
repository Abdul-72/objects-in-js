//  first class function 

//  1 these are the function that can be passed as arguments to a function ,

// 2 can be returned from a function 







//  which can be passed as an argument to a function 
function a(higherorder) {


    higherorder()

    console.log("A");

}


 
function higherorder () {
    console.log("B");
}


a(higherorder)




//  a function which can be return from a function , its also known as callback function 


function dispalyuser () {
    return function() {
        console.log("display user ");       // returning a function 
    } 


}



//  which can be assinged to a variable 





const y = function yes() {

    console.log("hello word ");
    
}



//  higher order function these are those function 

//  which can take a function as an argument 

// or which can return a function 























