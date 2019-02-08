const isIE =
  !!navigator.userAgent.match(/Trident/g) ||
  !!navigator.userAgent.match(/MSIE/g);

if (isIE) {
  document.body.innerHTML = 'Please download a real browser';
}
