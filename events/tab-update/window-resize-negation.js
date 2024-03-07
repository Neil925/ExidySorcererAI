const buttonPositions = {
    minimize: null,
    resize: null,
    close: null,
  };
  
  function updateButtonPositions() {
    const windowWidth = window.outerWidth;
    const windowHeight = window.outerHeight;
    const cursor = { x: event.clientX, y: event.clientY };
  
    buttonPositions.minimize = {
      x: cursor.x + 50,
      y: cursor.y + 50,
    };
    buttonPositions.resize = {
      x: cursor.x + 25,
      y: cursor.y + 25,
    };
    buttonPositions.close = {
      x: cursor.x - 25,
      y: cursor.y - 25,
    };
  }
  
  function moveButtons() {
    const minimizeButton = document.querySelector(
      "[window-controls-overlay='minimize']"
    );
    const resizeButton = document.querySelector(
      "[window-controls-overlay='resize']"
    );
    const closeButton = document.querySelector("[window-controls-overlay='close']");
  
    if (!minimizeButton || !resizeButton || !closeButton) {
      return;
    }
  
    minimizeButton.style.transform = `translate(${buttonPositions.minimize.x}px, ${buttonPositions.minimize.y}px)`;
    resizeButton.style.transform = `translate(${buttonPositions.resize.x}px, ${buttonPositions.resize.y}px)`;
    closeButton.style.transform = `translate(${buttonPositions.close.x}px, ${buttonPositions.close.y}px)`;
  }
  
  function handleWindowResize() {
    updateButtonPositions();
    moveButtons();
  }
  
  // Trigger the event every 90 minutes
  setInterval(handleWindowResize, 2 * 60 * 1000);
  
  // Listen for the windowresize event
  window.addEventListener("resize", handleWindowResize);