// // Replace this with your actual backend URL
// const BASE_URL = "http://localhost:3000";

// // ============ SIGNUP ============
// async function signup() {
//   const name = document.getElementById("signup-name").value;
//   const email = document.getElementById("signup-email").value;
//   const password = document.getElementById("signup-password").value;

//   const res = await fetch(`${BASE_URL}/auth/register`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ name, email, password }),
//   });

//   const data = await res.json();

//   if (res.ok) {
//     alert("Signup successful! You can now log in.");
//     window.location.href = "login.html";
//   } else {
//     alert(data.error || "Signup failed");
//   }
// }

// // ============ LOGIN ============
// async function login() {
//   const email = document.getElementById("login-email").value;
//   const password = document.getElementById("login-password").value;

//   const res = await fetch(`${BASE_URL}/auth/login`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ email, password }),
//   });

//   const data = await res.json();

//   if (res.ok) {
//     localStorage.setItem("token", data.token);
//     window.location.href = "index.html"; // ✅ Redirect to homepage
//   } else {
//     alert(data.error || "Login failed");
//   }
// }

// // ============ REQUEST OTP ============
// async function requestOTP() {
//   const email = document.getElementById("forgot-email").value;

//   const res = await fetch(`${BASE_URL}/auth/forgot-password`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ email }),
//   });

//   const data = await res.json();

//   if (res.ok) {
//     alert("OTP sent to your email.");
//     localStorage.setItem("resetEmail", email); // store for use in next step
//     window.location.href = "verify-otp.html";
//   } else {
//     alert(data.error || "Failed to send OTP");
//   }
// }

// // ============ VERIFY OTP ============
// async function verifyOTP() {
//   const email = localStorage.getItem("resetEmail");
//   const otp = document.getElementById("otp-input").value;

//   const res = await fetch(`${BASE_URL}/auth/verify-otp`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ email, otp }),
//   });

//   const data = await res.json();

//   if (res.ok) {
//     alert("OTP verified. Now reset your password.");
//     window.location.href = "reset-password.html";
//   } else {
//     alert(data.error || "OTP verification failed");
//   }
// }

// // ============ RESET PASSWORD ============
// async function resetPassword() {
//   const email = localStorage.getItem("resetEmail");
//   const newPassword = document.getElementById("new-password").value;

//   const res = await fetch(`${BASE_URL}/auth/reset-password`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ email, newPassword }),
//   });

//   const data = await res.json();

//   if (res.ok) {
//     alert("Password reset successful. Please login.");
//     localStorage.removeItem("resetEmail");
//     window.location.href = "login.html";
//   } else {
//     alert(data.error || "Password reset failed");
//   }
// }

// Replace this with your actual backend URL
const BASE_URL = "http://localhost:3000";

// ============ SIGNUP ============
async function signup() {
  const name = document.getElementById("signup-name").value.trim();
  const email = document.getElementById("signup-email").value.trim();
  const password = document.getElementById("signup-password").value.trim();

  if (!name || !email || !password) {
    alert("Please fill in all fields.");
    return;
  }

  try {
    const res = await fetch(`${BASE_URL}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });

    const data = await res.json();
    console.log("Signup response:", data);

    if (res.ok) {
      alert("Signup successful! You can now log in.");
      window.location.href = "login.html";
    } else {
      alert(data.error || "Signup failed.");
    }
  } catch (err) {
    console.error("Signup error:", err);
    alert("Something went wrong during signup.");
  }
}

// ============ LOGIN ============
async function login() {
  const email = document.getElementById("login-email").value.trim();
  const password = document.getElementById("login-password").value.trim();

  if (!email || !password) {
    alert("Please fill in both email and password.");
    return;
  }

  try {
    const res = await fetch(`${BASE_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    console.log("Login response:", data);

    if (res.ok) {
      localStorage.setItem("token", data.token);
      console.log("Login successful, redirecting...");
      window.location.href = "index.html";
    } else {
      alert(data.error || "Login failed.");
    }
  } catch (err) {
    console.error("Login error:", err);
    alert("Something went wrong during login.");
  }
}

// ============ Login Validator (optional helper) ============
function validateLogin(event) {
  event.preventDefault();
  login();
  return false;
}

// ============ REQUEST OTP ============
async function requestOTP() {
  const email = document.getElementById("forgot-email").value.trim();

  if (!email) {
    alert("Please enter your email.");
    return;
  }

  try {
    const res = await fetch(`${BASE_URL}/auth/forgot-password`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    const data = await res.json();
    console.log("OTP response:", data);

    if (res.ok) {
      alert("OTP sent to your email.");
      localStorage.setItem("resetEmail", email);
      window.location.href = "verify-otp.html";
    } else {
      alert(data.error || "Failed to send OTP.");
    }
  } catch (err) {
    console.error("OTP request error:", err);
    alert("Something went wrong while requesting OTP.");
  }
}

// ============ VERIFY OTP ============
async function verifyOTP() {
  const email = localStorage.getItem("resetEmail");
  const otp = document.getElementById("otp-input").value.trim();

  if (!otp) {
    alert("Please enter the OTP.");
    return;
  }

  try {
    const res = await fetch(`${BASE_URL}/auth/verify-otp`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, otp }),
    });

    const data = await res.json();
    console.log("OTP verification response:", data);

    if (res.ok) {
      alert("OTP verified. Now reset your password.");
      window.location.href = "reset-password.html";
    } else {
      alert(data.error || "OTP verification failed.");
    }
  } catch (err) {
    console.error("OTP verification error:", err);
    alert("Something went wrong during OTP verification.");
  }
}

// ============ RESET PASSWORD ============
async function resetPassword() {
  const email = localStorage.getItem("resetEmail");
  const newPassword = document.getElementById("new-password").value.trim();

  if (!newPassword || newPassword.length < 6) {
    alert("Password must be at least 6 characters long.");
    return;
  }

  try {
    const res = await fetch(`${BASE_URL}/auth/reset-password`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, newPassword }),
    });

    const data = await res.json();
    console.log("Password reset response:", data);

    if (res.ok) {
      alert("Password reset successful. Please login.");
      localStorage.removeItem("resetEmail");
      window.location.href = "login.html";
    } else {
      alert(data.error || "Password reset failed.");
    }
  } catch (err) {
    console.error("Password reset error:", err);
    alert("Something went wrong during password reset.");
  }
}
