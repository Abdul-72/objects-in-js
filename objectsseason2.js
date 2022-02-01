let a = {
    employe : "abdul" , 

    designation : "full stack developer" , 

    salary :  30000

}


function mfunction(obj) {

    console.log(obj.employe," is eaning ", obj.salary ," at " , obj.designation);

}

mfunction(a)



let b = {
    employe : "arsalan" , 

    designation : "full stack developer" , 

    salary :  30000

}


mfunction(b)



//  call bind apply 


// call bind and apply are diffrent methods of calling a function or invoking the function 

//  when we are calling the function using any of these then you dont have to defind in the function that it will  be taking object as a parameter 





let callexmaple = {
    employe : "arsalan" , 

    designation : "full stack developer" , 

    salary :  30000

}





let applyexmaple = {
    employe : "bind abdul" , 

    designation : "reactive native developer" , 

    salary :  30000

}


//  when using call bind apply just use this keyword , and dont assign any parameter to the function 

function myfunction( ) {

    console.log(this.employe," is eaning ", this.salary ," at " , this.designation);

}




myfunction.call(callexmaple)

myfunction.apply(applyexmaple)



//  example of call function with function parameters  


function myfunction(organization , year ) {

    console.log(this.employe," is eaning ", this.salary ," at " , this.designation," at ",organization, "from last " , year , "years");

}


myfunction.call(callexmaple , "TCS" , 5)     // in case of call each and every arguments or function parametrs are  can pass individually


myfunction.apply(callexmaple , ["TCS" , 5])    // in case of apply the arguments or function paramettrs are pass like an array elements 






var sa = {
    institite : "prebbeyrtes " , 
    placed : 2 ,

    
    }


    function  myyy (company ,pack ) {
        console.log(this.institite , "placed " ,this.placed , "students" , "at" , company,"with",pack,"package ");
    }


    myyy.call(sa,"tcs", 50000)




//  BIND : in case of bind it will return you a new function , and this function you can  use anytime and anywhere 


//  in case of bind ffirst take a variable and then assign it with the functionn 

 const bindex=    myyy.bind(sa)

 bindex("tcs",2000)












































































