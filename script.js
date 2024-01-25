function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

  const photos = document.querySelectorAll('.photo');

  photos.forEach(photo => {
    photo.addEventListener('click', () => {
      const imageUrl = photo.getAttribute('src');
      window.open(imageUrl, '_blank');
    });
  });

