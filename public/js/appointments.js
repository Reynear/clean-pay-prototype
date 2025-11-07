// Booking state
const bookingState = {
  hall: null,
  date: null,
  time: null,
  machineType: null,
  machine: null,
  location: null,
  cost: 0
};

// Available halls
const halls = [
  { id: 'chancellor', name: 'Chancellor Hall', machineCount: 11 },
  { id: 'irvine', name: 'Irvine Hall', machineCount: 8 },
  { id: 'taylor', name: 'Taylor Hall', machineCount: 10 },
  { id: 'mary-seacole', name: 'Mary Seacole Hall', machineCount: 6 },
  { id: 'rex-nettleford', name: 'Rex Nettleford Hall', machineCount: 9 }
];

// Mock data for available machines (organized by hall)
const machines = {
  chancellor: {
    washer: [
      { id: 'W-01', name: 'Washer W-01', location: 'Chancellor Hall - Floor 1', hall: 'chancellor', floor: 1, cost: 2.50 },
      { id: 'W-02', name: 'Washer W-02', location: 'Chancellor Hall - Floor 1', hall: 'chancellor', floor: 1, cost: 2.50 },
      { id: 'W-03', name: 'Washer W-03', location: 'Chancellor Hall - Floor 2', hall: 'chancellor', floor: 2, cost: 2.50 },
      { id: 'W-04', name: 'Washer W-04', location: 'Chancellor Hall - Floor 2', hall: 'chancellor', floor: 2, cost: 2.50 },
      { id: 'W-05', name: 'Washer W-05', location: 'Chancellor Hall - Floor 2', hall: 'chancellor', floor: 2, cost: 2.50 },
      { id: 'W-06', name: 'Washer W-06', location: 'Chancellor Hall - Floor 3', hall: 'chancellor', floor: 3, cost: 2.50 }
    ],
    dryer: [
      { id: 'D-01', name: 'Dryer D-01', location: 'Chancellor Hall - Floor 1', hall: 'chancellor', floor: 1, cost: 2.00 },
      { id: 'D-02', name: 'Dryer D-02', location: 'Chancellor Hall - Floor 1', hall: 'chancellor', floor: 1, cost: 2.00 },
      { id: 'D-03', name: 'Dryer D-03', location: 'Chancellor Hall - Floor 2', hall: 'chancellor', floor: 2, cost: 2.00 },
      { id: 'D-04', name: 'Dryer D-04', location: 'Chancellor Hall - Floor 2', hall: 'chancellor', floor: 2, cost: 2.00 },
      { id: 'D-05', name: 'Dryer D-05', location: 'Chancellor Hall - Floor 3', hall: 'chancellor', floor: 3, cost: 2.00 }
    ]
  },
  irvine: {
    washer: [
      { id: 'W-07', name: 'Washer W-07', location: 'Irvine Hall - Floor 1', hall: 'irvine', floor: 1, cost: 2.50 },
      { id: 'W-08', name: 'Washer W-08', location: 'Irvine Hall - Floor 1', hall: 'irvine', floor: 1, cost: 2.50 },
      { id: 'W-09', name: 'Washer W-09', location: 'Irvine Hall - Floor 2', hall: 'irvine', floor: 2, cost: 2.50 },
      { id: 'W-10', name: 'Washer W-10', location: 'Irvine Hall - Floor 2', hall: 'irvine', floor: 2, cost: 2.50 }
    ],
    dryer: [
      { id: 'D-06', name: 'Dryer D-06', location: 'Irvine Hall - Floor 1', hall: 'irvine', floor: 1, cost: 2.00 },
      { id: 'D-07', name: 'Dryer D-07', location: 'Irvine Hall - Floor 1', hall: 'irvine', floor: 1, cost: 2.00 },
      { id: 'D-08', name: 'Dryer D-08', location: 'Irvine Hall - Floor 2', hall: 'irvine', floor: 2, cost: 2.00 },
      { id: 'D-09', name: 'Dryer D-09', location: 'Irvine Hall - Floor 2', hall: 'irvine', floor: 2, cost: 2.00 }
    ]
  },
  taylor: {
    washer: [
      { id: 'W-11', name: 'Washer W-11', location: 'Taylor Hall - Floor 1', hall: 'taylor', floor: 1, cost: 2.50 },
      { id: 'W-12', name: 'Washer W-12', location: 'Taylor Hall - Floor 1', hall: 'taylor', floor: 1, cost: 2.50 },
      { id: 'W-13', name: 'Washer W-13', location: 'Taylor Hall - Floor 2', hall: 'taylor', floor: 2, cost: 2.50 },
      { id: 'W-14', name: 'Washer W-14', location: 'Taylor Hall - Floor 3', hall: 'taylor', floor: 3, cost: 2.50 },
      { id: 'W-15', name: 'Washer W-15', location: 'Taylor Hall - Floor 3', hall: 'taylor', floor: 3, cost: 2.50 }
    ],
    dryer: [
      { id: 'D-10', name: 'Dryer D-10', location: 'Taylor Hall - Floor 1', hall: 'taylor', floor: 1, cost: 2.00 },
      { id: 'D-11', name: 'Dryer D-11', location: 'Taylor Hall - Floor 2', hall: 'taylor', floor: 2, cost: 2.00 },
      { id: 'D-12', name: 'Dryer D-12', location: 'Taylor Hall - Floor 2', hall: 'taylor', floor: 2, cost: 2.00 },
      { id: 'D-13', name: 'Dryer D-13', location: 'Taylor Hall - Floor 3', hall: 'taylor', floor: 3, cost: 2.00 },
      { id: 'D-14', name: 'Dryer D-14', location: 'Taylor Hall - Floor 3', hall: 'taylor', floor: 3, cost: 2.00 }
    ]
  },
  'mary-seacole': {
    washer: [
      { id: 'W-16', name: 'Washer W-16', location: 'Mary Seacole Hall - Floor 1', hall: 'mary-seacole', floor: 1, cost: 2.50 },
      { id: 'W-17', name: 'Washer W-17', location: 'Mary Seacole Hall - Floor 2', hall: 'mary-seacole', floor: 2, cost: 2.50 },
      { id: 'W-18', name: 'Washer W-18', location: 'Mary Seacole Hall - Floor 2', hall: 'mary-seacole', floor: 2, cost: 2.50 }
    ],
    dryer: [
      { id: 'D-15', name: 'Dryer D-15', location: 'Mary Seacole Hall - Floor 1', hall: 'mary-seacole', floor: 1, cost: 2.00 },
      { id: 'D-16', name: 'Dryer D-16', location: 'Mary Seacole Hall - Floor 2', hall: 'mary-seacole', floor: 2, cost: 2.00 },
      { id: 'D-17', name: 'Dryer D-17', location: 'Mary Seacole Hall - Floor 2', hall: 'mary-seacole', floor: 2, cost: 2.00 }
    ]
  },
  'rex-nettleford': {
    washer: [
      { id: 'W-19', name: 'Washer W-19', location: 'Rex Nettleford Hall - Floor 1', hall: 'rex-nettleford', floor: 1, cost: 2.50 },
      { id: 'W-20', name: 'Washer W-20', location: 'Rex Nettleford Hall - Floor 1', hall: 'rex-nettleford', floor: 1, cost: 2.50 },
      { id: 'W-21', name: 'Washer W-21', location: 'Rex Nettleford Hall - Floor 2', hall: 'rex-nettleford', floor: 2, cost: 2.50 },
      { id: 'W-22', name: 'Washer W-22', location: 'Rex Nettleford Hall - Floor 3', hall: 'rex-nettleford', floor: 3, cost: 2.50 }
    ],
    dryer: [
      { id: 'D-18', name: 'Dryer D-18', location: 'Rex Nettleford Hall - Floor 1', hall: 'rex-nettleford', floor: 1, cost: 2.00 },
      { id: 'D-19', name: 'Dryer D-19', location: 'Rex Nettleford Hall - Floor 2', hall: 'rex-nettleford', floor: 2, cost: 2.00 },
      { id: 'D-20', name: 'Dryer D-20', location: 'Rex Nettleford Hall - Floor 2', hall: 'rex-nettleford', floor: 2, cost: 2.00 },
      { id: 'D-21', name: 'Dryer D-21', location: 'Rex Nettleford Hall - Floor 3', hall: 'rex-nettleford', floor: 3, cost: 2.00 },
      { id: 'D-22', name: 'Dryer D-22', location: 'Rex Nettleford Hall - Floor 3', hall: 'rex-nettleford', floor: 3, cost: 2.00 }
    ]
  }
};

// Mock booked slots (simulate some machines being unavailable)
const bookedSlots = [
  { date: getTodayDateString(), time: '9:00 AM', machineId: 'W-01' },
  { date: getTodayDateString(), time: '10:00 AM', machineId: 'W-02' },
  { date: getTodayDateString(), time: '2:00 PM', machineId: 'D-01' },
  { date: getTomorrowDateString(), time: '8:00 AM', machineId: 'W-03' }
];

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
  updateTime();
  renderHallSelector();
  renderDateSelector();
  renderTimeSlots();
  renderMachineTypes();
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
  document.getElementById('current-time').textContent = timeStr;
}

// Render hall selector
function renderHallSelector() {
  const dropdown = document.getElementById('hall-selector');
  
  // Keep the default option and add hall options
  const defaultOption = '<option value="" selected disabled>Choose a residence hall...</option>';
  const hallOptions = halls.map(hall => 
    `<option value="${hall.id}">${hall.name} (${hall.machineCount} machines)</option>`
  ).join('');
  
  dropdown.innerHTML = defaultOption + hallOptions;
  
  // Add event listener for hall selection
  dropdown.addEventListener('change', (e) => {
    const selectedHallId = e.target.value;
    const selectedHall = halls.find(h => h.id === selectedHallId);
    if (selectedHall) {
      selectHall(selectedHallId, selectedHall.name);
    }
  });
}

// Select hall
function selectHall(hallId, hallName) {
  bookingState.hall = hallId;
  
  // Update summary
  document.getElementById('summary-hall').textContent = hallName;
  
  // Reset machine type and machine selection when hall changes
  bookingState.machineType = null;
  bookingState.machine = null;
  bookingState.cost = 0;
  
  // Update machine types display
  renderMachineTypes();
  
  // Hide machine selector
  document.getElementById('machine-selector-container').style.display = 'none';
  
  // Reset UI states
  document.querySelectorAll('.machine-type-btn').forEach(btn => {
    btn.classList.remove('border-blue-600', 'bg-blue-100');
    btn.classList.add('border-gray-200');
  });
  
  // Update summary fields
  document.getElementById('summary-type').textContent = 'Not selected';
  document.getElementById('summary-machine').textContent = 'Not selected';
  document.getElementById('summary-location').textContent = 'Not selected';
  document.getElementById('summary-cost').textContent = '$0.00';
  
  updateBookingButton();
}

// Helper to get today's date string
function getTodayDateString() {
  const today = new Date();
  return today.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
}

// Helper to get tomorrow's date string
function getTomorrowDateString() {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  return tomorrow.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
}

// Render date selector (next 7 days)
function renderDateSelector() {
  const container = document.getElementById('date-selector');
  const dates = [];
  
  for (let i = 0; i < 7; i++) {
    const date = new Date();
    date.setDate(date.getDate() + i);
    
    const dayName = date.toLocaleDateString('en-US', { weekday: 'short' });
    const dayNum = date.getDate();
    const monthName = date.toLocaleDateString('en-US', { month: 'short' });
    const fullDate = date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
    const isToday = i === 0;
    
    dates.push({ dayName, dayNum, monthName, fullDate, isToday });
  }
  
  container.innerHTML = dates.map(date => `
    <button 
      onclick="selectDate('${date.fullDate}')" 
      class="date-btn flex flex-col items-center gap-1 p-3 border-2 border-gray-200 rounded-lg hover:border-blue-400 hover:bg-blue-50 transition-all ${date.isToday ? 'bg-blue-50' : ''}">
      <span class="text-xs font-medium text-gray-500">${date.dayName}</span>
      <span class="text-lg font-bold text-gray-900">${date.dayNum}</span>
      <span class="text-xs text-gray-600">${date.monthName}</span>
      ${date.isToday ? '<span class="text-xs font-semibold text-blue-600 mt-1">Today</span>' : ''}
    </button>
  `).join('');
}

// Select date
function selectDate(date) {
  bookingState.date = date;
  
  // Update UI
  document.querySelectorAll('.date-btn').forEach(btn => {
    btn.classList.remove('border-blue-600', 'bg-blue-100');
    btn.classList.add('border-gray-200');
  });
  
  event.target.closest('.date-btn').classList.remove('border-gray-200');
  event.target.closest('.date-btn').classList.add('border-blue-600', 'bg-blue-100');
  
  // Update summary
  document.getElementById('summary-date').textContent = date;
  
  updateBookingButton();
}

// Render time slots
function renderTimeSlots() {
  const morningTimes = ['8:00 AM', '8:30 AM', '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM'];
  const afternoonTimes = ['12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM'];
  const eveningTimes = ['5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM', '9:00 PM', '9:30 PM'];
  
  renderTimeSlotGroup('morning-slots', morningTimes);
  renderTimeSlotGroup('afternoon-slots', afternoonTimes);
  renderTimeSlotGroup('evening-slots', eveningTimes);
}

// Render a group of time slots
function renderTimeSlotGroup(containerId, times) {
  const container = document.getElementById(containerId);
  
  container.innerHTML = times.map(time => {
    const isPast = isTimePast(time);
    return `
      <button 
        onclick="selectTime('${time}')" 
        class="time-btn px-4 py-2.5 text-sm font-medium border-2 border-gray-200 rounded-lg hover:border-blue-400 hover:bg-blue-50 transition-all ${isPast ? 'opacity-50 cursor-not-allowed' : ''}"
        ${isPast ? 'disabled' : ''}>
        ${time}
      </button>
    `;
  }).join('');
}

// Check if time is in the past (only for today)
function isTimePast(time) {
  if (!bookingState.date || bookingState.date !== getTodayDateString()) {
    return false;
  }
  
  const now = new Date();
  const [timeStr, period] = time.split(' ');
  let [hours, minutes] = timeStr.split(':').map(Number);
  
  if (period === 'PM' && hours !== 12) hours += 12;
  if (period === 'AM' && hours === 12) hours = 0;
  
  const timeDate = new Date();
  timeDate.setHours(hours, minutes, 0, 0);
  
  return timeDate < now;
}

// Select time
function selectTime(time) {
  if (isTimePast(time)) return;
  
  bookingState.time = time;
  
  // Update UI
  document.querySelectorAll('.time-btn').forEach(btn => {
    btn.classList.remove('border-blue-600', 'bg-blue-100');
    btn.classList.add('border-gray-200');
  });
  
  event.target.classList.remove('border-gray-200');
  event.target.classList.add('border-blue-600', 'bg-blue-100');
  
  // Update summary
  document.getElementById('summary-time').textContent = time;
  
  updateBookingButton();
}

// Render machine types
function renderMachineTypes() {
  const container = document.getElementById('machine-type-selector');
  
  // Only render if hall is selected
  if (!bookingState.hall) {
    container.innerHTML = `
      <div class="col-span-2 text-center py-8 text-gray-500">
        <p class="text-sm">Please select a hall first</p>
      </div>
    `;
    return;
  }
  
  const hallMachines = machines[bookingState.hall];
  
  const types = [
    {
      id: 'washer',
      name: 'Washer',
      icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>`,
      duration: '45 min',
      cost: '$2.50',
      available: hallMachines.washer.length
    },
    {
      id: 'dryer',
      name: 'Dryer',
      icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/>`,
      duration: '60 min',
      cost: '$2.00',
      available: hallMachines.dryer.length
    }
  ];
  
  container.innerHTML = types.map(type => `
    <button 
      onclick="selectMachineType('${type.id}', ${type.cost.replace('$', '')})" 
      class="machine-type-btn flex flex-col items-start gap-3 p-4 border-2 border-gray-200 rounded-lg hover:border-blue-400 hover:bg-blue-50 transition-all text-left">
      <div class="flex items-center justify-between w-full">
        <div class="w-12 h-12 bg-${type.id === 'washer' ? 'blue' : 'orange'}-100 rounded-lg flex items-center justify-center">
          <svg class="w-6 h-6 text-${type.id === 'washer' ? 'blue' : 'orange'}-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            ${type.icon}
          </svg>
        </div>
        <span class="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded">${type.available} available</span>
      </div>
      <div>
        <h3 class="text-base font-bold text-gray-900">${type.name}</h3>
        <p class="text-sm text-gray-600 mt-1">${type.duration} cycle</p>
        <p class="text-lg font-bold text-gray-900 mt-2">${type.cost}</p>
      </div>
    </button>
  `).join('');
}

// Select machine type
function selectMachineType(type, cost) {
  bookingState.machineType = type;
  bookingState.cost = cost;
  
  // Update UI
  document.querySelectorAll('.machine-type-btn').forEach(btn => {
    btn.classList.remove('border-blue-600', 'bg-blue-100');
    btn.classList.add('border-gray-200');
  });
  
  event.target.closest('.machine-type-btn').classList.remove('border-gray-200');
  event.target.closest('.machine-type-btn').classList.add('border-blue-600', 'bg-blue-100');
  
  // Update summary
  document.getElementById('summary-type').textContent = type.charAt(0).toUpperCase() + type.slice(1);
  document.getElementById('summary-cost').textContent = `$${cost.toFixed(2)}`;
  
  // Show machine selector
  renderAvailableMachines(type);
  document.getElementById('machine-selector-container').style.display = 'block';
  
  updateBookingButton();
}

// Render available machines
function renderAvailableMachines(type) {
  const container = document.getElementById('machine-selector');
  
  if (!bookingState.hall) {
    container.innerHTML = `
      <div class="col-span-3 text-center py-8 text-gray-500">
        <p class="text-sm">Please select a hall first</p>
      </div>
    `;
    return;
  }
  
  const availableMachines = machines[bookingState.hall][type];
  
  container.innerHTML = availableMachines.map(machine => {
    const isBooked = isMachineBooked(machine.id);
    return `
      <button 
        onclick="selectMachine('${machine.id}', '${machine.name}', '${machine.location}')" 
        class="machine-btn flex flex-col items-center gap-2 p-4 border-2 border-gray-200 rounded-lg hover:border-blue-400 hover:bg-blue-50 transition-all ${isBooked ? 'opacity-50 cursor-not-allowed' : ''}"
        ${isBooked ? 'disabled' : ''}>
        <div class="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
          <span class="text-sm font-bold text-gray-700">${machine.id}</span>
        </div>
        <div class="text-center">
          <p class="text-sm font-semibold text-gray-900">${machine.id}</p>
          <p class="text-xs text-gray-600 mt-1">Floor ${machine.floor}</p>
          ${isBooked ? '<span class="inline-block mt-2 text-xs font-medium text-red-600 bg-red-50 px-2 py-0.5 rounded">Booked</span>' : '<span class="inline-block mt-2 text-xs font-medium text-green-600 bg-green-50 px-2 py-0.5 rounded">Available</span>'}
        </div>
      </button>
    `;
  }).join('');
}

// Check if machine is booked for selected date and time
function isMachineBooked(machineId) {
  return bookedSlots.some(slot => 
    slot.machineId === machineId && 
    slot.date === bookingState.date && 
    slot.time === bookingState.time
  );
}

// Select machine
function selectMachine(id, name, location) {
  if (isMachineBooked(id)) return;
  
  bookingState.machine = id;
  bookingState.location = location;
  
  // Update UI
  document.querySelectorAll('.machine-btn').forEach(btn => {
    btn.classList.remove('border-blue-600', 'bg-blue-100');
    btn.classList.add('border-gray-200');
  });
  
  event.target.closest('.machine-btn').classList.remove('border-gray-200');
  event.target.closest('.machine-btn').classList.add('border-blue-600', 'bg-blue-100');
  
  // Update summary
  document.getElementById('summary-machine').textContent = id;
  document.getElementById('summary-location').textContent = location;
  
  updateBookingButton();
}

// Update booking button state
function updateBookingButton() {
  const btn = document.getElementById('confirm-booking-btn');
  const isComplete = bookingState.hall && bookingState.date && bookingState.time && bookingState.machineType && bookingState.machine;
  
  btn.disabled = !isComplete;
  
  if (isComplete) {
    btn.textContent = 'Confirm Booking';
  }
}

// Confirm booking
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('confirm-booking-btn').addEventListener('click', () => {
    if (!bookingState.hall || !bookingState.date || !bookingState.time || !bookingState.machineType || !bookingState.machine) {
      return;
    }
    
    // Show confirmation
    showConfirmationModal();
  });
});

// Show confirmation modal
function showConfirmationModal() {
  // Get hall name
  const hallName = halls.find(h => h.id === bookingState.hall)?.name || bookingState.hall;
  
  const modal = document.createElement('div');
  modal.className = 'fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900 bg-opacity-50';
  modal.innerHTML = `
    <div class="bg-white rounded-xl p-6 max-w-md w-full">
      <div class="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mx-auto mb-4">
        <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
        </svg>
      </div>
      <h2 class="text-xl font-bold text-gray-900 text-center mb-2">Booking Confirmed!</h2>
      <p class="text-sm text-gray-600 text-center mb-6">Your appointment has been successfully scheduled.</p>
      
      <div class="space-y-3 mb-6 bg-gray-50 rounded-lg p-4">
        <div class="flex justify-between text-sm">
          <span class="text-gray-600">Hall:</span>
          <span class="font-semibold text-gray-900">${hallName}</span>
        </div>
        <div class="flex justify-between text-sm">
          <span class="text-gray-600">Date:</span>
          <span class="font-semibold text-gray-900">${bookingState.date}</span>
        </div>
        <div class="flex justify-between text-sm">
          <span class="text-gray-600">Time:</span>
          <span class="font-semibold text-gray-900">${bookingState.time}</span>
        </div>
        <div class="flex justify-between text-sm">
          <span class="text-gray-600">Machine:</span>
          <span class="font-semibold text-gray-900">${bookingState.machine}</span>
        </div>
        <div class="flex justify-between text-sm">
          <span class="text-gray-600">Location:</span>
          <span class="font-semibold text-gray-900">${bookingState.location}</span>
        </div>
        <div class="flex justify-between text-sm pt-3 border-t border-gray-200">
          <span class="text-gray-600">Cost:</span>
          <span class="font-bold text-gray-900 text-lg">$${bookingState.cost.toFixed(2)}</span>
        </div>
      </div>
      
      <div class="flex gap-3">
        <button onclick="window.location.href='/user/dashboard'" class="flex-1 py-2.5 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
          Go to Dashboard
        </button>
        <button onclick="location.reload()" class="flex-1 py-2.5 bg-white border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
          Book Another
        </button>
      </div>
    </div>
  `;
  
  document.body.appendChild(modal);
  
  // Close on background click
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.remove();
    }
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

// Show notification
function showNotification(message, type = 'info') {
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

