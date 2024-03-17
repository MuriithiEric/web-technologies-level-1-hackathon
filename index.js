const registerBtn = document.getElementById("Register");
registerBtn.addEventListener('click', ()=> {
    if (formFilled()) {
        alert("Registration Succesful.") ;
    }else{
        alert("Please fill out all the fields.");
    }
});

// funtion to check form is filled all inputs


 const formFilled = () => {
    //this selects all inputs required, itarudisha a node list
    const inputFields = document.querySelectorAll('input[required]');
    //hapa the nidelist are made into an array
    return Array.from(inputFields).every(field => field.value.trim() !== '');
};