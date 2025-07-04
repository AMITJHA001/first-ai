async function askGPT() {
  const input = document.getElementById("userInput").value;

  try {
    const res = await fetch("/ask", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: input }),
    });

    const data = await res.json();
    document.getElementById("response").textContent = data.reply;
  } catch (error) {
    console.log(error);
  }
}
