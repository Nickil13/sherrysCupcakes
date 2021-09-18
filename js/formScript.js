var form = document.getElementById("contact-form");

async function handleSubmit(e){
    e.preventDefault();
    var status = document.getElementById("form-status");
    var data = new FormData(e.target);

    fetch(e.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        status.innerHTML = 'Thank you for your submission!';
        form.reset();
    }).catch(error => {
        status.innerHTML = 'Oops! There was a problem submitting your form.'
    });
}

form.addEventListener('submit', handleSubmit);