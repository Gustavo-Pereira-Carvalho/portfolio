// Por enquanto vazio, mas você pode adicionar interatividade aqui depois.
// Por exemplo, smooth scroll, animações, etc.

// Exemplo: smooth scroll para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
