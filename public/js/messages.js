// Mock messages data
const mockMessages = [
  {
    id: 1,
    category: 'maintenance',
    title: 'Floor 3 Maintenance - Saturday',
    content: 'All washing machines on Floor 3 will be under maintenance this Saturday from 8 AM to 2 PM. Please plan accordingly and use machines on other floors. We apologize for any inconvenience.',
    author: 'Facilities Staff',
    authorRole: 'Staff',
    timestamp: new Date('2025-11-07T13:45:00'),
    priority: 'high',
    pinned: true,
    targetGroup: 'All Users',
    editedAt: null
  },
  {
    id: 2,
    category: 'announcement',
    title: 'New Mobile Money Payment Option',
    content: 'Great news! You can now pay for your laundry services using mobile money. Simply add your mobile money number in the payment methods section. Supported providers: Digicel, Flow, and more.',
    author: 'Admin Team',
    authorRole: 'Admin',
    timestamp: new Date('2025-11-07T10:30:00'),
    priority: 'normal',
    pinned: true,
    targetGroup: 'All Users',
    editedAt: null
  },
  {
    id: 3,
    category: 'event',
    title: 'Extended Hours This Week',
    content: 'Due to popular demand, laundry rooms will be open until 11 PM on weekdays this week only. Regular hours (10 PM closing) will resume next week.',
    author: 'Facilities Management',
    authorRole: 'Staff',
    timestamp: new Date('2025-11-06T14:20:00'),
    priority: 'normal',
    pinned: false,
    targetGroup: 'All Users',
    editedAt: null
  },
  {
    id: 4,
    category: 'tip',
    title: 'Laundry Day Tips for Better Results',
    content: 'Sort your clothes by color and fabric type before washing. Use cold water for colors to prevent fading. Don\'t overload the machines - leave some room for clothes to move freely. Check pockets before washing!',
    author: 'Residence Life Team',
    authorRole: 'Staff',
    timestamp: new Date('2025-11-05T09:15:00'),
    priority: 'normal',
    pinned: false,
    targetGroup: 'All Users',
    editedAt: null
  },
  {
    id: 5,
    category: 'maintenance',
    title: 'Dryer D-08 Out of Service',
    content: 'Dryer D-08 in Irvine Hall is currently out of service. Our technicians are working on repairs. Expected to be back in service by Friday. Please use alternative dryers.',
    author: 'Maintenance Team',
    authorRole: 'Staff',
    timestamp: new Date('2025-11-04T11:45:00'),
    priority: 'high',
    pinned: false,
    targetGroup: 'Irvine Hall Residents',
    editedAt: null
  },
  {
    id: 6,
    category: 'announcement',
    title: 'Reminder: Keep Laundry Rooms Clean',
    content: 'Please help us maintain a clean environment by removing your items promptly after the cycle completes. Clean up any spills and properly dispose of dryer lint. Thank you for your cooperation!',
    author: 'Admin Team',
    authorRole: 'Admin',
    timestamp: new Date('2025-11-03T16:00:00'),
    priority: 'normal',
    pinned: false,
    targetGroup: 'All Users',
    editedAt: null
  },
  {
    id: 7,
    category: 'event',
    title: 'Laundry Workshop Next Tuesday',
    content: 'Join us for a free workshop on proper laundry care and stain removal techniques. Tuesday, Nov 14 at 6 PM in the Community Room. Refreshments will be provided. RSVP not required.',
    author: 'Residence Life Team',
    authorRole: 'Staff',
    timestamp: new Date('2025-11-02T12:30:00'),
    priority: 'normal',
    pinned: false,
    targetGroup: 'All Users',
    editedAt: null
  },
  {
    id: 8,
    category: 'tip',
    title: 'Save Money on Laundry',
    content: 'Top up your account with $20 or more and get a 5% bonus! Wash full loads to maximize value. Air dry when possible to save on dryer costs. Check for student discounts during off-peak hours.',
    author: 'Admin Team',
    authorRole: 'Admin',
    timestamp: new Date('2025-10-31T10:00:00'),
    priority: 'normal',
    pinned: false,
    targetGroup: 'All Users',
    editedAt: null
  },
  {
    id: 9,
    category: 'announcement',
    title: 'New Machines Installed in Taylor Hall',
    content: 'We\'ve added 3 new high-efficiency washers and 2 new dryers in Taylor Hall. These machines use less water and energy while providing excellent cleaning results. Give them a try!',
    author: 'Facilities Management',
    authorRole: 'Staff',
    timestamp: new Date('2025-10-30T08:45:00'),
    priority: 'normal',
    pinned: false,
    targetGroup: 'Taylor Hall Residents',
    editedAt: new Date('2025-10-30T14:20:00')
  },
  {
    id: 10,
    category: 'maintenance',
    title: 'Scheduled Maintenance - All Halls',
    content: 'Monthly maintenance inspection of all machines will occur on the last Sunday of each month from 6 AM to 8 AM. Most machines will remain available, but some may be temporarily offline.',
    author: 'Maintenance Team',
    authorRole: 'Staff',
    timestamp: new Date('2025-10-24T15:00:00'),
    priority: 'normal',
    pinned: false,
    targetGroup: 'All Users',
    editedAt: null
  }
];

let currentFilter = 'all';

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
  updateTime();
  renderMessages();
  setupFilterTabs();
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

// Setup filter tabs
function setupFilterTabs() {
  const tabs = document.querySelectorAll('.filter-tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Remove active class from all tabs
      tabs.forEach(t => {
        t.classList.remove('active', 'text-white', 'bg-blue-600', 'border-blue-600');
        t.classList.add('text-gray-600', 'border-transparent');
      });
      
      // Add active class to clicked tab
      tab.classList.remove('text-gray-600', 'border-transparent');
      tab.classList.add('active', 'text-white', 'bg-blue-600', 'border-blue-600');
      
      // Update filter and render messages
      currentFilter = tab.dataset.filter;
      renderMessages();
    });
  });
}

// Format timestamp helper
function formatTimestamp(date) {
  const now = new Date();
  const diffMs = now - date;
  const diffMins = Math.floor(diffMs / 60000);
  const diffHours = Math.floor(diffMs / 3600000);
  const diffDays = Math.floor(diffMs / 86400000);
  
  const timeStr = date.toLocaleTimeString('en-US', { 
    hour: 'numeric', 
    minute: '2-digit',
    hour12: true 
  });
  
  const dateStr = date.toLocaleDateString('en-US', { 
    month: 'short', 
    day: 'numeric',
    year: 'numeric'
  });
  
  let relativeTime;
  if (diffMins < 60) {
    relativeTime = `${diffMins} min${diffMins !== 1 ? 's' : ''} ago`;
  } else if (diffHours < 24) {
    relativeTime = `${diffHours} hour${diffHours !== 1 ? 's' : ''} ago`;
  } else if (diffDays < 7) {
    relativeTime = `${diffDays} day${diffDays !== 1 ? 's' : ''} ago`;
  } else {
    relativeTime = dateStr;
  }
  
  return {
    relative: relativeTime,
    full: `${dateStr} at ${timeStr}`,
    date: dateStr,
    time: timeStr
  };
}

// Render messages
function renderMessages() {
  const container = document.getElementById('messages-container');
  
  // Filter messages
  const filteredMessages = currentFilter === 'all' 
    ? mockMessages 
    : mockMessages.filter(msg => msg.category === currentFilter);
  
  if (filteredMessages.length === 0) {
    container.innerHTML = `
      <div class="bg-white rounded-xl border border-gray-200 p-12 text-center">
        <svg class="w-16 h-16 mx-auto mb-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"/>
        </svg>
        <h3 class="text-lg font-semibold text-gray-900 mb-2">No Messages Found</h3>
        <p class="text-sm text-gray-600">There are no messages in this category.</p>
      </div>
    `;
    return;
  }
  
  container.innerHTML = filteredMessages.map(msg => {
    const categoryConfig = getCategoryConfig(msg.category);
    const timestamps = formatTimestamp(msg.timestamp);
    
    const priorityBadge = msg.priority === 'high' 
      ? '<span class="inline-flex items-center gap-1 px-2 py-0.5 bg-red-100 text-red-700 rounded text-xs font-medium"><svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/></svg> Important</span>'
      : '';
    
    const pinnedBadge = msg.pinned 
      ? '<span class="inline-flex items-center gap-1 px-2 py-0.5 bg-blue-100 text-blue-700 rounded text-xs font-medium"><svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"/></svg> Pinned</span>'
      : '';
    
    const editedBadge = msg.editedAt 
      ? `<span class="inline-flex items-center gap-1 px-2 py-0.5 bg-gray-100 text-gray-600 rounded text-xs font-medium" title="Last edited ${formatTimestamp(msg.editedAt).full}">Edited</span>`
      : '';
      
    const targetGroupBadge = msg.targetGroup !== 'All Users'
      ? `<span class="inline-flex items-center gap-1 px-2 py-0.5 bg-purple-100 text-purple-700 rounded text-xs font-medium"><svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"/></svg> ${msg.targetGroup}</span>`
      : '';
    
    return `
      <div class="bg-white rounded-xl border-2 ${msg.pinned ? 'border-blue-200' : 'border-gray-200'} p-6 hover:shadow-md transition-shadow">
        <!-- Message Header -->
        <div class="flex items-start justify-between mb-4">
          <div class="flex items-start gap-3 flex-1">
            <div class="w-10 h-10 ${categoryConfig.bgColor} rounded-lg flex items-center justify-center flex-shrink-0">
              <svg class="w-5 h-5 ${categoryConfig.iconColor}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                ${categoryConfig.icon}
              </svg>
            </div>
            <div class="flex-1 min-w-0">
              <div class="flex items-center gap-2 flex-wrap mb-1">
                <h3 class="text-lg font-bold text-gray-900">${msg.title}</h3>
                ${pinnedBadge}
                ${priorityBadge}
                ${targetGroupBadge}
                ${editedBadge}
              </div>
              <div class="flex items-center gap-3 text-xs text-gray-500 flex-wrap">
                <span class="font-medium">${msg.author}</span>
                <span>•</span>
                <span title="${timestamps.full}">${timestamps.relative}</span>
                <span>•</span>
                <span class="px-2 py-0.5 ${categoryConfig.badgeColor} rounded">${categoryConfig.label}</span>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Message Content -->
        <p class="text-sm text-gray-700 leading-relaxed mb-4">${msg.content}</p>
        
        <!-- Message Footer -->
        <div class="flex items-center justify-between pt-4 border-t border-gray-200 flex-wrap gap-3">
          <div class="flex flex-col text-xs text-gray-500">
            <span>Posted: ${timestamps.date} at ${timestamps.time}</span>
            ${msg.editedAt ? `<span class="text-gray-400 mt-0.5">Last edited: ${formatTimestamp(msg.editedAt).full}</span>` : ''}
          </div>
          <div class="flex gap-2">
            <!-- Staff Only Controls (Hidden for regular users) -->
            <button onclick="editMessage(${msg.id})" class="hidden px-3 py-1.5 text-xs font-medium text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors" title="Staff Only">
              <svg class="w-3 h-3 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
              </svg>
              Edit
            </button>
            <button onclick="deleteMessage(${msg.id})" class="hidden px-3 py-1.5 text-xs font-medium text-red-600 bg-red-50 hover:bg-red-100 rounded-lg transition-colors" title="Staff Only">
              <svg class="w-3 h-3 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
              </svg>
              Delete
            </button>
            <button class="px-3 py-1.5 text-xs font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors">
              Share
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// Staff functions (would check authorization in real implementation)
function editMessage(id) {
  alert('Staff Only: Edit message functionality. This would open an edit modal for authorized staff members.');
}

function deleteMessage(id) {
  if (confirm('Staff Only: Are you sure you want to delete this message? This action cannot be undone.')) {
    alert('Message would be deleted (staff authorization required).');
  }
}

// Get category configuration
function getCategoryConfig(category) {
  const configs = {
    announcement: {
      label: 'Announcement',
      bgColor: 'bg-blue-100',
      iconColor: 'text-blue-600',
      badgeColor: 'bg-blue-100 text-blue-700',
      icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"/>'
    },
    maintenance: {
      label: 'Maintenance',
      bgColor: 'bg-orange-100',
      iconColor: 'text-orange-600',
      badgeColor: 'bg-orange-100 text-orange-700',
      icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>'
    },
    event: {
      label: 'Event',
      bgColor: 'bg-purple-100',
      iconColor: 'text-purple-600',
      badgeColor: 'bg-purple-100 text-purple-700',
      icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>'
    },
    tip: {
      label: 'Tip',
      bgColor: 'bg-green-100',
      iconColor: 'text-green-600',
      badgeColor: 'bg-green-100 text-green-700',
      icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>'
    }
  };
  
  return configs[category] || configs.announcement;
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

