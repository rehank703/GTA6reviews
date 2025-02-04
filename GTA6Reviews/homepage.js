alert("why are you here noob");

function verifyUserAge() { // Function name changed
    let age = document.getElementById("ageInput").value; 
    let message = "";

    if (age >= 18) {
        message = "You are an adult. Welcome!";
    } else if (age > 0) {
        message = "You are a minor. Access is limited.";
    } else {
        message = "Please enter a valid age.";
    }

    document.getElementById("message").innerText = message;
}
function changeBg() {
        let colors = ["#ff5733", "#33ff57", "#3357ff", "#ff33a1"];
        document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    }