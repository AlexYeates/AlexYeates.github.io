const isIE =
  !!navigator.userAgent.match(/Trident/g) ||
  !!navigator.userAgent.match(/MSIE/g);

const message = `
<p style="text-align: center;"> You are using an <a href="https://www.bbc.co.uk/news/technology-35291938"><strong>unsecure</strong></a> browser. Please use an alternative such as <a href="https://www.google.co.uk/chrome/?brand=CHBD&gclid=Cj0KCQiA14TjBRD_ARIsAOCmO9YRXLmAYAAx6GTkgFrmpIBroBiDnbgSfBfBznsvxN9cwCfn7pRJec0aAitFEALw_wcB&gclsrc=aw.ds">Chrome</a> or <a href="https://www.mozilla.org/en-US/firefox/new/?xv=chrome&utm_source=google&utm_medium=cpc&utm_campaign=Firefox%7cGG%7cSearch%7cNB%7cExact%7cSP%7cUK%7cEN%7cDK%7cText%7cCompetitor&utm_term=download%20chrome&utm_content=A144_A203_C009428&&gclid=Cj0KCQiA14TjBRD_ARIsAOCmO9bI4mAaPBDnffUhIF_NwuMRLkGvk8AsjEFIsndvxhm5lFDhyTvn010aAga5EALw_wcB&gclsrc=aw.ds">Firefox</a>.</p>
`;

if (isIE) {
  document.body.innerHTML = message;
}
