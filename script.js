function sendMail(){
    let parms ={
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        message : document.getElementById("message").value,
    }

    emailjs.send("service_u9ra97w","template_dt0l5de",parms).then(alert("email sent!!"))
}