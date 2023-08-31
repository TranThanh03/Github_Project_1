
document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.querySelector(".login-form");
    const usernameInput = document.querySelector(".username");
    const passwordInput = document.querySelector(".password");
    const errorMessage = document.getElementById("error");
    
    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const dataUsername = usernameInput.value;
        const dataPassword = passwordInput.value;
        if (dataUsername === "") {
            usernameInput.style.borderBottom = "2px solid red";
            return false;
        }
        else {
            usernameInput.style.borderBottom = "2px solid black";
            if (dataUsername === 'thanh2k3' && dataPassword === '22102003') {
                loginForm.submit();
                return true;
            }
            else {
                errorMessage.style.display = "block";
                setTimeout(function() {
                    errorMessage.style.display = "none";
                }, 1300);
                return false;
            }
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const passwordInput = document.querySelector(".password");
    const toggleButton = document.getElementById("toggle-button");
    
    toggleButton.addEventListener("click", function() {
        if(passwordInput.type === "password") {
            passwordInput.type = "text";
            toggleButton.querySelector("i").classList.remove("fa-solid", "fa-lock");
            toggleButton.querySelector("i").classList.add("fa-solid", "fa-lock-open");
        }
        else {
            passwordInput.type = "password";
            toggleButton.querySelector("i").classList.remove("fa-solid", "fa-lock-open");
            toggleButton.querySelector("i").classList.add("fa-solid", "fa-lock");
        }
    });
});

