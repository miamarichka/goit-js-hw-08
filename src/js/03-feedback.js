const email = document.querySelector('input');
const textarea = document.querySelector('textarea')
const submit = document.querySelector('button')

email.addEventListener('input', onEmail);
textarea.addEventListener('input', onTextarea);
submit.addEventListener('submit', onSubmitBtn);

function onEmail(event){
    const emailadress = event.target.value;
    console.log(emailadress)
    localStorage.setItem('email' , emailadress);
};

 function onTextarea(event){
    const textareainput = event.target.value;
    console.log(textareainput)
    localStorage.setItem('textarea' , textareainput);
};

function restore(){
    const savedEmail = localStorage.getItem('email');
    const savedTextarea = localStorage.getItem('textarea');

    if(savedEmail){
        email.value = savedEmail;
    };
    if(savedTextarea){
        textarea.value = savedTextarea;
    }
}

