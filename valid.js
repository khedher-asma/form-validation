
function validate(){
    let elts=document.querySelectorAll(".empty-field"),counter=0
	for(let i=0; i<elts.length; i++){
        if(elts[i].value===""){
            counter++;  
        }
    }
    if(counter!==0){
        alert("Please fill in all fields")
    }else if(!validateEmail(elts[2].value)){
        alert("Please enter a valid email address")
    }else if(elts[3].value.length<8){
        alert("Password must have more than 8 characters")
    }else if(!validatePassword(elts[3].value)){
        alert("The password must be a combination of charatacters , numbers and at least a capital letter")
    }else {
        alert('succes!!')
    } 
}
function validateEmail(email) {
    let reg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return reg.test(email)
}
function validatePassword(pwd){
    let reg = /^(?=.*[A-Z])[0-9a-zA-Z]*$/
    return reg.test(pwd)
}

