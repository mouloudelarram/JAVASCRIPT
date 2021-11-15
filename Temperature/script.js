let inputF = document.querySelector("#F")
let inputC = document.querySelector("#C")

inputC.value = 0
inputF.value = 0
inputF.addEventListener("input",()=>{
    inputC.value = (inputF.value -32) *5/9;
})

inputC.addEventListener("input",()=>{    
    inputF.value = 32+ inputC.value*9/5;

}) 

