

/*Map Function Of Array*/

let arr = [
    {
        name: "Avesh",
        Age : 23
        
    },
    {
        name :"samir",
        Age : 23
        
    },
    {
        name : "Avesh",
        Age : 23
       
    },
    {
        name : "Avesh",
        Age : 23
        
    }


];

         /*Mapping Function*/
         
let info = document.querySelector('#info')

const output = arr.map(function(names){

    return '<div>'+ names.name + "<br>"+ " " + names.Age +  ' Years old'+'</div>';
}) 
info.innerHTML = output.join();




/*Filter Function in of array with Arrow Function*/

let arr2=[5,3,5,4,3,6]

let result=arr2.filter((x)=>(x>3))

console.log(result)




