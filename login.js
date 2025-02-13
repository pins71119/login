function login() {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const errorMessage = document.getElementById("error-message");
    const submitButton = document.querySelector(".submit");

    if (username === "admin" && password === "dika123xc") {
        alert("Login sukses!");
        submitButton.style.transform = "scale(0.9)";
        setTimeout(() => {
            submitButton.style.transform = "scale(1)";
            window.location.href = "index.html";
        }, 200);
    } else {
        errorMessage.textContent = "Username atau password salah!";
        errorMessage.classList.add("shake");
        setTimeout(() => errorMessage.classList.remove("shake"), 300);
    }
}
