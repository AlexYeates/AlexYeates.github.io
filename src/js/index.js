import '../scss/main.scss';

const imported = document.createElement('script');
imported.src = 'https://www.googletagmanager.com/gtag/js?id=UA-120742325-1';
document.head.appendChild(imported);

window.dataLayer = window.dataLayer || [];
function gtag() {
  dataLayer.push(arguments);
}
gtag('js', new Date());
gtag('config', 'UA-120742325-1');

const trackOutboundLink = url => {
  gtag('event', 'click', {
    event_category: 'outbound',
    event_label: url,
    transport_type: 'beacon',
    event_callback: () => {
      window.open(url, '_blank');
    }
  });
};

const links = Array.from(document.querySelectorAll('a'));
links.map(e =>
  e.addEventListener('click', event => {
    event.preventDefault();
    trackOutboundLink(e.href);
  })
);
