export function getResponse(intent) {
  const responses = {
    greeting: "Hi there! 👋",
    goodbye: "Goodbye! Take care.",
    identity: "I'm a basic AI agent made with JS.",
    feeling: "I'm doing great, thanks for asking!",
    unknown: "Hmm... I don't understand that yet.",
  };

  return responses[intent] || responses["unknown"];
}
