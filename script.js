window.addEventListener("load", function () {
    const loginForm = document.querySelector(".login-form");
    const usernameInput = document.querySelector(".username");
    const passwordInput = document.querySelector(".password");
    const errorMessage = document.getElementById("error");
    const toggleButton = document.getElementById("toggle-button");
    const labelElement = document.querySelector('label[for="username"]');

    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const dataUsername = usernameInput.value;
        const dataPassword = passwordInput.value;
        if(dataUsername === "") {
            usernameInput.style.borderBottom = "2px solid red";
            labelElement.style.color = "red";
        }
        else{
            usernameInput.style.borderBottom = "";
            labelElement.style.color = "";
            if(dataUsername === 'admin@gmail.com' && dataPassword === '123') {
                loginForm.submit();
            }
            else{
                errorMessage.style.display = "block";
                setTimeout(function() {
                    errorMessage.style.display = "none";
                }, 1500);
            }
        }
    });
    
    toggleButton.addEventListener("click", function() {
        if(passwordInput.type === "password") {
            passwordInput.type = "text";
            toggleButton.querySelector("i").classList.remove("fa-solid", "fa-lock");
            toggleButton.querySelector("i").classList.add("fa-solid", "fa-lock-open");
        }
        else{
            passwordInput.type = "password";
            toggleButton.querySelector("i").classList.remove("fa-solid", "fa-lock-open");
            toggleButton.querySelector("i").classList.add("fa-solid", "fa-lock");
        }
    });
});
