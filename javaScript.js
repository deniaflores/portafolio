// Navegación por páginas
const pageTurnBtn = document.querySelectorAll('.nextprev-btn');

pageTurnBtn.forEach((el, index) => {
  el.onclick = () => {
    const pageTurnId = el.getAttribute('data-page');
    const pageTurn = document.getElementById(pageTurnId);

    if (pageTurn.classList.contains('turn')) {
      pageTurn.classList.remove('turn');
      setTimeout(() => {
        pageTurn.style.zIndex = 20 - index;
      }, 100);
    } else {
      pageTurn.classList.add('turn');
      setTimeout(() => {
        pageTurn.style.zIndex = index + 20;
      }, 100);
    }
  };
});

// Botón "Contáctanos" abre todas las páginas
const pages = document.querySelectorAll('.book-page.page-right');
const contactMeBtn = document.querySelector('.btn.contact-me');

contactMeBtn.onclick = () => {
  pages.forEach((page, index) => {
    setTimeout(() => {
      page.classList.add('turn');
      setTimeout(() => {
        page.style.zIndex = 20 + index;
      }, 100);
    }, (index + 1) * 200 + 100);
  });
};

// Animación de portada
const coverRight = document.querySelector('.cover.cover-right');

setTimeout(() => {
  coverRight.classList.add('turn');
}, 2100);

setTimeout(() => {
  coverRight.style.zIndex = -1;
}, 3300);

// Apertura automática de páginas
let totalPages = pages.length;
let pageNumber = totalPages - 1;

function reverseIndex() {
  pageNumber = (pageNumber - 1 + totalPages) % totalPages;
}

pages.forEach((_, index) => {
  setTimeout(() => {
    pages[pageNumber].classList.remove('turn');
    setTimeout(() => {
      pages[pageNumber].style.zIndex = index + 10;
      reverseIndex();
    }, 100);
  }, (index + 1) * 200 + 3000);
});


// Espera que cargue el DOM
document.addEventListener('DOMContentLoaded', () => {
  const btnContact = document.getElementById('btnContact');
  const wrapper = document.querySelector('.wrapper');
  const formContainer = document.getElementById('contactFormContainer');

  btnContact.addEventListener('click', () => {
    // Mueve el contenedor del formulario al final de wrapper
    wrapper.appendChild(formContainer);

    // Opcional: hacer scroll suave hacia el formulario
    formContainer.scrollIntoView({ behavior: 'smooth' });
  });
});
