const BASE_URL = "http://localhost:3000/auth";

// Step 1: Send OTP
async function sendOTP() {
  const email = document.getElementById("email").value;
  const res = await fetch(`${BASE_URL}/forgot-password`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email }),
  });

  const data = await res.json();
  alert(data.message || "OTP sent");
  if (res.ok) window.location.href = "verify-otp.html";
}

// Step 2: Verify OTP
async function verifyOTP() {
    const email = document.getElementById("email").value;
    const otp = document.getElementById("otp").value;
  
    const res = await fetch(`${BASE_URL}/verify-otp`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, otp }),
    });
  
    const data = await res.json();
    alert(data.message || "OTP Verified");
  
    if (res.ok) {
      // Redirect to reset-password with query params
      window.location.href = `reset-password.html?email=${encodeURIComponent(email)}&otp=${encodeURIComponent(otp)}`;
    }
  }
  

// Step 3: Reset Password
async function resetPassword() {
  const email = document.getElementById("email").value;
  const otp = document.getElementById("otp").value;
  const newPassword = document.getElementById("new-password").value;

  const res = await fetch(`${BASE_URL}/reset-password`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, otp, newPassword }),
  });

  const data = await res.json();
  alert(data.message || "Password reset successful");
  if (res.ok) window.location.href = "login.html";
}
