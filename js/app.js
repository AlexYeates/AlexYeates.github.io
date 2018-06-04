// SELECTOR VARIABLES:
const portfolioButton = document.querySelector(".portfolioButton")
const portfolio = document.querySelector(".portfolio")

// INIT:
portfolio.style.visibility = 'hidden'

// CLICK EVENTS:
portfolioButton.addEventListener("click", function(){
  if (portfolio.style.visibility === 'hidden') {
    portfolio.classList.add('pulse');
    portfolio.style.visibility = 'visible'
  } else {
    portfolio.classList.remove('pulse');
    portfolio.style.visibility = 'hidden'
  }
}); 