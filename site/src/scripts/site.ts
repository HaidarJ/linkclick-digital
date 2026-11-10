// Header shadow, mobile menu (dialog with focus trap and Esc), current-page nav state, sticky CTA.
const header = document.querySelector<HTMLElement>('.site-header');
const onScroll = () => header?.classList.toggle('scrolled', window.scrollY > 8);
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

const here = location.pathname;
document.querySelectorAll<HTMLAnchorElement>('.nav a, .menu-links a').forEach((a) => {
  const href = a.getAttribute('href') || '';
  if (href !== '/' && here.startsWith(href)) a.setAttribute('aria-current', 'page');
});

const openBtn = document.querySelector<HTMLButtonElement>('[data-menu-open]');
const menu = document.getElementById('menu');
if (openBtn && menu) {
  const closeBtn = menu.querySelector<HTMLButtonElement>('[data-menu-close]');
  const focusables = () => [...menu.querySelectorAll<HTMLElement>('a, button')];
  const openMenu = () => {
    menu.hidden = false;
    openBtn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
    focusables()[0]?.focus();
  };
  const closeMenu = (restore = true) => {
    menu.hidden = true;
    openBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
    if (restore) openBtn.focus();
  };
  openBtn.addEventListener('click', openMenu);
  closeBtn?.addEventListener('click', () => closeMenu());
  menu.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
    if (e.key === 'Tab') {
      const f = focusables(), first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });
  menu.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => closeMenu(false)));
}

// Sticky mobile CTA: shows once the page's first primary button has scrolled away, hides at the closing CTA.
const sticky = document.querySelector<HTMLElement>('[data-sticky]');
const firstCta = document.querySelector<HTMLElement>('main .btn-primary');
const closing = document.querySelector<HTMLElement>('[data-closing]');
if (sticky && closing && 'IntersectionObserver' in window) {
  let past = !firstCta, closingIn = false;
  const update = () => sticky.classList.toggle('is-visible', past && !closingIn);
  if (firstCta) new IntersectionObserver(([e]) => { past = !e.isIntersecting && e.boundingClientRect.top < 0; update(); }).observe(firstCta);
  new IntersectionObserver(([e]) => { closingIn = e.isIntersecting; update(); }).observe(closing);
  update();
}
