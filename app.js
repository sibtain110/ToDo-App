const input = document.getElementById("myinput")

console.log(input);

const todolist = document.querySelector(".mylist")

const ndinput = document.getElementById("sndinput")
console.log(ndinput);
const rdinput = document.getElementById("trdinput")
console.log(rdinput);


const list = []

const todoapp = {
addfun(){
    if (input.value){
        list.push(input.value + " " +  ndinput.value + " " +  rdinput.value)
        input.value = ''
        ndinput.value = ''
        rdinput.value = ''
    }else{alert("please enter data before continuem")}
    this.myfun()
},
myfun(){
    todolist.innerHTML =""
    list.forEach((value,index)=>{
    todolist.innerHTML += `<li>${value} <button onclick = "todoapp.delete(${index})" class="btn">X</button> </li>`
    })
},
clear (){
    list.splice(0,list.length)
    this.myfun()
},
delete (index){
    list.splice(index,1)
    this.myfun()
}
}
