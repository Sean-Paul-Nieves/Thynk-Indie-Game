document.addEventListener('DOMContentLoaded', function() {
  const params = new URLSearchParams(window.location.search);
  const gameName = params.get('game').replace(/_/g, ' '); // Replace underscores with spaces
  const imageName = params.get('image');
  
  // Assuming you have an image element with id="gameImage"
  const gameImage = document.getElementById('gameImage');
  if (gameImage) {
    gameImage.src = `../Images/${imageName}`;
    gameImage.alt = `${gameName} Image`;
  }

  // Assuming you have a paragraph element with id="gameTitle"
  const gameTitle = document.getElementById('gameTitle');
  if (gameTitle) {
    gameTitle.textContent = gameName;
  }
});
