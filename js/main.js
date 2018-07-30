window.sr = ScrollReveal({ reset: true });
sr.reveal('.imgR', { duration: 2100 });
sr.reveal('.textR', { duration: 2400 });

sr.reveal('.box', { duration: 2000 }, 500);

sr.reveal('.icons', { duration: 1600 }, 100);

function classToggle() {
    const navs = document.querySelectorAll('.Navbar__Items')
    
    navs.forEach(nav => nav.classList.toggle('Navbar__ToggleShow'));
  }
  document.querySelector('.Navbar__Link-toggle')
    .addEventListener('click', classToggle);