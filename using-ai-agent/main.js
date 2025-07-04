import { analyze } from "./script/nlp.js";
import { getResponse } from "./script/agent.js";

document.getElementById("sendBtn").addEventListener("click", () => {
  const userInput = document.getElementById("userInput").value;
  const intent = analyze(userInput);
  const reply = getResponse(intent);

  document.getElementById("response").textContent = reply;
});
