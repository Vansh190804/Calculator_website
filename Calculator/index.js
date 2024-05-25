let key= document.querySelectorAll(".numbers")
let str=" "
Array.from(key).forEach((key)=>{
        key.addEventListener( "click", (e)=>{
        try{
            if(e.target.innerHTML=='='){
                str=eval(str)
                document.querySelector(".display").value = str
            }
            else if(e.target.innerHTML=="C"){
                document.querySelector(".display").value = ""
                str="";
            }
            else if(e.target.innerHTML==`<img src="backspace.svg" id="image">`){
                let inner= document.querySelector(".display").value
                inner=inner.substr(0,inner.length-1)
                document.querySelector(".display").value=inner
                str=inner
            }
            else{
            console.log(e.target)
            str=str + e.target.innerHTML
            document.querySelector(".display").value=str 
            } 

        }
        catch(err){
            document.querySelector(".display").value="Syntax Error"
            str=" "
        }
        })
})














