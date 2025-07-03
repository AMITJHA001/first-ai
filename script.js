function getResponse() {
  const input = document.getElementById("userInput").value.toLowerCase();
  const responseBox = document.getElementById("response");

  const responses = {
    hi: "Hello there!",
    "how are you": "I'm just a program, but I'm functioning perfectly.",
    "what is your name": "I'm your AI assistant.",
    bye: "Goodbye! Have a nice day.",
  };

  let response = "Sorry, I don't understand that.";

  for (let key in responses) {
    if (input.includes(key)) {
      response = responses[key];
      break;
    }
  }

  responseBox.textContent = response;
}
