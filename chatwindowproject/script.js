document.getElementById("chat-button").addEventListener("click", function () {
    document.getElementById("chat-window").style.display = "flex";
});

document.getElementById("close-chat").addEventListener("click", function () {
    document.getElementById("chat-window").style.display = "none";
});

document.getElementById("send-btn").addEventListener("click", function () {
    let userInput = document.getElementById("user-input").value;
    
    if (userInput.trim() !== "") {
        let chatBody = document.getElementById("chat-body");

        // Add user message
        let userMessage = document.createElement("p");
        userMessage.textContent = userInput;
        userMessage.style.textAlign = "right";
        chatBody.appendChild(userMessage);

        // Add bot reply
        let botReply = document.createElement("p");
        botReply.textContent = "Thanks for your message!";
        botReply.style.color = "gray";
        chatBody.appendChild(botReply);

        // Clear input field
        document.getElementById("user-input").value = "";
        chatBody.scrollTop = chatBody.scrollHeight; // Auto-scroll
    }
});
