// Settings page

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
  updateTime();
  setupSettingsTabs();
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

// Setup settings tabs
function setupSettingsTabs() {
  const tabs = document.querySelectorAll('.settings-tab');
  const panels = document.querySelectorAll('.settings-panel');
  
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetPanel = tab.dataset.tab;
      
      // Remove active class from all tabs
      tabs.forEach(t => {
        t.classList.remove('active', 'text-white', 'bg-blue-600');
        t.classList.add('text-gray-700');
      });
      
      // Add active class to clicked tab
      tab.classList.remove('text-gray-700');
      tab.classList.add('active', 'text-white', 'bg-blue-600');
      
      // Hide all panels
      panels.forEach(p => p.classList.add('hidden'));
      
      // Show target panel
      const panel = document.getElementById(`${targetPanel}-panel`);
      if (panel) {
        panel.classList.remove('hidden');
      }
    });
  });
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

