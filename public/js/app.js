const formcontact = document.querySelector('.formcontact');

let name = document.getElementById('name');
let email = document.getElementById('email');
let phone = document.getElementById('phone');
let subject = document.getElementById('subject');
let message = document.getElementById('message');

formcontact.addEventListener('submit', (e)=>{
  e.preventDefault();

  let formData = { 
    name: name.value,
    email: email.value,
    phone: phone.value,
    subject: subject.value,
    message: message.value,
  }
  
  let xhr = new XMLHttpRequest();
  xhr.open('POST', '/');
  xhr.setRequestHeader("content-type", 'application/json');
  xhr.onload = function() {
    console.log(xhr.responseText);
    if(xhr.responseText == 'success'){
      alert('E-mail enviado');
      name.value = '';
      email.value = '';
      phone.value = '';
      subject.value = '';
      message.value = '';
    }else{
      alert('Alguma coisa deu errado!')
    }
  }

  xhr.send(JSON.stringify(formData));
})