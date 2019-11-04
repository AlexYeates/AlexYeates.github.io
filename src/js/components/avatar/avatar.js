const foreground = document.querySelector('.c-avatar__fg');
const background = document.querySelector('.c-avatar__bg');
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

      foreground.style.transform = `translateX(${-xValue}px) translateY(${yValue}px)`;
      background.style.backgroundPosition = `${xValue * 0.45}px ${-yValue *
        0.45}px`;
    });
  },
  false
);
