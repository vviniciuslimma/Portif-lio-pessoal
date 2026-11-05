'use strict';
const menuButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('#menu');
function closeMenu() {
  menu.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Abrir menu');
}
menuButton.addEventListener('click', () => {
  const isOpen = menu.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
});
menu.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('click', event => {
  if (!event.target.closest('.header')) closeMenu();
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menu.classList.contains('open')) {
    closeMenu();
    menuButton.focus();
  }
});
window.matchMedia('(max-width: 760px)').addEventListener('change', closeMenu);
const resume = document.querySelector('#resume');
document.querySelector('#open-resume').addEventListener('click', () => {
  closeMenu();
  resume.showModal();
});
document.querySelector('#close-resume').addEventListener('click', () => resume.close());
resume.addEventListener('click', event => {
  if (event.target === resume) {
    const box = resume.getBoundingClientRect();
    if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) resume.close();
  }
});
document.querySelector('#print-resume').addEventListener('click', () => window.print());
document.querySelector('#copy-email').addEventListener('click', async () => {
  const status = document.querySelector('#copy-status');
  const email = 'vviniciusgois@gmail.com';
  try {
    if (!navigator.clipboard || !window.isSecureContext) throw new Error('Clipboard unavailable');
    await navigator.clipboard.writeText(email);
    status.textContent = 'E-mail copiado!';
  } catch {
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(document.querySelector('.email-row a'));
    selection.removeAllRanges();
    selection.addRange(range);
    status.textContent = 'E-mail selecionado. Use Ctrl+C ou toque e segure para copiar.';
  }
});
