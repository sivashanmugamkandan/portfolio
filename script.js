document.getElementById("contactForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const status = document.getElementById("form-status");

  status.textContent = "⏳ Sending...";

  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message })
    });

    const data = await res.json();
    if (res.ok) {
      status.textContent = "✅ Message sent successfully!";
      document.getElementById("contactForm").reset();
    } else {
      status.textContent = "❌ Error: " + data.error;
    }
  } catch (err) {
    console.error(err);
    status.textContent = "⚠️ Network error, please try again later.";
  }
});
