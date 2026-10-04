// Material Intelligence style: interactions feel like handling a well-made sample book—immediate, tactile, and informative rather than decorative.
const header = document.getElementById('site-header');
const menuToggle = document.getElementById('menu-toggle');
const nav = document.getElementById('site-nav');

window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 24);
}, { passive: true });

menuToggle?.addEventListener('click', () => {
  nav.classList.toggle('open');
  menuToggle.setAttribute('aria-label', nav.classList.contains('open') ? 'Close navigation' : 'Open navigation');
});

document.querySelectorAll('#site-nav a').forEach((link) => {
  link.addEventListener('click', () => nav.classList.remove('open'));
});

const productData = {
  printed: {
    index: '01',
    image: './images/printed-rolls.jpg',
    alt: 'Printed laminated film rolls',
    title: 'Printed laminated rolls',
    description: 'Gravure-printed laminates with controlled registration, consistent color, and a finish tuned to your filling line.',
    specs: ['✓ Up to 9-color gravure', '✓ Reverse & surface print', '✓ Custom barrier structures'],
  },
  plain: {
    index: '02',
    image: './images/plain-metallic-rolls.jpg',
    alt: 'Plain laminated film web',
    title: 'Plain laminated rolls',
    description: 'Plain laminate constructions for teams that need dependable barrier performance, clean conversion, and efficient downstream packing.',
    specs: ['✓ PET / PE / CPP options', '✓ Metalized & foil layers', '✓ Slit-to-width supply'],
  },
  pouches: {
    index: '03',
    image: './images/pouch-formats.jpg',
    alt: 'Flexible packaging pouches',
    title: 'Flexible packaging pouches',
    description: 'Stand-up, three-side-seal, center-seal, and custom pouch formats that balance shelf impact with production performance.',
    specs: ['✓ Gusset & zipper formats', '✓ Custom shape capability', '✓ Small to high-volume runs'],
  },
};

const image = document.getElementById('product-image');
const title = document.getElementById('product-title');
const description = document.getElementById('product-description');
const specs = document.getElementById('product-specs');
const label = document.querySelector('.product-detail .label');

document.querySelectorAll('.tab').forEach((tab) => {
  tab.addEventListener('click', () => {
    const data = productData[tab.dataset.product];
    document.querySelectorAll('.tab').forEach((item) => item.classList.remove('active'));
    tab.classList.add('active');
    image.src = data.image;
    image.alt = data.alt;
    title.textContent = data.title;
    description.textContent = data.description;
    label.textContent = `VIBGYOR / ${data.index}`;
    specs.innerHTML = data.specs.map((spec) => `<li>${spec}</li>`).join('');
  });
});

document.getElementById('quote-form')?.addEventListener('submit', (event) => {
  event.preventDefault();
  const button = event.currentTarget.querySelector('button');
  button.textContent = 'Enquiry noted ✓';
  button.style.background = '#173c75';
  button.style.color = '#fcfbf8';
});
