import { options } from './config.js'; // Ensure you import options from config.js
// Wait for the DOM content to be fully loaded
function updateLayout() {
  // Assuming 'options' is an object that contains 'defaultTheme'
  const themeName = options.defaultTheme; // Get the default theme name from the 'options' object
  const themeStyle = options.styleUi
  // Select the target div element with the id 'tds'
  const targetDiv = document.getElementById('tds');

  // Create a new ID for the target div, using the theme name (e.g., 'theme-light')
  // You can customize the newId further if needed
  const newId = themeName; 
  const newClass= themeStyle

  // Set the new ID for the selected div element
  targetDiv.id = newId; // This will replace the current 'id' with the new one
  targetDiv.className = newClass;
  // If swapDivs is true, apply flex-direction: row-reverse to the theme div
  if (options.position) {
    const themeDiv = document.getElementById(themeName);
    const popupFab = document.querySelector('.popup_fab');

    // Desktop: Ensure it's a flex container with specific conditions
    if (window.innerWidth >= 768 && window.innerWidth >= window.innerHeight) {
      // Apply flex-direction changes for non-mobile or specific landscape resolutions
      if (options.position === 'left') {
        themeDiv.style.display = 'flex';
        themeDiv.style.flexDirection = 'row-reverse';
        popupFab.style.right = 0;  // Apply row-reverse for left position
      } else if (options.position === 'right') {
        themeDiv.style.display = 'flex';
        themeDiv.style.flexDirection = 'row'; // Apply row for right position
        popupFab.style.left = 0;  // Apply left position for the FAB
      }
    } else {
      // For mobile devices or specific portrait resolutions, reset styles
      themeDiv.style.display = '';
      themeDiv.style.flexDirection = ''; // Reset flex-direction
      popupFab.style.right = ''; // Reset right positioning for mobile
      popupFab.style.left = '';  // Reset left positioning for mobile
    }
  }

  const fabricsStyleDiv = document.querySelector('.fabrics_style');
  const stylePanelDiv = document.querySelector('.style_panel');
  const fabLink = document.querySelector('li.showfab');

  // If options.fabricShow is false, always hide the fabrics_style div and ensure style_panel is shown
  if (!options.fabricShow) {
    if (fabricsStyleDiv) {
      fabricsStyleDiv.style.display = 'none';
    }
    if (fabLink) {
      fabLink.style.display = 'none';
    }
    if (stylePanelDiv) {
      stylePanelDiv.style.display = 'block';
    }
  } else {
    // Desktop conditions
    if (window.innerWidth >= 768) {
      if (fabricsStyleDiv) {
        fabricsStyleDiv.style.display = 'block';
      }
      if (fabLink) {
        fabLink.style.display = 'flex';
      }
      if (stylePanelDiv) {
        stylePanelDiv.style.display = 'none';
      }
    } else {
      // Mobile conditions (width < 768px)
      if (fabricsStyleDiv) {
        fabricsStyleDiv.style.display = 'block';
      }
      if (fabLink) {
        fabLink.style.display = 'flex';
      }
      if (stylePanelDiv) {
        stylePanelDiv.style.display = 'none';
      }
    }
  }
}

// Call the updateLayout function when the DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  updateLayout();
});

// Call the updateLayout function when the window is resized
window.addEventListener('resize', function() {

  updateLayout();
});