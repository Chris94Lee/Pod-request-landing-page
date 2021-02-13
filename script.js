const input = document.getElementById("input");
const error = document.getElementById("error");

function validateInput() {
    const inputValue = input.value;
    var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

    if (pattern.test(inputValue) == false){
        error.innerHTML = "Oops! Please check your email";
        event.preventDefault();
    }
}



form.addEventListener('submit', validateInput);