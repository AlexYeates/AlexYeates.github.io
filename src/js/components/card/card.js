const images = document.querySelectorAll('.c-card__fg');
const backgrounds = document.querySelectorAll('.c-card__bg');
const range = 40;

const calcValue = (a, b) => ((a / b) * range - range / 2).toFixed(1);

let timeout;
document.addEventListener(
  'mousemove',
  ({ x, y }) => {
    if (timeout) {
      window.cancelAnimationFrame(timeout);
    }

    timeout = window.requestAnimationFrame(() => {
      const yValue = calcValue(y, window.innerHeight);
      const xValue = calcValue(x, window.innerWidth);

      [].forEach.call(images, image => {
        image.style.transform = `translateX(${-xValue}px) translateY(${yValue}px)`;
      });

      [].forEach.call(backgrounds, background => {
        background.style.backgroundPosition = `${xValue * 0.45}px ${-yValue *
          0.45}px`;
      });
    });
  },
  false
);
