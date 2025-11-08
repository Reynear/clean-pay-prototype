// Default credentials
const CREDENTIALS = {
  user: {
    email: "user@mymona.uwi.edu",
    password: "user123",
    dashboard: "/html/user/dashboard.html"
  },
  staff: {
    email: "staff@mymona.uwi.edu",
    password: "staff123",
    dashboard: "/html/staff/dashboard.html"
  }
};

// Wait for DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
  // Handle login form submission
  document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();
    e.stopPropagation();
    
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
  
  // Check if credentials match user account
  if (email === CREDENTIALS.user.email && password === CREDENTIALS.user.password) {
    sessionStorage.setItem("userType", "user");
    sessionStorage.setItem("userEmail", email);
    window.location.href = CREDENTIALS.user.dashboard;
  } 
  // Check if credentials match staff account
  else if (email === CREDENTIALS.staff.email && password === CREDENTIALS.staff.password) {
    sessionStorage.setItem("userType", "staff");
    sessionStorage.setItem("userEmail", email);
    window.location.href = CREDENTIALS.staff.dashboard;
  } 
  // Invalid credentials
  else {
    alert("Invalid email or password. Please try again.");
  }
    
    return false;
  });
});
