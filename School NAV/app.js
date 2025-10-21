// HCDC Room Finder Application
// Main application JavaScript file

// ========== Application State ==========
let currentUser = null; // Will store the logged-in user information
let currentPage = 'home-page'; // Default page to display

// ========== DOM Elements ==========
// Navigation elements
const navLinks = {
  home: document.getElementById('nav-home'),
  roomFinder: document.getElementById('nav-roomfinder')
};

// Pages
const pages = {
  home: document.getElementById('home-page'),
  roomFinder: document.getElementById('roomfinder-page'),
  thankYou: document.getElementById('thankyou-page')
};

// Login Modal
const loginBtn = document.getElementById('loginBtn');
const loginModal = document.getElementById('loginModal');
const closeModalBtn = document.querySelector('.close');
const loginForm = document.getElementById('loginForm');
const loginError = document.getElementById('loginError');
const thankyouLink = document.getElementById('thankyou-link');

// Room Finder elements
const buildingFilter = document.getElementById('building-filter');
const floorFilter = document.getElementById('floor-filter');
const roomTypeFilter = document.getElementById('room-type-filter');
const statusFilter = document.getElementById('status-filter');
const statusFilterContainer = document.getElementById('status-filter-container');
const statusLegend = document.getElementById('status-legend');
const roomsList = document.getElementById('rooms-list');
const buildingsGrid = document.getElementById('buildings-grid');

// Removed Courses elements

// ========== Event Listeners ==========
// Initialize the application when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', initializeApp);

// Navigation event listeners
navLinks.home.addEventListener('click', () => navigateTo('home-page'));
navLinks.roomFinder.addEventListener('click', () => navigateTo('roomfinder-page'));
thankyouLink.addEventListener('click', () => navigateTo('thankyou-page'));

// Login modal event listeners
loginBtn.addEventListener('click', openLoginModal);
closeModalBtn.addEventListener('click', closeLoginModal);
window.addEventListener('click', (e) => {
  if (e.target === loginModal) closeLoginModal();
});
loginForm.addEventListener('submit', handleLogin);

// Filter event listeners for Room Finder
buildingFilter.addEventListener('change', filterRooms);
floorFilter.addEventListener('change', filterRooms);
roomTypeFilter.addEventListener('change', filterRooms);
statusFilter.addEventListener('change', filterRooms);

// Removed Courses event listener

// ========== Application Initialization ==========
/**
 * Initialize the application, load data, and set up the UI
 */
function initializeApp() {
  // Populate building filter options
  populateBuildingFilter();
  
  // Populate floor filter options
  populateFloorFilter();
  
  // Load buildings on the home page
  loadBuildingCards();
  
  // Set up initial room filter state
  filterRooms();
  
  // Removed courses initialization
  
  // Check if user is logged in (from localStorage)
  const savedUser = localStorage.getItem('currentUser');
  if (savedUser) {
    currentUser = JSON.parse(savedUser);
    updateUIForLoggedInUser();
  }
}

// ========== Navigation Functions ==========
/**
 * Navigate to a specific page
 * @param {string} pageId - The ID of the page to navigate to
 */
function navigateTo(pageId) {
  // Hide all pages
  Object.values(pages).forEach(page => {
    page.classList.remove('active');
  });
  
  // Show the selected page
  document.getElementById(pageId).classList.add('active');
  
  // Update current page
  currentPage = pageId;
  
  // Update active nav link
  Object.values(navLinks).forEach(link => {
    link.classList.remove('active');
  });
  
  // Set the corresponding nav link as active
  switch (pageId) {
    case 'home-page':
      navLinks.home.classList.add('active');
      break;
    case 'roomfinder-page':
      navLinks.roomFinder.classList.add('active');
      break;
    case 'thankyou-page':
      // No nav link for thank you page
      break;
  }
}

// ========== Authentication Functions ==========
/**
 * Open the login modal
 */
function openLoginModal() {
  loginModal.classList.add('active');
  // Reset the form
  loginForm.reset();
  loginError.textContent = '';
}

/**
 * Close the login modal
 */
function closeLoginModal() {
  loginModal.classList.remove('active');
}

/**
 * Handle login form submission
 * @param {Event} e - The form submission event
 */
function handleLogin(e) {
  e.preventDefault();
  
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();
  
  // Find user with matching credentials
  const user = users.find(u => u.username === username && u.password === password);
  
  if (user) {
    // Store user in application state
    currentUser = user;
    
    // Save to localStorage for persistence
    localStorage.setItem('currentUser', JSON.stringify(user));
    
    // Update UI for logged in user
    updateUIForLoggedInUser();
    
    // Close modal
    closeLoginModal();
    
    // Show success message
    alert(`Welcome ${username}! You are now logged in.`);
  } else {
    // Show error message
    loginError.textContent = 'Invalid username or password. Please try again.';
  }
}

/**
 * Log out the current user
 */
function logoutUser() {
  // Clear user from application state
  currentUser = null;
  
  // Remove from localStorage
  localStorage.removeItem('currentUser');
  
  // Reset UI
  loginBtn.textContent = 'Login';
  loginBtn.onclick = openLoginModal;
  
  // Hide status filter and legend
  statusFilterContainer.style.display = 'none';
  statusLegend.style.display = 'none';
  
  // Refresh rooms display
  filterRooms();
}

/**
 * Update the UI for a logged-in user
 */
function updateUIForLoggedInUser() {
  // Change login button to a logout button
  loginBtn.textContent = 'Logout';
  loginBtn.onclick = logoutUser;
  
  // If user is 'full' access, show status filter and legend
  if (currentUser.type === 'full') {
    statusFilterContainer.style.display = 'flex';
    statusLegend.style.display = 'flex';
  }
  
  // Refresh rooms display with status indicators
  filterRooms();
}

// ========== Building Functions ==========
/**
 * Populate the buildings filter dropdown
 */
function populateBuildingFilter() {
  // Clear existing options except the first one
  while (buildingFilter.options.length > 1) {
    buildingFilter.remove(1);
  }
  
  // Add building options
  buildings.forEach(building => {
    const option = document.createElement('option');
    option.value = building.id;
    option.textContent = building.name;
    buildingFilter.appendChild(option);
  });
}

/**
 * Populate the floor filter dropdown
 */
function populateFloorFilter() {
  // Clear existing options except the first one
  while (floorFilter.options.length > 1) {
    floorFilter.remove(1);
  }
  
  // Add floor options
  floors.forEach(floor => {
    const option = document.createElement('option');
    option.value = floor;
    option.textContent = `Floor ${floor}`;
    floorFilter.appendChild(option);
  });
}

/**
 * Load building cards on the home page
 */
function loadBuildingCards() {
  buildingsGrid.innerHTML = '';
  
  buildings.forEach(building => {
    const card = document.createElement('div');
    card.className = 'building-card';
    card.onclick = () => {
      // Navigate to room finder with this building pre-selected
      navigateTo('roomfinder-page');
      buildingFilter.value = building.id;
      filterRooms();
    };
    
    card.innerHTML = `
      <img src="${building.imageUrl}" alt="${building.name}">
      <div class="building-info">
        <h4>${building.name}</h4>
        <p>${building.description}</p>
      </div>
    `;
    
    buildingsGrid.appendChild(card);
  });
}

// ========== Room Functions ==========
/**
 * Filter rooms based on selected criteria
 */
function filterRooms() {
  const selectedBuilding = buildingFilter.value;
  const selectedFloor = floorFilter.value;
  const selectedType = roomTypeFilter.value;
  const selectedStatus = statusFilter.value;
  
  // Filter rooms based on criteria
  let filteredRooms = rooms;
  
  if (selectedBuilding !== 'all') {
    filteredRooms = filteredRooms.filter(room => room.building === selectedBuilding);
  }
  
  if (selectedFloor !== 'all') {
    filteredRooms = filteredRooms.filter(room => room.floor === parseInt(selectedFloor));
  }
  
  if (selectedType !== 'all') {
    filteredRooms = filteredRooms.filter(room => room.type === selectedType);
  }
  
  if (currentUser && currentUser.type === 'full' && selectedStatus !== 'all') {
    filteredRooms = filteredRooms.filter(room => room.status === selectedStatus);
  }
  
  // Display filtered rooms
  displayRooms(filteredRooms);
}

/**
 * Display rooms in the rooms list
 * @param {Array} roomsToDisplay - The filtered rooms to display
 */
function displayRooms(roomsToDisplay) {
  roomsList.innerHTML = '';
  
  if (roomsToDisplay.length === 0) {
    roomsList.innerHTML = '<p class="no-rooms">No rooms match your criteria. Try adjusting filters.</p>';
    return;
  }
  
  roomsToDisplay.forEach(room => {
    const building = buildings.find(b => b.id === room.building);
    const roomItem = document.createElement('div');
    roomItem.className = 'room-item';
    
    // Status indicator HTML - only for full access users
    let statusHtml = '';
    if (currentUser && currentUser.type === 'full') {
      statusHtml = `
        <span class="status-indicator status-${room.status}"></span>
        <span>${room.status === 'available' ? 'Available' : 'Occupied'}</span>
      `;
    }
    
    roomItem.innerHTML = `
      <div class="room-header">
        <span class="room-number">${room.number}</span>
        <span class="room-status">${statusHtml}</span>
      </div>
      <div class="room-details">
        <p><strong>Building:</strong> ${building.name}</p>
        <p><strong>Floor:</strong> ${room.floor}</p>
        <p><strong>Type:</strong> ${capitalizeFirstLetter(room.type)}</p>
        <p><strong>Capacity:</strong> ${room.capacity} people</p>
      </div>
    `;
    
    roomsList.appendChild(roomItem);
  });
}

// Removed Course Functions section

// ========== Utility Functions ==========
/**
 * Capitalize the first letter of a string
 * @param {string} string - The string to capitalize
 * @returns {string} The capitalized string
 */
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// Removed getDepartmentName function (was only used for Courses)