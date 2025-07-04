async function ask() {
  const input = document.getElementById("userInput").value;
  const res = await fetch("/ask", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message: input }),
  });

  const data = await res.json();
  document.getElementById("response").textContent = data.reply;
}
