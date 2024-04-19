// Get references to the sidebar and main section
const sidebar = document.querySelector('.left-side-section');
const mainSection = document.querySelector('.main-section');

// Get references to the toggle button and overlay (for closing the sidebar)
const toggleButton = document.querySelector('.toggle-button');
const overlay = document.querySelector('.overlay');

// Function to toggle the sidebar
function toggleSidebar() {
  sidebar.classList.toggle('show');
  mainSection.classList.toggle('shift');
}

// Event listener for the toggle button
toggleButton.addEventListener('click', toggleSidebar);

// Event listener for the overlay (to close the sidebar when clicked outside)
overlay.addEventListener('click', toggleSidebar);
