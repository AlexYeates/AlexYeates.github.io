import '../scss/main.scss';
import './modules/analytics.js';

const isIE =
  !!navigator.userAgent.match(/Trident/g) ||
  !!navigator.userAgent.match(/MSIE/g);

if (isIE) {
  document.body.innerHTML =
    '<p style="text-align: center;"> You are using an <strong>outdated</strong> browser. Please <a href="https://browsehappy.com/">upgrade your browser</a>!</p>';
}
