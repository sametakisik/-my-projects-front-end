const textarea= document.getElementById("textarea")
const bold= document.getElementById("b")
const italic= document.getElementById("i")
const underline= document.getElementById("u")
const left= document.getElementById("left")
const center= document.getElementById("center")
const right= document.getElementById("right")
const color= document.getElementById("col")
const size= document.getElementById("option")
const plus= document.getElementById("plus")
const minus= document.getElementById("minus")
const printpage= document.getElementById("print")


console.log(color.value)
bold.addEventListener("click",()=>{
    document.execCommand("bold",false,null)
})
italic.addEventListener("click",()=>{
    document.execCommand("italic",false,null)
})
underline.addEventListener("click",()=>{
    document.execCommand("underline",false,null)
})
left.addEventListener("click",()=>{
    document.execCommand("justifyleft",false,null)
})
center.addEventListener("click",()=>{
    document.execCommand("justifycenter",false,null)
})
right.addEventListener("click",()=>{
    document.execCommand("justifyright",false,null)
})
color.addEventListener("input",()=>{
   textarea.style.color=color.value
})
size.addEventListener("input",()=>{
    textarea.style.fontSize=size.value+"px"
})
plus.addEventListener("click", () => {

    var sizestr = textarea.style.fontSize
    var sizeint = parseInt(sizestr.substring(0, 2), 10)

    if (!isNaN(sizeint)) { 
        var x = sizeint + 2
        textarea.style.fontSize = x + "px"
    }
})
minus.addEventListener("click", () => {

    var sizestr = textarea.style.fontSize
    var sizeint = parseInt(sizestr.substring(0, 2), 10)
    
    if (!isNaN(sizeint)) { 
        var x = sizeint - 2
        textarea.style.fontSize = x + "px"
    }
})
printpage.addEventListener('click', () => {
    var textbox = document.getElementById("textarea")
    var metin = textbox.innerHTML
    var fontSize = window.getComputedStyle(textbox, null).getPropertyValue('font-size');
    var color = window.getComputedStyle(textbox, null).getPropertyValue('color')
    var yeniPencere = window.open()
    yeniPencere.document.write("<html><head><title>Yazdır</title></head><body><div style='font-size: " + fontSize + "; color: " + color + "'>" + metin + "</div></body></html>")
    yeniPencere.print()
    yeniPencere.close()
  })
