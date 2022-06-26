const open = document.querySelector(".open");
const close = document.querySelector(".closed");





                    /*For open*/

close.addEventListener("click",function(){

    if(close.classList.contains("active")){

    open.classList.add("active");
    close.classList.remove("active");

}
})

                  /*For Close*/ 

open.addEventListener("click",function(){

    if(open.classList.contains("active")){

    close.classList.add("active");
    open.classList.remove("active");
    
    }
})

