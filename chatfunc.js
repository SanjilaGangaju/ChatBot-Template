// Open chat
const chatButton = document.querySelector(".chat-button");
const chatBox = document.querySelector(".chat-box");

chatButton.addEventListener("click", () => {
  chatButton.style.display = "none";
  chatBox.style.visibility = "visible";
});

// Close chat
const closeChat = document.querySelector(".chat-box .chat-box-header p");

closeChat.addEventListener("click", () => {
  chatButton.style.display = "block";
  chatBox.style.visibility = "hidden";
});
