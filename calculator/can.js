//const display= document.querySelector("text")
//const buttons= document.querySelectorAll("button")
var sayi1,sayi2,x,y,islem=0;
const display = document.querySelector('input[name="display"]');
const buttons = document.querySelectorAll('input[type="button"]');
const operator=document.querySelectorAll(".operator")
//console.log(operator)

buttons.forEach(button=>{
    button.addEventListener("click",()=>{
        
        if(button.className=== "operator"){
            switch(button.value){
                case '+':
                    sayi1=display.value
                    display.value=""
                    //sayi2=sayi1.slice(0,-1)
                    x= parseInt(sayi1);
                    console.log(typeof(x))
                    console.log(x)
                    islem=1
                    break
                    
                case '-':
                    sayi1=display.value
                    display.value=""
                    //sayi2=sayi1.slice(0,-1)
                    x= parseInt(sayi1);
                    console.log(typeof(x))
                    console.log(x)
                    islem=2
                    break
                
                case '*':
                    sayi1=display.value
                    display.value=""
                    //sayi2=sayi1.slice(0,-1)
                    x= parseInt(sayi1);
                    console.log(typeof(x))
                    console.log(x)
                    islem=3
                    break
                case '/':
                    sayi1=display.value
                    display.value=""
                    //sayi2=sayi1.slice(0,-1)
                    x= parseInt(sayi1);
                    console.log(typeof(x))
                    console.log(x)
                    islem=4
                    break

                case '=':
                    console.log(x)
                    sayi2=display.value
                    y= parseInt(sayi2);
                    parseInt(y);  
                    console.log(y)
                    console.log(sayi2)
                    
                    console.log(z)
                    switch(islem){
                        case 1:
                            var z=x+y
                            console.log(x,y)
                            display.value=z
                            break
                        case 2:
                            console.log(x,y)
                            var z=x-y
                            display.value=z
                            break
                        case 3:
                            var z=x*y
                            display.value=z
                            break
                        case 4:
                            var z=x/y
                            if(y==0){
                                display.style.fontSize="35px"
                                z="not divisible by zero"
                            }
                            display.value=z
                            break
                    }
                    break



        }
    }
    })})
    console.log(islem)
//console.log(buttons)

//console.log(operator.value)



