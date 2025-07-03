export function analyze(input) {
  const cleanInput = input.trim().toLowerCase();

  const intents = {
    greeting: ["hi", "hello", "hey"],
    goodbye: ["bye", "goodbye", "see you"],
    identity: ["who are you", "your name"],
    feeling: ["how are you", "how do you feel"],
  };

  for (const intent in intents) {
    for (const phrase of intents[intent]) {
      if (cleanInput.includes(phrase)) return intent;
    }
  }

  return "unknown";
}
