const contactForm = document.querySelector(".php-email-form")
const fullNameInput = document.querySelector("#name")
const subjectt = document.querySelector("#subject")
const emailAddressInput = document.querySelector("#email")
const messageInput = document.querySelector("#message")

contactForm.addEventListener("submit", (e) => {
    e.preventDefault()
    const emailMessage = getEmailMessage({
        name: fullNameInput.value,
        subject: subjectt.value,
        email: emailAddressInput.value,
        message: messageInput.value,
    })

    fetch("https://sendmail-api-docs.vercel.app/api/send", {
        method: "POST",
        body: JSON.stringify({
            to: "freelancing_messages@hotmail.com", // replace it with your email address (the email you want to receive messages at)
            subject: "Message From Your Website",
            message: emailMessage,
        })
    })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            fullNameInput.value = ""
            subjectt.value = ""
            emailAddressInput.value = ""
            messageInput.value = ""
        })
})

const getEmailMessage = ({ name, email, message, subject } = {}) => {
    return `
        <p>You Have Received A New Message From Your Contact Website:</p>
        <div style="background-color: #101010; color: #fbfbfb; padding: 12px">
            <p style="margin: 0;">Name: ${name}</p>
            <p style="margin: 12px 0;">Email: ${email}</p>
            <p style="margin: 12px 0;">Subject: ${subject}</p>
            <p style="margin: 0;">Message: ${message}</p>
        </div>
    `
}

////////////////////////////////////////////////////////////////

function CustomAlert(){
    this.alert = function(message,title){
      document.body.innerHTML = document.body.innerHTML + '<div id="dialogoverlay"></div><div id="dialogbox" class="slit-in-vertical"><div><div id="dialogboxhead"></div><div id="dialogboxbody"></div><div id="dialogboxfoot"></div></div></div>';
  
      let dialogoverlay = document.getElementById('dialogoverlay');
      let dialogbox = document.getElementById('dialogbox');
      
      let winH = window.innerHeight;
      dialogoverlay.style.height = winH+"px";
      
      dialogbox.style.top = "100px";
  
      dialogoverlay.style.display = "block";
      dialogbox.style.display = "block";
      
      document.getElementById('dialogboxhead').style.display = 'block';
  
      if(typeof title === 'undefined') {
        document.getElementById('dialogboxhead').style.display = 'none';
      } else {
        document.getElementById('dialogboxhead').innerHTML = '<i class="fa fa-exclamation-circle" aria-hidden="true"></i> '+ title;
      }
      document.getElementById('dialogboxbody').innerHTML = message;
      document.getElementById('dialogboxfoot').innerHTML = '<button class="pure-material-button-contained active" onclick="customAlert.ok()">OK</button>';
    }
    
    this.ok = function(){
      document.getElementById('dialogbox').style.display = "none";
      document.getElementById('dialogoverlay').style.display = "none";
    }
  }
  
  let customAlert = new CustomAlert();