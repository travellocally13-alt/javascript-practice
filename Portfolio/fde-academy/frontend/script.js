
console.log("FDE Academy started");

// Landing page button

const startButton = document.getElementById("start-button");

const learningSection = document.getElementById("learning");

startButton.addEventListener("click", function () {

    alert("Welcome to FDE Academy! Your learning journey starts here.");

    learningSection.scrollIntoView({
        behavior: "smooth"
    });

});


// AI Mentor Chat

const sendButton = document.getElementById("send-button");

const userInput = document.getElementById("user-message");

const chatMessages = document.getElementById("chat-messages");


// Function to display a chat message

function displayMessage(message, className) {

    const messageElement = document.createElement("div");

    messageElement.classList.add("message", className);

    messageElement.textContent = message;

    chatMessages.appendChild(messageElement);

}


// Handle sending a message

function sendMessage() {

    const userText = userInput.value.trim();

    if (userText === "") {
        alert("Please enter a question first.");
        return;
    }

    displayMessage(userText, "user-message");

    userInput.value = "";

    setTimeout(function () {

        displayMessage(
            "Great question! I am your FDE Academy learning mentor. Real AI-powered explanations will be connected in a future version.",
            "mentor-message"
        );

    }, 700);

}


// Button click

sendButton.addEventListener("click", sendMessage);


// Enter key

userInput.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {
        sendMessage();
    }

});