// Function to create a new tab/frame and join the game
function createNewTab() {
  // Open a new tab/frame and navigate to the game URL
  const newTab = window.open("https://sploop.io", "_blank");

  // Wait for the new tab/frame to load
  setTimeout(() => {
    // Try to get the document of the newly opened window
    try {
      const iframeDocument = newTab.document;
      const playButton = iframeDocument.getElementById("playButton");

      if (playButton) {
        console.log("Play button found in new tab!");
        // Click the play button every 100ms
        setInterval(() => {
          try {
            playButton.click();
          } catch (e) {
            console.error("Error clicking play button in new tab:", e);
          }
        }, 100);
      } else {
        console.log("Play button NOT found in new tab!");
      }
    } catch (e) {
      console.error("Error accessing document of new tab:", e);
    }
  }, 2000); // Wait 2 seconds for the new tab/frame to load
}

// Get the main play button element
// Note: This assumes the main page ALSO has a "playButton" ID, which it likely does NOT from your original HTML.  This part needs adjustment based on where the initial "Play" button is actually located in your main page's iframe.
const playButton = document.getElementById("playButton");

if (playButton) {
  console.log("Main Play button found!");

  // Add a click event listener to the main play button
  playButton.addEventListener("click", () => {
    // Create new tabs/frames when the main play button is clicked
    for (let i = 0; i < 5; i++) {
      createNewTab();
    }
  });

  // Click the main play button every 100ms
  setInterval(() => {
    try {
      playButton.click();
    } catch (e) {
      console.error("Error clicking main play button:", e);
    }
  }, 100);
} else {
  console.log("Main Play button NOT found!");
}

// Alternative: Using a CSS selector (Needs testing and adjustment)
const playButtonAlternative = document.querySelector('[data-test="play-button"]');
if (playButtonAlternative) {
  console.log("Play button found with selector!");
  setInterval(() => {
    try {
      playButtonAlternative.click();
    } catch (e) {
      console.error("Error clicking play button with selector:", e);
    }
  }, 100);
} else {
  console.log("Play button NOT found with selector!");
}

document.getElementById('spawn-bots').addEventListener('click', function() {
    const botCount = parseInt(document.getElementById('bot-count').value);
    const botContainer = document.getElementById('botContainer');

    // Clear existing bots
    botContainer.innerHTML = '';

    // Get the main iframe URL (assuming server connection is embedded in the URL)
    const mainIframe = document.getElementById('mainIframe');
    const serverUrl = mainIframe.src; // Use the full URL to connect bots

    // Create new bot iframes
    for (let i = 0; i < botCount; i++) {
        const botFrame = document.createElement('div');
        botFrame.classList.add('botFrame');

        // Construct the iframe URL (for demonstration, this remains the same)
        const botIframe = document.createElement('iframe');
        botIframe.src = serverUrl; // Connect to the same server

        // Appending to the botFrame and botContainer
        botFrame.appendChild(botIframe);
        botContainer.appendChild(botFrame);
    }

    console.log('Bots connected to:', serverUrl);
});
