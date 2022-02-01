let n = 12345566

let  count = 0
while (n!=0) {
    
    n=parseInt(n/10)
    if(n%10===5){
        count=count+1

    }
    
    

}
console.log(count);