// Payments page - minimal setup

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
  updateTime();
  setupMobileMenu();
  
  // Update time every minute
  setInterval(updateTime, 60000);
});

// Update time display
function updateTime() {
  const now = new Date();
  const timeStr = now.toLocaleTimeString('en-US', { 
    hour: 'numeric', 
    minute: '2-digit',
    hour12: true 
  });
  const timeElement = document.getElementById('current-time');
  if (timeElement) {
    timeElement.textContent = timeStr;
  }
}

// Mobile menu functionality
function setupMobileMenu() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebar-overlay');
  
  if (!menuBtn || !sidebar || !overlay) return;
  
  menuBtn.addEventListener('click', () => {
    sidebar.classList.toggle('-translate-x-full');
    overlay.classList.toggle('hidden');
  });
  
  overlay.addEventListener('click', () => {
    sidebar.classList.add('-translate-x-full');
    overlay.classList.add('hidden');
  });
}

