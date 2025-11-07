// Mock data
const mockAppointments = [
  {
    id: 1,
    type: 'wash',
    date: 'Today',
    time: '4:30 PM',
    machine: 'W-05',
    location: 'Chancellor Hall - Floor 2',
    status: 'confirmed'
  },
  {
    id: 2,
    type: 'dry',
    date: 'Today',
    time: '5:30 PM',
    machine: 'D-03',
    location: 'Chancellor Hall - Floor 2',
    status: 'confirmed'
  },
  {
    id: 3,
    type: 'wash',
    date: 'Tomorrow',
    time: '10:00 AM',
    machine: 'W-02',
    location: 'Chancellor Hall - Floor 1',
    status: 'pending'
  }
];

const mockTimers = [
  {
    id: 1,
    machine: 'Washer W-05',
    type: 'wash',
    totalTime: 45,
    remainingTime: 28,
    status: 'running',
    owner: 'You'
  },
  {
    id: 2,
    machine: 'Dryer D-01',
    type: 'dry',
    totalTime: 60,
    remainingTime: 8,
    status: 'running',
    owner: 'Other Student'
  },
  {
    id: 3,
    machine: 'Washer W-03',
    type: 'wash',
    totalTime: 45,
    remainingTime: 42,
    status: 'running',
    owner: 'Other Student'
  }
];

const mockMessages = [
  {
    id: 1,
    title: 'Maintenance Notice',
    content: 'Floor 3 washers will be under maintenance this Saturday.',
    author: 'Facilities Staff',
    timestamp: '2 hours ago',
    priority: 'high'
  },
  {
    id: 2,
    title: 'New Payment Option',
    content: 'You can now pay using mobile money!',
    author: 'Admin',
    timestamp: '1 day ago',
    priority: 'normal'
  },
  {
    id: 3,
    title: 'Extended Hours',
    content: 'Laundry rooms now open until 11 PM on weekdays.',
    author: 'Facilities Staff',
    timestamp: '3 days ago',
    priority: 'normal'
  }
];

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
  updateDateTime();
  renderAppointments();
  renderTimers();
  renderMessages();
  setupMobileMenu();
  
  // Update time every minute
  setInterval(updateDateTime, 60000);
  
  // Update timers every second
  setInterval(updateTimers, 1000);
});

// Update date and time display
function updateDateTime() {
  const now = new Date();
  
  // Update time
  const timeStr = now.toLocaleTimeString('en-US', { 
    hour: 'numeric', 
    minute: '2-digit',
    hour12: true 
  });
  document.getElementById('current-time').textContent = timeStr;
  
  // Update date
  const dateStr = now.toLocaleDateString('en-US', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
  document.getElementById('current-date').textContent = dateStr;
}

// Render appointments
function renderAppointments() {
  const container = document.getElementById('appointments-list');
  
  if (mockAppointments.length === 0) {
    container.innerHTML = `
      <div class="text-center py-8 text-gray-500">
        <svg class="w-12 h-12 mx-auto mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
        </svg>
        <p class="text-sm">No upcoming appointments</p>
        <a href="/user/appointments" class="inline-block mt-3 text-sm text-blue-600 hover:text-blue-700 font-medium">Schedule your first wash</a>
      </div>
    `;
    return;
  }
  
  container.innerHTML = mockAppointments.map(apt => `
    <div class="flex items-center gap-4 p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50/50 transition-all">
      <div class="flex-shrink-0 w-12 h-12 ${apt.type === 'wash' ? 'bg-blue-100' : 'bg-orange-100'} rounded-lg flex items-center justify-center">
        <svg class="w-6 h-6 ${apt.type === 'wash' ? 'text-blue-600' : 'text-orange-600'}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
        </svg>
      </div>
      <div class="flex-1 min-w-0">
        <div class="flex items-center gap-2">
          <p class="font-semibold text-gray-900 capitalize">${apt.type}</p>
          <span class="text-xs font-medium px-2 py-0.5 ${apt.status === 'confirmed' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'} rounded-full">
            ${apt.status}
          </span>
        </div>
        <p class="text-sm text-gray-600 mt-1">${apt.date} at ${apt.time}</p>
        <p class="text-xs text-gray-500 mt-1">${apt.machine} • ${apt.location}</p>
      </div>
      <div class="flex gap-2">
        <button onclick="rescheduleAppointment(${apt.id})" class="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors" title="Reschedule">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
          </svg>
        </button>
        <button onclick="cancelAppointment(${apt.id})" class="p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors" title="Cancel">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>
    </div>
  `).join('');
}

// Render timers
function renderTimers() {
  const container = document.getElementById('timers-list');
  
  container.innerHTML = mockTimers.map(timer => {
    const percentage = ((timer.totalTime - timer.remainingTime) / timer.totalTime) * 100;
    const minutes = Math.floor(timer.remainingTime);
    const isAlmostDone = timer.remainingTime < 10;
    
    return `
      <div class="p-4 border border-gray-200 rounded-lg ${timer.owner === 'You' ? 'bg-blue-50 border-blue-200' : ''}">
        <div class="flex items-center justify-between mb-2">
          <div class="flex items-center gap-2">
            <h3 class="font-semibold text-gray-900">${timer.machine}</h3>
            ${timer.owner === 'You' ? '<span class="text-xs font-medium px-2 py-0.5 bg-blue-600 text-white rounded-full">Your Machine</span>' : ''}
          </div>
          <span class="text-sm font-medium ${isAlmostDone ? 'text-green-600' : 'text-gray-700'}">${minutes} min left</span>
        </div>
        
        <div class="relative w-full h-2 bg-gray-200 rounded-full overflow-hidden">
          <div class="absolute top-0 left-0 h-full ${isAlmostDone ? 'bg-green-500' : 'bg-blue-600'} transition-all duration-1000" style="width: ${percentage}%"></div>
        </div>
        
        ${isAlmostDone && timer.owner === 'You' ? '<p class="text-xs text-green-600 font-medium mt-2">Almost done! Get ready to collect your laundry.</p>' : ''}
        ${isAlmostDone && timer.owner !== 'You' ? '<p class="text-xs text-gray-600 mt-2">Available soon</p>' : ''}
      </div>
    `;
  }).join('');
}

// Update timers countdown
function updateTimers() {
  mockTimers.forEach(timer => {
    if (timer.remainingTime > 0) {
      timer.remainingTime -= 1/60; // Decrease by 1 second (1/60 of a minute)
      if (timer.remainingTime < 0) timer.remainingTime = 0;
    }
  });
  renderTimers();
}

// Render messages
function renderMessages() {
  const container = document.getElementById('messages-list');
  
  container.innerHTML = mockMessages.slice(0, 3).map(msg => `
    <div class="p-3 ${msg.priority === 'high' ? 'bg-red-50 border border-red-200' : 'bg-gray-50'} rounded-lg">
      <div class="flex items-start gap-2">
        ${msg.priority === 'high' ? `
          <svg class="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
          </svg>
        ` : ''}
        <div class="flex-1">
          <h4 class="text-sm font-semibold text-gray-900">${msg.title}</h4>
          <p class="text-xs text-gray-600 mt-1">${msg.content}</p>
          <div class="flex items-center gap-2 mt-2">
            <span class="text-xs text-gray-500">${msg.author}</span>
            <span class="text-xs text-gray-400">•</span>
            <span class="text-xs text-gray-500">${msg.timestamp}</span>
          </div>
        </div>
      </div>
    </div>
  `).join('');
}

// Mobile menu functionality
function setupMobileMenu() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebar-overlay');
  
  menuBtn.addEventListener('click', () => {
    sidebar.classList.toggle('-translate-x-full');
    overlay.classList.toggle('hidden');
  });
  
  overlay.addEventListener('click', () => {
    sidebar.classList.add('-translate-x-full');
    overlay.classList.add('hidden');
  });
}

// Action functions
function cancelAppointment(id) {
  if (confirm('Are you sure you want to cancel this appointment?')) {
    const index = mockAppointments.findIndex(apt => apt.id === id);
    if (index > -1) {
      mockAppointments.splice(index, 1);
      renderAppointments();
      showNotification('Appointment cancelled successfully', 'success');
    }
  }
}

function rescheduleAppointment(id) {
  showNotification('Reschedule feature coming soon!', 'info');
}

function showNotification(message, type = 'info') {
  // Simple notification - you can enhance this with a proper toast library
  const colors = {
    success: 'bg-green-600',
    error: 'bg-red-600',
    info: 'bg-blue-600'
  };
  
  const notification = document.createElement('div');
  notification.className = `fixed top-4 right-4 ${colors[type]} text-white px-6 py-3 rounded-lg shadow-lg z-50 transition-all`;
  notification.textContent = message;
  
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.style.opacity = '0';
    setTimeout(() => notification.remove(), 300);
  }, 3000);
}

