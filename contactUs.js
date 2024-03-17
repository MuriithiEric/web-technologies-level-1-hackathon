const sendMessBtn = document.getElementById("send-message");
//checks if mesage is fillled
sendMessBtn.addEventListener('click', ()=>{
    if (messageFillednF()) {
        alert('Your Message have been sent succesfuly.');
    }
    else{
        alert("Please fill out all the fields.");
    }
});

const messageFillednF = ()=>{
    const inputs = document.querySelectorAll('input[required]');
    return Array.from(inputs).every(field => field.value.trim() !== '');
}